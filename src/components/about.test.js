import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import About from './about'

test('it displays the appropriate hello message', t => {
  const wrapper = shallow(<About />)
  t.equals(wrapper.type(), 'div', 'The component is wrapped in a div')
  t.equals(wrapper.childAt(0).type(), 'h1', 'The component has an element of type h1')
  t.equals(wrapper.childAt(0).text(), 'Welcome to About Page', 'The component has matching text')
  t.end()
})
