import React, { Component } from 'react'
import MesageComponent from './MesageComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {message1:"Hello",message2:"World"}
    }
    render() {
       
        var messageComp = null;
        if (this.state.message2) {
            messageComp = <MesageComponent prop1={this.state.message1} prop2={this.state.message2} />;
        }

        return (
            <div className="jumbotron">
                <button className="btn btn-primary" onClick={() => { this.setState({ message2: "You.." }) }}>Hello you</button>
                <button className="btn btn-primary" onClick={() => { this.setState({message2:""})}}>Hello</button>
                 <hr/>
                 {messageComp}
            </div>
        )
    }
}

export default App