

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