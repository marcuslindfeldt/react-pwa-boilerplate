import React from 'react';
import { Link } from 'react-router';
import styles from './app-header.css';

const AppHeader = () => (
  <header className={styles.appHeader}>
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
