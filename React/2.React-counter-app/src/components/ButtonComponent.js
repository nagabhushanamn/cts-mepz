import React, {Component} from 'react'

class ButtonComponent extends Component {

    clickHandler() {
        this.props.incCount();
    }

    render() {
        console.log('ButtonComponent::render()');
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}
                        className="btn btn-lg btn-primary">
                    +1
                </button>
            </div>
        )
    }
}

export default ButtonComponent