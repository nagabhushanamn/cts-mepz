import React, {Component} from 'react'
import { Link } from 'react-router';

class Topics extends Component {
    render () {
        return (
            <div className="">
                <span className="badge">Topics-component</span>
                <hr />
                
                 <ul className="nav nav-pills">
                    <li><Link to="/topic/js">JavaScript</Link></li>
                    <li><Link to="/topic/react">React</Link></li>
                    <li><Link to="/topic/redux">Redux</Link></li>
                 </ul>
                 <hr />
                
                 {this.props.children}

            </div>
        )
    }
}

export default Topics