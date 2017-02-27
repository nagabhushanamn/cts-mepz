import React, {Component} from 'react'

class Story extends Component {
    render() {
        let {story,deleteStory} = this.props;
        return (
            <div className="alert alert-success">
                <div className="row">
                    <div className="col-md-9 col-sm-9 col-xs-9">
                        Name:{story.name}
                    </div>
                    <div className="col-md-3 col-md-3 col-md-3">
                        <span className="glyphicon glyphicon-trash" style={{cursor:'pointer'}}
                            onClick={() => { deleteStory(story.id) }}>
                        </span>
                    </div>
                </div>
                <hr />
                {story.comment}
            </div>
        )
    }
}

export default Story