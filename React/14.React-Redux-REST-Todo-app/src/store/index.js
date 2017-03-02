import rootReducer from '../reducers';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import $ from "jquery";

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunk];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

var initialState = {
    todos: []
};
let store = createStore(rootReducer, initialState, enhancer);

export default store;