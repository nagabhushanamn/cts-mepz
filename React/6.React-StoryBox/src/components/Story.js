import React, {Component} from 'react'

class Story extends Component {
    render() {
        let {story} = this.props;
        return (
            <div className="alert alert-success">
                Name: {story.name}
                <span className="glyphicon glyphicon-edit"></span>
                <span className="glyphicon glyphicon-trash"></span>
                <hr />
                {story.comment}
            </div>
        )
    }
}

export default Story