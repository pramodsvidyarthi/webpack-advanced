import test from 'tape'
import React from 'react'
import { shallow, render } from 'enzyme'
import { Row, Col } from 'reactstrap'

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
  const wrapper = render(<Navigation />)
  t.equals(wrapper.find('a').length, 4, 'There are four links')
  t.equals(wrapper.find('a').eq(0).text(), 'Home', 'First link is Home')
  t.equals(wrapper.find('a').eq(1).text(), 'About', 'Second link is About')
  t.equals(wrapper.find('a').eq(2).text(), 'Contact', 'Third link is Contact')
  t.equals(wrapper.find('a').eq(3).text(), 'Portfolio', 'Fourth link is Portfolio')
  t.end()
})
