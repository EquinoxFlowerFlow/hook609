import { createStore , compose , combineReducers , applyMiddleware } from 'redux';
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import login from '@/reducer/login'
import home from '@/reducer/home'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    login,
    home
  })
  , composeEnhancers(applyMiddleware(promise,thunk)))


export {store}
