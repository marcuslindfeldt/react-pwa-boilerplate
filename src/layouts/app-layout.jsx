import React, { PropTypes } from 'react';
import AppHeader from 'components/app-header/app-header';
import styles from './app-layout.css';

const AppLayout = ({ children }) => (
  <div className={styles.appLayout}>
    <AppHeader />
    <main className={styles.main}>
      {children}
    </main>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
