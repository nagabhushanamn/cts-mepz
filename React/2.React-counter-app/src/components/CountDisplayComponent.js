import React, {Component} from 'react'

class CountDisplayComponent extends Component {
    render() {
        let {count} = this.props;
        return (
            <div className="badge">
                {count}
            </div>
        )
    }
}

export default CountDisplayComponent