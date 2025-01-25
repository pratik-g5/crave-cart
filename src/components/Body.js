import RestCards from './RestaurantCards';
import { useState, useEffect } from 'react';
import { SWIGGY_FETCH_DATA } from '../utils/constants';
import Shimmer from '../Shimmer';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_FETCH_DATA);

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(restaurants);
    setRestaurantList(restaurants);

    setFilteredRestaurants(restaurants);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div id="filter">
        <div id="search-items">
          <input
            type="text"
            id="search"
            placeholder="Search Restaurants"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            id="search-btn"
            onClick={() => {
              console.log(searchItem);
              const filteredRestaurants = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchItem.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          id="top-rate"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div id="rest-container">
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
