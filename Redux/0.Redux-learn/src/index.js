


import { createStore } from 'redux';


//---------------------------------------------------------

// Reducer

function countReducer(state,action) {
    switch (action.type) {
        case "INCREMENT": {
            return Object.assign({}, state, {count:state.count+action.count});
        }
        case "DECREMENT": {
            return Object.assign({}, state, {count:state.count-action.count});
        }  
        default:
            return state;    
    }    
}
//---------------------------------------------------------

var store = createStore(countReducer, {count:0},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//---------------------------------------------------------

// Action - creator(s)

function increment(count) {
    return {type:'INCREMENT',count};
}
function decreemnt(count) {
    return {type:'DECREMENT',count};
}

//----------------------------------------------------------

store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(decreemnt(1));
console.log(store.getState());

