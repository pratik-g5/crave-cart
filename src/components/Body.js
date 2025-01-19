import resList from "../utils/mockData";
import RestCards from "./RestaurantCards";

const Body = () => {
    return (
        <div id="body">
            <div id="search">
                <input type="search" id="searchBar" placeholder="search" />
            </div>
            <div id="rest-container">
                {resList.map((restaurant) => (
                    <RestCards key={restaurant.info.id} resData={restaurant}/>
                ))};
            
            </div>
        </div>

    )
}

export default Body;