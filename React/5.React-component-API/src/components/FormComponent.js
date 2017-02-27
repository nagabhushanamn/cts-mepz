import React, {Component} from 'react'

class FormComponent extends Component {

    submitHandler(event) {
        console.log('form submitted...');
        var val = this.refs.nameField.value;
        console.log('Hello '+val);
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit={(event)=>this.submitHandler(event)}>
                    <input ref="nameField"/><button>Say Hello</button>
                </form>
            </div>
        )
    }
}

export default FormComponent