import React, { Component } from 'react'

import StarsFrame from './StarsFrame';
import ButtonFrame from './ButtonFrame';
import AnswerFrame from './AnswerFrame';
import NumbersFrame from './NumbersFrame';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfStars :this.randomNumber(),
            selectedNumbers: [],
            correct: null,
            usedNumbers: [],
            redraws: 5,
            doneStatus:null
        };
    }
    randomNumber() {
        return Math.floor((Math.random() * 9) + 1);
    }
    selectNumber(number) {
        let {selectedNumbers, usedNumbers} = this.state;
        if (selectedNumbers.indexOf(number) === -1 && usedNumbers.indexOf(number)==-1) {
            this.setState({ selectedNumbers: this.state.selectedNumbers.concat(number) });
        }    
    }
    unSelectNumber(number) {
        let {selectedNumbers} = this.state;
        var index = selectedNumbers.indexOf(number);
        selectedNumbers.splice(index, 1);
        this.setState({selectedNumbers});
    }
    sumOfSelectedNumbers() {
        return this.state.selectedNumbers.reduce(function (a, b) { 
            return a + b;
        },0);
    }

    checkAnswer() {
        let correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
        this.setState({correct});
    }
    acceptAnswer() {
        let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
            usedNumbers,
            selectedNumbers: [],
            correct: null,
            numberOfStars: this.randomNumber()
        }, function () { 
             this.updateDoneStatus();
        });
       
    }
    redraw() {

        if(this.state.redraws > 0){
            this.setState({
            selectedNumbers: [],
            correct: null,
            numberOfStars: this.randomNumber(),
            redraws: this.state.redraws - 1
            }, function () { 
                 this.updateDoneStatus();
            });
        }
       
    }

     possibleCombinationSum(arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };

    possibleSolution() {
        var numberOfStars = this.state.numberOfStars,
            possibleNumbers = [],
            usedNumbers = this.state.usedNumbers;

        for (var i = 1; i <= 9; i++) {
            if (usedNumbers.indexOf(i) < 0) {
                possibleNumbers.push(i);
            }
        }

        return this.possibleCombinationSum(possibleNumbers, numberOfStars);
    }

    updateDoneStatus() {
        if (this.state.usedNumbers.length === 9) {
            this.setState({ doneStatus: 'Done. Nice!' });
            return;
        }
        if (this.state.redraws === 0 && !this.possibleSolution()) {
            this.setState({ doneStatus: 'Game Over!' });
        }
    }

    render() {
        
        let {selectedNumbers,numberOfStars,correct,usedNumbers,redraws} = this.state;

        return (
            <div className="container">
                <div className="page-header">Play-9</div>

                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars}/>
                    <ButtonFrame checkAnswer={() => { this.checkAnswer() }}
                        status={selectedNumbers.length === 0}
                        correct={correct}
                        acceptAnswer={() => { this.acceptAnswer() }}
                        redraw={() => { this.redraw() }}
                        redraws={redraws}
                        />
                    <AnswerFrame selectedNumbers={selectedNumbers}
                        unSelectNumber={(number) => { this.unSelectNumber(number) }} />
                </div> 

                <NumbersFrame selectNumber={(number) => { this.selectNumber(number) }}
                    selectedNumbers={selectedNumbers}
                    usedNumbers={usedNumbers}
                    doneStatus={this.state.doneStatus}
                />
                
            </div>
        )
    }
}

export default Game