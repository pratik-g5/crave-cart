import { Link } from 'react-router';
import { CDN_URL } from '../utils/constants';

const RestaurantCards = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  // console.log(props);
  return (
    <div
      data-testid="resCard"
      className="m-4 flex flex-wrap w-52 h-72 bg-gray-200 hover:border rounded-md  hover:shadow-2xl overflow-hidden"
    >
      <Link to={'/restaurants/' + id}>
        <div className="flex flex-col justify-between">
          <img
            className="w-52 h-36 rounded-md"
            src={CDN_URL + cloudinaryImageId}
          />
          <h4 className="p-2 font-bold text-ellipsis overflow-hidden">
            {name}
          </h4>
          <h6 className="p-2 text-xs text-gray-700">
            {cuisines.slice(0, 6).join(', ')}
          </h6>
          {/* <h5 className=" p-2 text-xs text-gray-700"></h5> */}
          <h5 className="p-2 text-sm">
            ⭐ {avgRating} • {costForTwo}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export const DiscountLabel = (RestaurantCards) => {
  return (props) => {
    const { header, subHeader } =
      props?.resData?.info?.aggregatedDiscountInfoV3;
    // console.log(props);
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-[10px] font-semibold px-2 py-1 rounded-md shadow-md">
          {header + ' ' + subHeader}
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
