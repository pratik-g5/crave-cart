import { Link } from 'react-router';
import { CDN_URL } from '../utils/constants';

const RestCards = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div id="rest-cards">
      <Link to={'/restaurants/' + id}>
        <div className="card1">
          <img
            id="logo1"
            src={CDN_URL + cloudinaryImageId}
          />
          <h4>{name}</h4>
          <h6>{cuisines.join(', ')}</h6>
          <h5>{avgRating} ⭐</h5>
          <h5>{costForTwo}</h5>
        </div>
      </Link>
    </div>
  );
};

export default RestCards;
