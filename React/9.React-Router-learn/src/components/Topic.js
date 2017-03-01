import React, {Component} from 'react'

class Topic extends Component {
    render () {
        return (
            <div className="alert alert-success">
                {this.props.params.subject}
            </div>
        )
    }
}

export default Topic