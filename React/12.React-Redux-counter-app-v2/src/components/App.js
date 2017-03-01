import React, { Component } from 'react'
import Button from './Button';
import Display from './Display';

import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions/counter';

class App extends Component {
    constructor(props) {
        super(props);
    }   
    render() {
        let {count,actions} = this.props;
        return (
            <div>
                <Button num={1} {...actions}/>
                <Button num={10} {...actions}/>
                <hr/>
                <Display count={count}/>
                <hr/>
                <Button num={-1} {...actions}/>
                <Button num={-10} {...actions}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {count:state.counter.count};
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);