import RestaurantCards, { DiscountLabel } from './RestaurantCards';
import { useState, useEffect } from 'react';
import { SWIGGY_FETCH_DATA } from '../utils/constants';
import Shimmer from '../Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchItem, setSearchItem] = useState('');

  const [isTopRated, setIsTopRated] = useState(false);

  const isOnline = useOnlineStatus();

  const LabeledRestaurantCard = DiscountLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_FETCH_DATA);

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(restaurants);

    setFilteredRestaurants(restaurants);
  };

  if (isOnline === false) return <h1>You are offline!</h1>;

  // console.log(filteredRestaurants);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <div className="p-2 ml-20 flex">
        <input
          type="text"
          data-testid="searchInput"
          className=" mr-2 border rounded-sm"
          placeholder="Search Restaurants"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button
          className="px-3 border-black cursor-pointer rounded-xl bg-gray-300 hover:scale-110 hover:border"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchItem.toLowerCase())
            );

            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>

        <button
          className="px-4 ml-6 border cursor-pointer rounded-xl bg-blue-200 items-stretch hover:scale-110 hover:border-black"
          onClick={() => {
            setIsTopRated(!isTopRated);

            const filteredList = !isTopRated
              ? filteredRestaurants.filter((res) => res.info.avgRating > 4.3)
              : restaurantList;

            setFilteredRestaurants(filteredList);
          }}
        >
          {isTopRated ? 'All Restaurants' : 'Ratings 4.3+'}
        </button>
      </div>
      <div className="p-5 flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) =>
          restaurant?.info?.aggregatedDiscountInfoV3 ? (
            <LabeledRestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCards
              key={restaurant.info.id}
              resData={restaurant}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
