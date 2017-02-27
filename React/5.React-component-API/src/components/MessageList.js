import React, {Component} from 'react'
import Message from './Message';

class MessageList extends Component {
    render() {
        
        var messages = this.props.messages.map((message, index) => { 
            return (
                <Message message={message} key={index}/>
            );
        });

        return (
            <div>
                {messages}
            </div>
        )
    }
}

export default MessageList