import React, { Component } from 'react'
import Button from './Button';
import Display from './Display';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {count:0};
    }   
    
    incCount(incBy) {
        this.setState({count:this.state.count+incBy}) 
    }

    render() {
        let {count} = this.state;
        return (
            <div>
                <Button incBy={1} clickHandler={this.incCount.bind(this)} />
                <Button incBy={10} clickHandler={this.incCount.bind(this)}/>
                <hr/>
                <Display count={count}/>
                <hr/>
                <Button incBy={-1} clickHandler={this.incCount.bind(this)} />
                <Button incBy={-10} clickHandler={this.incCount.bind(this)}/>
            </div>
        )
    }
}

export default App