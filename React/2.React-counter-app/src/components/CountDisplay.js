import React, {Component} from 'react'

class CountDisplay extends Component {
    render() {
        console.log('CountDisplay::render()');
        return (
            <div className="badge">
                {this.props.count}
            </div>
        )
    }
}

export default CountDisplay