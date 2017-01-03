import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import Nav from './components/navigation'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Nav} />
        <Route path='/about' getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./components/about'))
          })
        }} />
        <Route path='/contact' getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./components/contact'))
          })
        }} />
        <Route path='/portfolio' getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./components/portfolio'))
          })
        }} />
      </Route>
    </Router>
  )
}

