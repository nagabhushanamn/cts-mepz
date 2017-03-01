
/*

e.g

    Action(s)

        a. INCREMENT ==> {type='INCREMENT',count:1}
        b. DECREMENT ==> {type='INCREMENT',count:1}

    ActionCreator(s) ==> function        

*/

function increment(count) {
    return {type:'INCREMENT',count};
}
function decreemnt(count) {
    return {type:'DECREMENT',count};
}

//---------------------------------------------------------

// Reducer(s)

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

//------------------------------------------------------------

// Store

function createStore(reducer) {

    var state = {
        count:0
    };
    var listeners = [];
    
    function dispatch(action) {
        var newState = reducer(state, action);
        if (newState !== state) {
            state = newState;
            listeners.forEach(function (listener) { 
                listener(newState);
            });
        }
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
    }

    return {
        dispatch,
        getState,
        subscribe
    }

}

//-----------------------------------------------------------------
var store = createStore(countReducer);
//------------------------------------------------------------------


// View ( e.g React)

// store.subscribe(function (newState) { 
//     console.log(newState);
// });

store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(decreemnt(1));
store.dispatch(decreemnt(1));
store.dispatch(decreemnt(1));


console.log(store.getState());

//------------------------------------------------------------------

