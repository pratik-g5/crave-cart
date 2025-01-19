import { CDN_URL } from "../utils/constants";

const RestCards = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating,costForTwo} = resData?.info;
    return (
        <div id="rest-cards">
            <div className="card1">
                <img id='logo1' src={CDN_URL + resData.info.cloudinaryImageId} />
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{avgRating}</h5>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    )
}


export default RestCards;