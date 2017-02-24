import React, { Component } from 'react'
import DoneStatus from './DoneStatus';

class NumbersFrame extends Component {
    render() {
        let numbers = [];
        let {selectNumber,selectedNumbers,usedNumbers,doneStatus} = this.props;
        for (let i = 1; i < 10; i++){
            let className = "number selected-" + (selectedNumbers.indexOf(i) > -1);
            className += " used-"+(usedNumbers.indexOf(i) > -1);
            var ele = <span key={i}
                            onClick={() => { selectNumber(i) }}
                            className={className}>
                        {i}
                       </span>;
            numbers.push(ele);
        }

        if (doneStatus) {
            return (
                <DoneStatus doneStatus={doneStatus} />
            )
        } else {
            return (
                <div id="numbers-frame">
                    <div className="well">
                        {numbers}
                    </div>
                </div>
            )
        }    
    }
}

export default NumbersFrame