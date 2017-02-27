import React, {Component, PropTypes} from 'react'
import MessageList from './MessageList';
import Box from './Box';
import FormComponent from './FormComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#def'
        };
    }
    getChildContext() {
        return {color: this.state.color};
    }
    render() {
        return (
            <div className="jumbotron">
              
                <Box>
                    <FormComponent />
                    <MessageList messages={["Hello","Ola.."]}/>
                </Box>  

            </div>
        )
    }
}

App.childContextTypes = {
    color: React.PropTypes.string
};

export default App