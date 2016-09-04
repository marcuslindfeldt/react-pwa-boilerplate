import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import AppLayout from './app-layout';

test('App Layout - exists', t => {
  const component = shallow(<AppLayout children={React.createElement('')} />);
  t.truthy(component.first());
});
