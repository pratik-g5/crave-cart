import { useState } from 'react';
import image from './logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState('login');

  return (
    <div className="header">
      <Link to="/">
        {' '}
        <img
          id="logo"
          src={image}
        />{' '}
      </Link>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Cart</li>
          <button
            id="login"
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
