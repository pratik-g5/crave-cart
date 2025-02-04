import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data }) => {
  //   console.log(data);

  const [showItems, useShowItems] = useState(true);

  const handleClick = () => {
    useShowItems(!showItems);
  };

  return (
    <div className="w-8/12 mb-2 p-4 border-2 shadow-lg">
      <div
        className="flex justify-between p-3 cursor-pointer"
        onClick={data?.card?.card?.itemCards && handleClick}
      >
        <span className="font-bold">
          {data?.card?.card?.title}
          {data?.card?.card?.itemCards &&
            `    (${data.card.card.itemCards.length})`}
        </span>
        {!data?.card?.card?.categories && <span>{showItems ? '△' : '▽'}</span>}
      </div>
      {showItems && <ItemList list={data?.card?.card} />}
    </div>
  );
};

export default RestaurantCategory;
