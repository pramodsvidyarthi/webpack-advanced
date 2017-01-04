import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router'

import Navigation from './navigation'

test('Layout has two rows and four columns', t => {
  t.plan(2)
  const wrapper = shallow(<Navigation />)
  t.equals(wrapper.find(Row).length, 2, 'There are two rows')
  t.equals(wrapper.find(Col).length, 4, 'There are four columns')
  t.end()
})

test('There are four links and the link names are correct', t => {
  t.plan(5)
  const wrapper = shallow(<Navigation />)
  t.equals(wrapper.find(Link).length, 4, 'There are four links')
  t.equals(shallow(wrapper.find(Link).nodes[0]).props().children, 'Home', 'First link is Home')
  t.equals(shallow(wrapper.find(Link).nodes[1]).props().children, 'About', 'Second link is About')
  t.equals(shallow(wrapper.find(Link).nodes[2]).props().children, 'Contact', 'Third link is Contact')
  t.equals(shallow(wrapper.find(Link).nodes[3]).props().children, 'Portfolio', 'Last link is Portfolio')
  t.end()
})
