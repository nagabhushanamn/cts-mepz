import React, {Component} from 'react'

class Display extends Component {
    render() {
        let {count} = this.props;
        return (
            <div className="btn btn-info">
                <span className="badge">{count}</span>
            </div>
        )
    }
}

Display.propTypes = {
    count: React.PropTypes.number.isRequired
};

export default Display