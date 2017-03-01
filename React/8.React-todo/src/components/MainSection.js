import React, { Component } from 'react'
import TodoItem from './TodoItem';
import Footer from './Footer';


import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from '../constants/TodoFilters';


const TODO_FILTERS={
    [SHOW_ALL]:()=>true,
    [SHOW_ACTIVE]:todo=>!todo.completed,
    [SHOW_COMPLETED]:todo=>todo.completed
}

class MainSection extends Component {

    constructor(props){
        super(props);
        this.state={
            filter:SHOW_ALL
        };
    }

    handleShow(filter){
        this.setState({filter});
    }

    render() {
        
        let {todos,actions} = this.props;
        //let {filter}=this.state;
        let {filter} = this.props;
        let filteredTodos=todos.filter(TODO_FILTERS[filter]);
        let completedCount=todos.reduce((count,todo)=>{
            return todo.completed?count+1:count
        },0);
        let activeCount=todos.length-completedCount;

        return (
            <section className="main">
                <input type="checkbox" className="toggle-all" onChange={actions.completeAll}/>
                <ul className="todo-list">
                    {
                        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} {...actions}/>)     
                    }
                </ul>
                <Footer
                    onShow={this.handleShow.bind(this)}
                    filter={filter}
                    activeCount={activeCount}
                    onClearCompleted={actions.clearCompleted}
                />
            </section>
        )
    }
}

export default MainSection