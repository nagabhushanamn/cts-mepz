import React, { Component } from 'react'
import StoryForm from './StoryForm';
import StoryList from './StoryList';

class StoryBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories:[]
        };
    }    

    addNewStory(newStory) {
        this.setState({stories:[newStory,...this.state.stories]});
    }

    render() {
        let {stories} = this.state;
        return (
            <div className="col-md-6">
                <StoryForm submitHandler={(story) => { this.addNewStory(story)}}/>
                <StoryList stories={stories}/>
            </div>
        )
    }
}

export default StoryBox