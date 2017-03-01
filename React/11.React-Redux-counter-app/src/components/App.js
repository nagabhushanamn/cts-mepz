import React, { Component } from 'react'
import Button from './Button';
import Display from './Display';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {count:0};
    }   
    doCount(num) {
        this.setState({count:this.state.count+num}) 
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