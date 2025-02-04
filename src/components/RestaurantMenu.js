import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from '../Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);

  if (resMenuData === null) return <Shimmer />;

  // console.log(resMenuData?.data?.cards[2]?.card?.card?.info);

  const { name, avgRating, costForTwoMessage } =
    resMenuData?.data?.cards[2]?.card?.card?.info;

  // console.log(
  //   resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const menuCategories =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ||
        c?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    );

  // console.log(menuCategories);
  // menuCategories.map((category) => {
  //   console.log(category?.card?.card?.title);
  // });

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-xl">{name}</h1>
      <p className="text-sm text-gray-500">
        {' '}
        ☆ {avgRating} • {costForTwoMessage}{' '}
      </p>
      <div className=" m-4 p-4 flex items-center flex-col">
        {menuCategories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
