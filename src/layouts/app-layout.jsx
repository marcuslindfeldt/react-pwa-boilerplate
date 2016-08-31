import React, { PropTypes } from 'react';
import AppHeader from 'components/app-header/app-header';

const AppLayout = ({ children }) => (
  <div className="app-layout">
    <AppHeader />
    <main>
      {children}
    </main>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
