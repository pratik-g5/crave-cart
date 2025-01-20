
import RestCards from "./RestaurantCards";
import { useState, useEffect } from "react";

const Body = () => {

    let arr = useState([]);
    const [restaurantList, setRestaurantList] = arr;

    useEffect( () => {
        fetchData();
    }
    ,[]);

    const fetchData = async () => {  
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       
        const json = await data.json();

        const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

        setRestaurantList(restaurants);
    }

    return (
        <div id="body">
            <div id="filter">
                <button id="top-rate" onClick={() => { 
                    const filteredList = restaurantList.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setRestaurantList(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div id="rest-container">
                {restaurantList.map((restaurant) => (
                    <RestCards key={restaurant.info.id} resData={restaurant}/>
                ))};
            
            </div>
        </div>

    )
}

export default Body;