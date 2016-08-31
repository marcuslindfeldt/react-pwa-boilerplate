import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from 'layouts/app-layout';
import HomePage from 'pages/home/home-page';
import AboutPage from 'pages/about/about-page';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
