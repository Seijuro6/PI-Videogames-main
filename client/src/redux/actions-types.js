import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))) // hacer peticiones servidor

export default store;