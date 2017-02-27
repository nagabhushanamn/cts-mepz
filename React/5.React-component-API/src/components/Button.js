import React, {Component,PropTypes} from 'react'

class Button extends Component {
    render () {
        return (
            <div>
                <button style={{ background: this.context.color }}>Action</button>
            </div>
        )
    }
}

Button.contextTypes = {
  color: React.PropTypes.string
};

export default Button