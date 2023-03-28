import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import  reducer  from '../reducer/index';
import thunkMiddleware from "redux-thunk";



const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // nos permite conectar con la extencio del navegador => redux-devtools-extension

const store = createStore(
    reducer, 
    composeEnhacers(applyMiddleware(thunkMiddleware))); // esta linea nos permite hacer peticiones a un servidor



export default store;

