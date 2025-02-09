import { useContext, useState } from 'react';
import image from './logo.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/UserContext';

const Header = () => {
  const { loggedInUser } = useContext(userContext);
  console.log(loggedInUser);

  const isOnline = useOnlineStatus();

  const [btnName, setBtnName] = useState('login');

  return (
    <div className="flex justify-between items-center border-b-1 shadow-xl bg-orange-300 ">
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
          <li>Online Status: {isOnline ? '🟢' : '🔴'}</li>
          <li className="px-4">
            <Link to="/contact">📞Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">ℹ️ About</Link>
          </li>
          <li className="px-4">🛒Cart</li>
          <button
            className="px-4 mr-3 text-inherit	border border-black rounded-md bg-purple-200 cursor-pointer"
            onClick={() =>
              btnName === 'login' ? setBtnName('logout') : setBtnName('login')
            }
          >
            {btnName}
          </button>
          <li className="px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
