import { CDN_URL } from '../utils/constants';
import InnerRestaurantCategory from './InnerRestaurantCategory';

const ItemList = ({ list }) => {
  // console.log(list);
  return (
    <div>
      {list?.itemCards ? (
        <div className="border p-2">
          {list?.itemCards.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="border-b text-left flex justify-between"
            >
              {' '}
              <div className="w-9/12">
                <h1 className="text-base font-bold">
                  {item?.card?.info?.name}
                </h1>
                {item?.card?.info?.price ? (
                  <span className="text-gray-700 font-bold text-sm">
                    ₹{item?.card?.info?.price / 100}
                  </span>
                ) : (
                  <span className="text-gray-700 font-bold text-sm">
                    ₹{item?.card?.info?.defaultPrice / 100}
                  </span>
                )}
                <p className="text-xs text-gray-500 py-2">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="relative">
                <label className="absolute ml-9  bg-black bg-opacity-80 text-white px-3 mt-24 rounded-md cursor-pointer">
                  Add +
                </label>
                {item?.card?.info?.imageId ? (
                  <img
                    className="w-32 h-32 py-2 rounded-lg"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                ) : (
                  <span className="w-32 h-32"> </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <InnerRestaurantCategory categories={list?.categories} />
        </div>
      )}
    </div>
  );
};

export default ItemList;
