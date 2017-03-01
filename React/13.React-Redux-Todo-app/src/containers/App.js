import React, { Component } from 'react'
import Header from '../components/Header';
import MainSection from '../components/MainSection'

import * as actions from '../actions/todos';

class App extends Component {

    constructor(props,context) {
        super(props);
    }

    render() {
        let {todos} = this.props;
        todos = todos || []; // for test
        return (
            <div>
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos} actions={actions} />
            </div>
        )
    }
}

export default App