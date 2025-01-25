import { useState } from 'react';
import image from './logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState('login');

  return (
    <div className="header">
      <img
        id="logo"
        src={image}
      />
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
