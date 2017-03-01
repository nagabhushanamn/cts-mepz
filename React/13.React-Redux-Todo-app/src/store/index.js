
import rootReducer from '../reducers';
import { createStore } from "redux";


var initialState = {
    todos: [
        { text: 'Learn React', completed: true, id: 1 }
    ]
};

const store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;