

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