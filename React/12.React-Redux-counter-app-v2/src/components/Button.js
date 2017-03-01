import React, {Component} from 'react'

class Button extends Component {

    render() {
        let {num,increment} = this.props;
        return (
                <button className="btn btn-primary btn-lg"
                        onClick={(event) => { increment(num) }}>
                    {num}
                </button>                
        )
    }
}

Button.propTypes = {
    num: React.PropTypes.number.isRequired
}

export default Button