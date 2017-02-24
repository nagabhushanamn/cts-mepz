import React, {Component} from 'react'
import ButtonComponent from './ButtonComponent';
import CountDisplay from './CountDisplay';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    incCount() {
        this.setState({count:++this.state.count});
    }

    render() {
        console.log('App::render()');
        return (
            <div className="container">
                <div className="page-header">React-counter-app</div>
                <ButtonComponent incCount={this.incCount.bind(this)}/>
                <hr/>
                <CountDisplay count={this.state.count}/>
            </div>
        )
    }
}

export default App