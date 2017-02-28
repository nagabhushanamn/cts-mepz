import React, { Component } from 'react'
import ToggleStoryForm from './ToggleStoryForm';
import StoryList from './StoryList';

class StoryBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
    }    

    addNewStory(newStory) {
        this.setState({stories:[newStory,...this.state.stories]});
    }
    deleteStory(id) {
        let stories = this.state.stories.filter((story) => story.id === id ? false : true);
        this.setState({ stories: stories });
    }

    render() {
        let {stories,isStoryFormOpen} = this.state;
        return (
            <div className="col-md-6">
                <ToggleStoryForm submitHandler={(story) => { this.addNewStory(story)}}/>
                <hr/>
                <StoryList stories={stories} deleteStory={(id) => { this.deleteStory(id) }} />
            </div>
        )
    }
}

export default StoryBox