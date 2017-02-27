import React, {Component} from 'react'

class StoryForm extends Component {

    submitHandler(event) {
        event.preventDefault();
        let newStory = {
            id: Math.floor((Math.random()*100)+1),
            name: this.refs.name.value,
            comment: this.refs.comment.value
        };
        this.props.submitHandler(newStory);
        event.target.reset();
    }    

    render () {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">StoryForm</div>
                <div className="panel-body">
                    <form onSubmit={(event) => { this.submitHandler(event) }}>
                        <div className="form-group">
                            <label>Name</label> 
                            <input ref="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Comment</label>
                            <textarea ref="comment" className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>    
            </div>
        )
    }
}

export default StoryForm