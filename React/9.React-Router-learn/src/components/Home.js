import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render () {
        return (
            <div className="">
                <span className="badge">Home-component</span>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default Home