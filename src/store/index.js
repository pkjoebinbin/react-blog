import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducer from './reducer/login-reducer'
console.log(reducer)
let store = createStore(
  combineReducers(reducer),
  applyMiddleware(thunk)
)

export default store