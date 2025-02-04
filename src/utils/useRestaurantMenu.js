import { useEffect, useState } from 'react';
import { MENU_URL1, MENU_URL2 } from './constants';

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL1 + resId + MENU_URL2);

    const json = await data.json();

    setRestaurantData(json);
  };

  return restaurantData;
};

export default useRestaurantMenu;
