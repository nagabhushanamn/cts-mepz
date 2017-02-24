import React, {Component} from 'react'

class ButtonComponent extends Component {


    render() {        
        let {incCount,incBy} = this.props;
        return (
            <div className="col-md-4 col-sm-4 col-xs-4">
                <button onClick={() => { incCount(incBy) }}
                        className="btn btn-lg btn-primary">
                    {incBy}
                </button>
            </div>
        )
    }
}

export default ButtonComponent