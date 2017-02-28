import React, { Component } from 'react'
import classnames from 'classnames';
import TodoTextInput from "./TodoTextInput";

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {editing:false};
    }

    handleSave(id,text) {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        } else {
            this.props.editTodo(id,text);
        }
        this.setState({editing:false});
    }

    render() {
        let {todo, deleteTodo, completeTodo} = this.props;
        
        let element;
        if (!this.state.editing) {
            element = (
                <div className="view">
                    <input type="checkbox"
                           checked={todo.completed}    
                           className="toggle"
                           onChange={() => { completeTodo(todo.id)}}
                           />
                    <label onDoubleClick={() => { this.setState({ editing: true }) }}>
                        {todo.text}
                    </label>
                    <button className="destroy"
                            onClick={() => { deleteTodo(todo.id) }}>
                    </button>
                </div>
            );
        } else {
            element = (
                <TodoTextInput
                    text={todo.text}
                    onSave={(text) => { this.handleSave(todo.id, text) }}
                />
            )
        }

        return (
            <li className={classnames({completed:todo.completed})}>
                {element}
            </li>
        )
    }
}

export default TodoItem;