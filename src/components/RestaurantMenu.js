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
  );
};

export default RestaurantMenu;
