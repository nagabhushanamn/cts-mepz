import React, { Component } from 'react'
import ToggleForm from './ToggleForm';
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
                <ToggleForm submitHandler={(story) => { this.addNewStory(story)}}/>
                <StoryList stories={stories} deleteStory={(id) => { this.deleteStory(id) }}/>
            </div>
        )
    }
}

export default StoryBox