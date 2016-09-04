import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './app-header';

test('App header - exists', t => {
  const component = shallow(<AppHeader />);
  t.truthy(component.find('header'));
});
