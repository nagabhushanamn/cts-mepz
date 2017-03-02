import React, { Component } from 'react'
import Header from '../components/Header';
import MainSection from '../components/MainSection'

import * as actions from '../actions/todos';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class App extends Component {

    constructor(props,context) {
        super(props);
    }
    componentDidMount() {
        let {actions} = this.props;
        actions.loadAllAsync();
    }

    render() {
        let {todos,actions} = this.props;
        return (
            <div>
                <Header addTodo={actions.addTodoAsync}/>
                <MainSection todos={todos} actions={actions} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos:state.todos
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)