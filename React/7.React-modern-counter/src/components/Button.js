import React, {Component} from 'react'

class Button extends Component {


    render() {
        let {incBy,clickHandler} = this.props;
        return (
                <button className="btn btn-primary btn-lg"
                        onClick={(event) => { clickHandler(incBy) }}>
                    {incBy}
                </button>                
        )
    }
}

Button.propTypes = {
    incBy: React.PropTypes.number.isRequired,
    clickHandler:React.PropTypes.func.isRequired
}

export default Button