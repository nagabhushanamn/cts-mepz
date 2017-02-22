

// var getPrice = function () { return 100.00 };

// var getPrice = () => 100.00;
// var getPrice = (count) => count*100.00;
// var getPrice = count => count * 100.00;
// var getPrice = (count,tax) => (count*100.00)+tax;
// var getPrice = (count, tax) => { var r = (count * 100.00) + tax; return r; };


// why we need arrow-function ?

// var trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         // way-1

//         // var self = this;
//         // var askQues = function (ques) {
//         //     console.dir(this);
//         //     console.log(self.name + ": answering " + ques);
//         // }

//         //way-2
//         var askQues = (ques) => { console.dir(this); console.log(this.name +": answering "+ques); }

//         return askQues;
//     }
// };

// var askQues = trainer.doTeach();
// askQues('q1');
// askQues('q2');

// var temp = { name: 'TEMP' };
// askQues.call(temp);


//--------------------------------------------------------------------------


// var invoice = {
//     num:123,
//     process: function () {
//         console.dir(this);
//     }
// }

// invoice.process();

//--------------------------------------------------------------------------

// var invoice = {
//     num:123,
//     process: () => { console.dir(this)}
// }

// invoice.process();

//----------------------------------------------------------------------------

// var invoice = {
//     num:123,
//     process: function () {
//         return () => { console.dir(this)}
//     }
// }

// invoice.process()();


//----------------------------------------------------------------------------


// var arrow1 = () => { console.dir(this) };
// arrow1();

//----------------------------------------------------------------------------

// var person1 = {
//     name: 'Nag',
//     sayName: function () {
//         //var f = function () { console.dir('im '+this.name) };
//         var f = () => { console.dir('im '+this.name) }
//         return f; 
//     }
// };

// var func = person1.sayName();

// var person2 = { name: 'Ria' }
// func.call(person2);

//------------------------------------------------------------------------------




















