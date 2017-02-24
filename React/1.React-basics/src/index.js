

import React from 'react';
import ReactDOM from 'react-dom';

import "./css/style.css";

//---------------------------------------

var root = document.getElementById('root');

//---------------------------------------

// 1.without JSX

// var element = React.createElement('h1', null, "Welcome");
// ReactDOM.render(element, root);

//----------------------------------------

// 2.with JSX

// var element = <h1> Welcome Again </h1>;
// ReactDOM.render(element, root);

//----------------------------------------

/*
function formatPerson(person) {
    return person.name + " , "+person.age;
}

var person = {name:'Nag',age:32};

var element = (
    <h1>
        Hello {formatPerson(person)} !
    </h1>
);
ReactDOM.render(element, root);

*/

//----------------------------------------

// var divEle = <div tabIndex="1" className="box"> Welcome  </div>;
// ReactDOM.render(divEle, root);

//----------------------------------------

/*

var element = (
    <div>
        <h1> Hello </h1>
        <h2>Good to see u here</h2>
    </div>
);

ReactDOM.render(element, root);

*/

//----------------------------------------

// react Only updates what's necessary

/*

function tick() {
    var element= (
        <div>
            <h1> Time: {new Date().toLocaleTimeString()}</h1>
        </div>
    );
    ReactDOM.render(element,root);
}

setInterval(tick,1);

*/

//----------------------------------------
// component - class
//----------------------------------------

// way-1

/*

function Welcome(props) {
    return <h1> Hello {props.name} </h1>
}

ReactDOM.render(
    <div>
        <Welcome name="Nag" />
        <Welcome name="Ria" />
    </div>,
    root);
*/

//----------------------------------------------

// way-2 - ES5

/*
var Welcome = React.createClass({
    render: function () {
         return <h1> Hello {this.props.name} </h1>
    }
});

ReactDOM.render(
    <div>
        <Welcome name="Nag" />
        <Welcome name="Ria" />
    </div>,
    root);
*/

//----------------------------------------------

// way-3 - ES6

/*
class Welcome extends React.Component{
    render() {
         return <h1> Hello {this.props.name} </h1>
    }
}
ReactDOM.render(
    <div>
        <Welcome name="Nag" />
        <Welcome name="Ria" />
    </div>,
    root);

*/

//------------------------------------------------

// imp-note : component props are read-Only

// class Person extends React.Component{
//     render() {
//          //this.props.name = ""; // all props are read-only
//          return <h1> person - {this.props.name} </h1>
//     }
// }


// var person = <Person name="Nag" />
// ReactDOM.render(person, root);

//-------------------------------------------------------

// Component - State

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = { date: props.date };
        var self = this;
        setInterval(function () {
            self.setState({date:new Date()});
         },1000);
    }
    render() {
        return <h1>{this.state.date.toLocaleTimeString()}</h1>;
    }
}


ReactDOM.render( <Clock date={new Date()}/>,root);


