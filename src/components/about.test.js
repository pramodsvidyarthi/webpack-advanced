import test from 'tape';
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import About from './about';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

test('it displays the appropriate hello message', t => {
  const wrapper = shallow(<About />);
  t.equals(wrapper.type(), 'div', 'The component is wrapped in a div');
  t.equals(wrapper.childAt(0).type(), 'h1', 'The component has an element of type h1');
  t.equals(wrapper.childAt(0).text(), 'Welcome to About Page', 'The component has matching text');
  t.end();
});

test('it calls componentDidMount', t => {
  sinon.spy(console, 'log');
  const wrapper = mount(<About />);
  const message = 'Hello there...this line is not touched';
  t.ok(wrapper.length, 'it has been rendered');
  t.equals(console.log.callCount, 1, 'it logs the message');
  t.ok(console.log.calledWith(message), 'it has been called with the same args');
  console.log.restore();
  t.end();
});
