

let initialState = { count: 10 }

export function counterReducer(state=initialState,action) {
    switch (action.type) {
        case "INCREMENT": {
            return Object.assign({}, state, {count:state.count+action.num});
        }
        case "DECREMENT": {
            return Object.assign({}, state, {count:state.count-action.num});
        }  
        default:
            return state;    
    }    
}

