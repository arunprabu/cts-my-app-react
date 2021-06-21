import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // comp should return JSX -- It is not HTML
  return (
    <div>
      <p>My App!</p>
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
      </ul>
    </div>
  )
}

export default Header;
