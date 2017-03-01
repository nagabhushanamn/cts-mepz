import React, {Component} from 'react'
import { Link } from 'react-router';

import Home from './Home';

class App extends Component {
    render () {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li><Link activeClassName="active" to="/">Home</Link></li>
                    <li><Link activeClassName="active" to="/about">About</Link></li>
                    <li><Link activeClassName="active" to="/topics">Topics</Link></li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default App