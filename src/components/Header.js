import { useState } from 'react';
import image from './logo.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const isOnline = useOnlineStatus();

  const [btnName, setBtnName] = useState('login');

  return (
    <div className="flex justify-between items-center border-b-1 shadow-sm">
      <div className="">
        <Link to="/">
          <img
            className="w-24 ml-2 p-3 "
            src={image}
          />
        </Link>
      </div>

      <div className="flex ">
        <ul className="flex">
          <li className="px-4">Online Status: {isOnline ? '🟢' : '🔴'}</li>
          <li className="px-4">
            <Link to="/contact">📞Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">ℹ️ About</Link>
          </li>
          <li className="px-4">🛒Cart</li>
          <button
            className="px-4 mr-3 text-inherit	border rounded-md bg-gray-600 cursor-pointer"
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
