import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './hello-world.jsx';

test('hello world contains correct paragraph', t => {
  const component = shallow(<HelloWorld />);
  t.is(component.text(), 'Hello World!');
  t.truthy(component.find('h1').hasClass('hello-world'));
});
