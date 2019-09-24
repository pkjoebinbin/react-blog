import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'


let store = createStore(
  applyMiddleware(thunk)
)

export default store