

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

