
import * as types from '../constants/ActionTypes';
import $ from "jquery";
// Sync-Actions

export function addTodo(text) {
    return {type:types.ADD_TODO,text};
}

export function deleteTodo(id) {
    return {type:types.DELETE_TODO,id};
}

export function editTodo(id,text) {
    return {type:types.EDIT_TODO,text,id};
}

export function completeTodo(id) {
    return {type:types.COMPLETE_TODO,id};
}

export function completeAll() {
     return {type:types.COMPLETE_ALL};
}
export function clearCompleted() {
     return {type:types.CLEAR_COMPLETED};
}

//----------------------------------------------
const apiURL = "http://localhost:3000/api/todos";
//----------------------------------------------

export function loadAllAsync(){
    return function (dispatch) {   
        $.ajax({
            url: apiURL,
            success: function (todos) {
                dispatch({type:'ALL_TODOS',todos});
            }
        });
    }
}

export function addTodoAsync(text) {
    return function (dispatch) {
        $.ajax({
            method:'POST', 
            url: apiURL,
            data: {text,completed:false},
            success: function (todo) {
                dispatch({type:'ADD_TODO',todo});
            }
        });
    }
}


export function deleteTodoAsync(id) {
    return function (dispatch) {
        $.ajax({
            method:'DELETE', 
            url: apiURL+"/"+id,
            success: function (resp) {
                dispatch(deleteTodo(id));
            }
        });
    }
}

//--------------------------------------------------


