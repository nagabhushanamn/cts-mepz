import React, {Component} from 'react'

class ButtonFrame extends Component {
    render() {

        let {checkAnswer, status, correct,acceptAnswer,redraw,redraws} = this.props;

        let button = null;

        switch (correct) {

            case true:
                button = (
                    <button disabled={status} className="btn btn-lg btn-success" onClick={() => { acceptAnswer()}}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                );
                break
            case false:
                button = (
                    <button disabled={status} className="btn btn-lg btn-danger">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                );
                break
            default:
                button = (
                    <button
                        disabled={status}
                        className="btn btn-lg btn-primary"
                        onClick={() => {checkAnswer()}}>
                        =
                    </button>
                );
        }

        return (
            <div id="button-frame">
                {button}
                <br/><br/>
                <button
                        className="btn btn-xs btn-warning"
                        onClick={() => {redraw()}}>
                    <span className="glyphicon glyphicon-refresh"></span>
                    &nbsp;{redraws} 
                </button>
                
            </div>
        )
    }
}

export default ButtonFrame