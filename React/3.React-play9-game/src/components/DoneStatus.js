import React, {Component} from 'react'

class DoneStatus extends Component {
    render() {
        return (
            <div>
                <div className="well text-center">
                    <h2>{this.props.doneStatus}</h2>
                    <button className="btn btn-default">
                        Play again
                </button>
                </div>
            </div>
        )
    }
}

export default DoneStatus