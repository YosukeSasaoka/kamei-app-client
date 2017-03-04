import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import SimpleMap from './components/SimpleMap'
import Todo from './components/Todo'
import User from './components/User'
import Login from './components/Login'

import configureStore, { DevTools } from './store/configureStore'
const store = configureStore()

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Login}/>
        <Route path="Login" component={Login}/>
        <Route path="User" component={User}/>
        <Route path="Todo" component={Todo}/>
        <Route path="SimpleMap" component={SimpleMap}/>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('main')
);

