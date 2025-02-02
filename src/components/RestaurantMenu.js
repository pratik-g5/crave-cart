import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useState } from 'react';
import Shimmer from '../Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);

  const [isExpanded, setIsExpanded] = useState(false);

  const name = resMenuData?.data?.cards[2]?.card?.card?.info?.name;
  const id = resMenuData?.data?.cards[2]?.card?.card?.info?.id;

  let title =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.title;

  if (resMenuData === null) return <Shimmer />;

  if (title === 'Top Picks') {
    var itemCards =
      resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards;

    title =
      resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.title;
  } else {
    var itemCards =
      resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
  }

  return (
    <div
      id="MenuCards"
      className="p-6 mt-2.5 max-w-2xl mx-auto bg-white rounded-xl shadow-md"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        {name}
      </h1>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <button
          className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-lg font-semibold text-gray-800">
            {title} ({itemCards.length})
          </h3>
          <span
            className={`text-sm transition-transform duration-500 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            ▽
          </span>
        </button>

        <div
          className={`transition-all duration-300 ${
            isExpanded ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
          }`}
        >
          <ul className="p-4 space-y-3">
            {!itemCards || itemCards.length === 0 ? (
              <li className="text-gray-500 text-center py-3">
                No items available
              </li>
            ) : (
              itemCards.map((itemName) => (
                <li
                  key={itemName?.card?.info?.id}
                  className="flex justify-between items-center border-b last:border-none py-2"
                >
                  <div>
                    <p className="text-gray-900 font-medium">
                      {itemName?.card?.info?.name}
                    </p>
                    <p className="text-gray-600 font-semibold">
                      Rs.{' '}
                      {itemName?.card?.info?.defaultPrice
                        ? itemName?.card?.info?.defaultPrice / 100
                        : itemName?.card?.info?.price / 100}
                    </p>
                  </div>
                  <img
                    id="food-logo"
                    className="w-24 h-24 rounded-md object-cover"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemName?.card?.info?.imageId}`}
                    alt={itemName?.card?.info?.name}
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );

  /*  return (
    <div
      id="MenuCards"
      className="menu-container"
    >
      <h1 className="restaurant-name">{name}</h1>

      <div className="accordion-section">
        <button
          className="accordion-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="section-title">
            {title}
            {`   (${itemCards.length})`}
          </h3>
          <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>▽</span>
        </button>

        <div className={`accordion-content ${isExpanded ? 'show' : ''}`}>
          <ul className="menu-list">
            {!itemCards || itemCards.length === 0 ? (
              <li className="no-items">No items available</li>
            ) : (
              itemCards.map((itemName) => (
                <li
                  key={itemName?.card?.info?.id}
                  className="menu-item"
                >
                  <p className="item-name">{itemName?.card?.info?.name}</p>
                  <p className="item-price">
                    Rs.{' '}
                    {!itemName?.card?.info?.defaultPrice
                      ? itemName?.card?.info?.price / 100
                      : itemName?.card?.info?.defaultPrice / 100}
                  </p>
                  <img
                    id="food-logo"
                    src={
                      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' +
                      itemName?.card?.info?.imageId
                    }
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );  */
};

export default RestaurantMenu;
