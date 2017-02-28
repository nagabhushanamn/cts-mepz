import React, {Component} from 'react'

class Footer extends Component {
    render() {
        let {onClearCompleted} = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">2 items left</span>
                <ul className="filters">
                    <li><a className="selected" href="#">All</a></li>
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Completed</a></li>
                </ul>
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear Completed
                </button>
            </footer>
        )
    }
}

export default Footer