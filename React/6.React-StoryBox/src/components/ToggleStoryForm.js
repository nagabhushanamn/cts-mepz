import React, {Component} from 'react'
import StoryForm from './StoryForm';

class ToggleStoryForm extends Component {

    constructor(props) {
        super(props);
        this.state = { isFormOpen: false };
    }

    submitHandler(story) {
        this.props.submitHandler(story);
        this.setState({ isFormOpen: false })
    }

    render() {
        let element = null;
        if (this.state.isFormOpen) {
            element = <StoryForm submitHandler={(story) => {this.submitHandler(story)}}/>
        } else {
            element = (
                <div>
                    <button className="glyphicon glyphicon-plus" onClick={() => { this.setState({isFormOpen:true})}}>
                    </button>
                </div>
            )
        }
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default ToggleStoryForm