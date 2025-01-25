import { useEffect, useState } from 'react';
import Shimmer from '../Shimmer';
import RestaurantMenuCards from './RestaurantMenuCards';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const URL1 =
    'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=';

  console.log(URL1 + resId + '&catalog_qa=undefined&submitAction=ENTER');

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      URL1 + resId + '&catalog_qa=undefined&submitAction=ENTER'
    );

    const json = await data.json();
    console.log(json);

    setResInfo(json);
  };
  //   console.log(resInfo);

  return (
    <div id="menu">
      <RestaurantMenuCards resMenuData={resInfo} />
    </div>
  );
};

export default RestaurantMenu;
