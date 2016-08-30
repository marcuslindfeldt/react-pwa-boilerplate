import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './hello-world';

test('hello world contains correct paragraph', t => {
  const component = shallow(<HelloWorld />);
  t.is(component.text(), 'Hello World!');
});
