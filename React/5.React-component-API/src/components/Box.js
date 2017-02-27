import React, {Component} from 'react'

class Box extends Component {
    render () {
        return (
            <div> 
                <div className="page-header">Any children of BoxComponet goes here</div>
                {this.props.children}
            </div>
        )
    }
}

export default Box