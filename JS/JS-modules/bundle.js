(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// var App = App || {};

console.log('in app.js');

// App.a.doWork();  // a module-work
// App.b.doWork();  // b module-work
// App.c.doWork();  // c module-work

//-----------------------------------------------

// require(null, ['js/a'], function (aMod) { 
//     aMod.doWork();
// });

//-----------------------------------------------

// commonJS

var a = require('./js');
a.doWork();
},{"./js":2}],2:[function(require,module,exports){


// var o = {
//     doWork: function () {
//         console.log('im A');
//     }
// };

//---------------------------------------------

// var App = App || {};

// (function () {

//     App.b.doWork();  // b module-work
//     App.c.doWork();  // c module-work

//     var o = {
//         doWork: function () {
//             console.log('im A');
//         }
//     };

//     App.a = o;

// })();


//---------------------------------------------


// AMD


// define('js/a', ['js/b','js/c'], function (b,c) { 

//     var i=0;

//     b.doWork();
//     c.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im A');
//         }
//     };

//     return o;

// });

//-----------------------------------------------------

// commonJS

//console.log('a.js');

var b = require('./b');
var c = require('./c');

b.doWork();
c.doWork();

var o = {
    doWork: function () {
        console.log('im A');
    }
};

module.exports = o;


},{"./b":3,"./c":4}],3:[function(require,module,exports){


// var o = {
//     doWork: function () {
//         console.log('im B');
//     }
// };

//---------------------------------------------

// var App = App || {};

// (function () {

//     App.b.doWork();  // b module-work
//     App.c.doWork();  // c module-work

//     var o = {
//         doWork: function () {
//             console.log('im B');
//         }
//     };

//     App.a = o;

// })();


//---------------------------------------------


// AMD


// define('js/b', [], function () { 

//     var i=0;

//     var o = {
//         doWork: function () {
//             console.log('im B');
//         }
//     };

//     return o;

// });


//-----------------------------------------------------

// commonJS

var o = {
    doWork: function () {
        console.log('im B');
    }
};

module.exports = o;
},{}],4:[function(require,module,exports){


// var o = {
//     doWork: function () {
//         console.log('im C');
//     }
// };

//---------------------------------------------

// var App = App || {};

// (function () {

//     var i = 10;

//     var o = {
//         doWork: function () {
//             console.log('im C');
//         }
//     };

//     App.c = o;

// })();

//-------------------------------------------------



// AMD


// define('js/c', [], function () { 

//     var i=0;

//     var o = {
//         doWork: function () {
//             console.log('im C');
//         }
//     };

//     return o;

// });



//-----------------------------------------------------

// commonJS

var o = {
    doWork: function () {
        console.log('im C');
    }
};

module.exports = o;
},{}]},{},[1]);
