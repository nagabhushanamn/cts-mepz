import React, {Component} from 'react'

class TodoTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.text || ''
        }
    }

    handleSubmit(e) {
        var text = e.target.value;
        if (e.which === 13) {
            this.props.onSave(text);
            //e.target.value = '';
            this.setState({text:''});
        }
    }
    handleChange(e) {
        this.setState({text:e.target.value});
    }

    render () {
        return (
            <input
                className="new-todo"
                onKeyUp={this.handleSubmit.bind(this)}
                onChange={this.handleChange.bind(this)}
                value={this.state.text}
            />
        )
    }
}

export default TodoTextInput