

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