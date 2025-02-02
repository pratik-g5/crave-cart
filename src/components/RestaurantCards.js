import { Link } from 'react-router';
import { CDN_URL } from '../utils/constants';

const RestCards = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="m-4 flex flex-wrap w-52 h-80 bg-gray-200 hover:border rounded-md  hover:shadow-2xl ">
      <Link to={'/restaurants/' + id}>
        <div className="flex flex-col justify-between ">
          <img
            className="w-52 h-36 rounded-md"
            src={CDN_URL + cloudinaryImageId}
          />
          <h4 className="p-2 font-bold">{name}</h4>
          <h6 className="p-2 text-xs text-gray-700">
            {cuisines.slice(0, 6).join(', ')}
          </h6>
          <h5 className=" p-2 text-xs text-gray-700">{costForTwo}</h5>
          <h5 className="px-2 text-sm">{avgRating} ⭐</h5>
        </div>
      </Link>
    </div>
  );
};

export default RestCards;
