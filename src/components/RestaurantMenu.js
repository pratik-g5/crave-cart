import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from '../Shimmer';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resMenuData === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage } =
    resMenuData?.data?.cards[2]?.card?.card?.info;

  const menuCategories =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ||
        c?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    );

  return (
    <div className=" p-8 text-center bg-slate-200">
      <h1 className="font-bold text-xl">{name}</h1>
      <p className="text-sm text-gray-500">
        {' '}
        ☆ {avgRating} • {costForTwoMessage}{' '}
      </p>
      <div className=" m-4 p-4 flex items-center flex-col">
        {menuCategories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category}
            showItems={
              category?.card?.card?.categories ||
              (index === showIndex ? true : false)
            }
            setShowIndex={() =>
              setShowIndex((showIndex) => (showIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
