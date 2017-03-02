
import rootReducer from '../reducers';
import { createStore } from "redux";


var initialState = {
    todos: [
        { completed: false, id: 0, text: 'Use Redux' },
        { text: 'Learn React', completed: true, id: 1 }
    ]
};

const store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;