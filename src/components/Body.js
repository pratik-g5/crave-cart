import resList from "../utils/mockData";
import RestCards from "./RestaurantCards";
import { useState } from "react";

const Body = () => {

    let [restaurantList, setRestaurantList] = useState(resList);

    return (
        <div id="body">
            <div id="filter">
                <button id="top-rate" onClick={() => { 
                    const filteredList = restaurantList.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setRestaurantList(filteredList);
                }}>Sort by Rating</button>
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