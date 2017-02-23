

// way-1 : without JSX

// var Welcome = React.createClass({
//     render: function () {
//         var divEle = React.createElement('div', null, "Welcome to react-world");
//         return divEle;
//     }
// });

// var welcome = React.createElement(Welcome);

// ReactDOM.render(welcome,document.getElementById('root'));


//----------------------------------------------------------

// way-2 : with JSX

var Welcome = React.createClass({
    render: function () {
        return (
            <div>Welcome to react-World</div>
        );
    }
});

var welcome = <Welcome />
ReactDOM.render(welcome, document.getElementById('root'));

//--------------------------------------------------------------