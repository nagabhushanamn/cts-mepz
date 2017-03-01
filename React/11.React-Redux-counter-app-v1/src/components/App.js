import React, { Component } from 'react'
import Button from './Button';
import Display from './Display';

import store from '../store';
import * as actions from '../actions/counter';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {count:0};
    }   
    doCount(num) {
        store.dispatch(actions.increment(num));
    }
    componentDidMount() {
        var self = this;
        
        let count = store.getState().counter.count;
        self.setState({count});
        
        store.subscribe(function () { 
            let count = store.getState().counter.count;
            self.setState({count});
        });

    }
    render() {
        let {count} = this.state;
        return (
            <div>
                <Button num={1} clickHandler={this.doCount.bind(this)} />
                <Button num={10} clickHandler={this.doCount.bind(this)}/>
                <hr/>
                <Display count={count}/>
                <hr/>
                <Button num={-1} clickHandler={this.doCount.bind(this)} />
                <Button num={-10} clickHandler={this.doCount.bind(this)}/>
            </div>
        )
    }
}

export default App