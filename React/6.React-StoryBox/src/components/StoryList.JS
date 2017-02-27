import React, { Component } from 'react'
import Story from './Story';


class StoryList extends Component {
    render() {

        let {stories,deleteStory} = this.props;

        let storyComps = stories.map((story, index) => {
            return (
                <Story story={story} key={index} deleteStory={deleteStory}/>
            );
         });
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Story List</div>
                <div className="panel-body">
                    {storyComps}
                </div>
            </div>
            

        )
    }
}

export default StoryList