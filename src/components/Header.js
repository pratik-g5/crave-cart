import { useContext, useState } from 'react';
import image from './logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const { loggedInUser } = useContext(userContext);

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  const isOnline = useOnlineStatus();

  const [btnName, setBtnName] = useState('login');
  return (
    <div className="flex justify-between items-center border-b-[1px] h-[4.5rem] relative bg-orange-500/80 backdrop-blur-sm">
      <div className="absolute left-0">
        <Link to="/">
          <img
            className="w-24 ml-2 p-3 h-auto"
            src={image}
          />
        </Link>
      </div>

      <div className="flex m-2 p-2 justify-end w-full">
        <ul className="flex ml-auto">
          <li className="px-4">Online Status: {isOnline ? '🟢' : '🔴'}</li>
          <li className="px-4">
            <Link to="/contact">Contact Us📞</Link>
          </li>
          <li className="px-4">
            <Link to="/about">Aboutℹ️ </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart({cart.length})🛒</Link>
          </li>
          <li className="px-2 mr-2">{loggedInUser}</li>
          <button
            className="px-4  text-inherit	border border-black rounded-md bg-red-300 cursor-pointer"
            onClick={() =>
              btnName === 'login' ? setBtnName('logout') : setBtnName('login')
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
