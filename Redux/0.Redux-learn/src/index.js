


import { createStore,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';




//--------------------------------------------------

function counterReducer(state,action) {
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

//--------------------------------------------------

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
const store = createStore(counterReducer, {count:0},enhancer);

//----------------------------------------------------


// Sync - Actioncreator(s)

function increment(count) {
    return {type:'INCREMENT',count};
}
function decreemnt(count) {
    return {type:'DECREMENT',count};
}

// Asynch - ActionCreator

function incrementAsync(count) {
    return function (dispatch) {
        
        //1. An action informing the reducers that the request began.
        console.log('Async oprn beginned...');
        // async oprn
        setTimeout(() => {
            
            console.log('Async oprn fininised...');
            //2. An action informing the reducers that the request finished successfully.
            dispatch(increment(count));

            //store.dispatch(incrementAsync(10)); // async-action

            //3. An action informing the reducers that the request failed.

        }, 2000); 
    }
}

//----------------------------------------------------

store.dispatch(increment(10));  //sync-action
store.dispatch(incrementAsync(10)); // async-action
