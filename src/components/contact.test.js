import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Contact from './contact'

test('it displays the appropriate hello message on contact page', t => {
  const wrapper = shallow(<Contact />)
  t.equals(wrapper.type(), 'div', 'The component is wrapped in a div')
  t.equals(wrapper.childAt(0).type(), 'h1', 'The component has an element of type h1')
  t.equals(wrapper.childAt(0).text(), 'Welcome to Contact Page', 'The component has matching text')
  t.end()
})
