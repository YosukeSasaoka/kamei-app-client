import { combineReducers } from 'redux'
import todos from './todos'
import uuid from './uuid'
import name from './name'
import geolocation from './geolocation'
import login from './login'
import { routerReducer } from 'react-router-redux'
 
export default combineReducers({ uuid, name, todos, geolocation, login, routing: routerReducer })