import React, {Component} from 'react'
import ButtonComponent from './ButtonComponent';
import CountDisplayComponent from './CountDisplayComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incCount(incBy) {
        this.setState({count:this.state.count+incBy});
    }

    render() {
        let {count} = this.state;
        return (
            <div className="container">
                <div className="page-header">React-counter-app</div>
                <div className="row">
                    <ButtonComponent incCount={(incBy) => { this.incCount(incBy) }} incBy={1} />
                    <ButtonComponent incCount={(incBy) => { this.incCount(incBy) }} incBy={10} />
                    <ButtonComponent incCount={(incBy) => { this.incCount(incBy) }} incBy={100} />
                </div>
                <hr/>
                <CountDisplayComponent count={count} />
            </div>
        )
    }
}

export default App