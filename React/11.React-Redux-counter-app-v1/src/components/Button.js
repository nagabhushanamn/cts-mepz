import React, {Component} from 'react'

class Button extends Component {

    render() {
        let {num,clickHandler} = this.props;
        return (
                <button className="btn btn-primary btn-lg"
                        onClick={(event) => { clickHandler(num) }}>
                    {num}
                </button>                
        )
    }
}

Button.propTypes = {
    num: React.PropTypes.number.isRequired,
    clickHandler:React.PropTypes.func.isRequired
}

export default Button