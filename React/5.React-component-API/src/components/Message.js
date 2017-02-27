import React, {Component,PropTypes} from 'react'
import Button from './Button';
class Message extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="well" style={{ background: this.context.color }}>
                <span className="badge">{this.props.message}</span>
            </div>
        );
    }

}


Message.contextTypes = {
  color: React.PropTypes.string
};

// Message.defaultProps = {
//     message:'Hello! World'
// }

// Message.propTypes={
//     message:PropTypes.string.isRequired
// }

export default Message