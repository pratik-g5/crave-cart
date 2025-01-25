import React from 'react';
import Shimmer from '../Shimmer';

const RestaurantMenuCards = (props) => {
  const { resMenuData } = props;
  const name = resMenuData?.data?.cards[2]?.card?.card?.info?.name;
  const id = resMenuData?.data?.cards[2]?.card?.card?.info?.id;

  let title =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.title;

  console.log(title);

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
  // [0]?.card?.info.name
  console.log(itemCards);

  //   const menu = item?.name;

  return (
    <div id="MenuCards">
      <h1>{name}</h1>

      <h3>{title}</h3>
      <div id="items">
        <ul>
          {itemCards.length === 0 ? (
            <li>No items available</li>
          ) : (
            itemCards.map((itemName) => (
              <li key={itemName?.card?.info?.id}>
                {itemName?.card?.info?.name} - {'     Rs.'}
                {!itemName?.card?.info?.defaultPrice
                  ? itemName?.card?.info?.price / 100
                  : itemName?.card?.info?.defaultPrice / 100}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenuCards;
