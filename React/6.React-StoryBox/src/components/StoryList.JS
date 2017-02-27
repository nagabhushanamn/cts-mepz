import React, { Component } from 'react'
import Story from './Story';


class StoryList extends Component {
    render() {
        
        let {stories} = this.props;

        let storyComps = stories.map((story, index) => {
            return (
                <Story story={story} key={index} />
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