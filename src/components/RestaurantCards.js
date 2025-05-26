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
      className="m-4 flex flex-wrap w-52 h-72 bg-slate-300 rounded-xl overflow-hidden 
             transition-all
            border border-orange-100 hover:scale-95"
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
      <div className="relative group">
        <div className="relative group transition-all group-hover:scale-95">
          <label className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-[10px] font-semibold px-2 py-1 rounded-md shadow-md z-10">
            {header + ' ' + subHeader}
          </label>
          <RestaurantCards {...props} />
        </div>
      </div>
    );
  };
};

export default RestaurantCards;
