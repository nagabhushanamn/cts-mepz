import React, { Component } from 'react'
import Header from './Header';
import MainSection from './MainSection'

class App extends Component {

    constructor(props,context) {
        super(props);
        this.state = {
            todos: [
                {id:0,text:'Learn .js',completed:true},
                {id:1,text:'Learn React',completed:true},
                {id:2,text:'Learn Redux',completed:false}
            ]
        };
    }

    //--------------------------------------------------------

    addTodo(text) {
        let todo = {id:Math.floor(Math.random()*100),text,completed:false}
        // let todos = [todo,...this.state.todos]; // or
        let todos = this.state.todos.concat(todo);
        this.setState({todos});
    }
    deleteTodo(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos});
    }
    completeTodo(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return Object.assign({}, todo, { completed: !todo.completed })
            } else {
                return todo;
            }
        });
        this.setState({todos});
    }
    completeAll() {
        let areAllMarked = this.state.todos.every(todo => todo.completed);
        let todos = this.state.todos.map(todo => Object.assign({}, todo, { completed: !areAllMarked }));
        this.setState({todos});
    }
    clearCompleted() {
        let todos = this.state.todos.filter(todo => todo.completed === false);
        this.setState({todos});
    }
    editTodo(id,text) {
        let todos = this.state.todos.map(todo =>
            todo.id === id ? Object.assign({}, todo, { text }) : todo
        );
        this.setState({todos});
    }
    //--------------------------------------------------------    

    render() {
        let {todos} = this.state;
        let actions = {
            addTodo: this.addTodo.bind(this),
            deleteTodo: this.deleteTodo.bind(this),
            completeTodo: this.completeTodo.bind(this),
            completeAll: this.completeAll.bind(this),
            clearCompleted: this.clearCompleted.bind(this),
            editTodo:this.editTodo.bind(this),
        }
        return (
            <div>
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos} actions={actions}/>
            </div>
        )
    }
}

export default App