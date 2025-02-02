import RestCards from './RestaurantCards';
import { useState, useEffect } from 'react';
import { SWIGGY_FETCH_DATA } from '../utils/constants';
import Shimmer from '../Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchItem, setSearchItem] = useState('');

  const isOnline = useOnlineStatus();

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

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <div className="p-2 ml-20 flex">
        <input
          type="text"
          className=" mr-2 border rounded-sm"
          placeholder="Search Restaurants"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button
          className="px-3 border-black cursor-pointer rounded-md bg-gray-300"
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
          className="px-4 ml-6 border cursor-pointer rounded-md bg-blue-200 items-stretch"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="p-5 flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <RestCards
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
