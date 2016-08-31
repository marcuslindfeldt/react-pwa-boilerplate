import React from 'react';
import { Link } from 'react-router';

const AppHeader = () => (
  <header className="app-header">
    <nav>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default AppHeader;
