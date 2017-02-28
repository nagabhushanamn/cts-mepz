import React, { Component } from 'react'
import TodoItem from './TodoItem';
import Footer from './Footer';

class MainSection extends Component {
    render() {
        let {todos,actions} = this.props;
        return (
            <section className="main">
                <input type="checkbox" className="toggle-all" onChange={actions.completeAll}/>
                <ul className="todo-list">
                    {
                        todos.map((todo) => <TodoItem key={todo.id} todo={todo} {...actions}/>)     
                    }
                </ul>
                <Footer
                    onClearCompleted={actions.clearCompleted}
                />
            </section>
        )
    }
}

export default MainSection