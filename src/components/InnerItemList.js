import { CDN_URL } from '../utils/constants';

const InnerItemList = ({ list }) => {
  return (
    <div className="border p-2">
      {list.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b text-left flex justify-between"
        >
          {console.log(item?.card?.info)}
          <div className="w-9/12">
            <h1 className="text-base font-bold">{item?.card?.info?.name}</h1>
            <span className="text-gray-700 font-bold text-sm">
              ₹{item?.card?.info?.price / 100}
            </span>
            <p className="text-xs text-gray-500 py-2">
              {item?.card?.info?.description}
            </p>
          </div>
          {item?.card?.info?.imageId && (
            <img
              className="w-32 h-32 py-2 rounded-lg"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default InnerItemList;
