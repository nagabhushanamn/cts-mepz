

// var s1 = Symbol('myLabel');
// var s2 = Symbol('myLabel');

// or

// var s1 = Symbol.for('myLabel');
// var s2 = Symbol.for('myLabel');

//------------------------------------------------

// var emp = {name:'Emp1',[Symbol.for('cts')]:'ASV'};
// var emp = { name: 'Emp2', [Symbol.for('cts')]: 'MEPZ' };


//-----------------------------------------------------


// function Person() {
    
// }
// Person.prototype[Symbol.toStringTag] = "Person";

// var p = new Person();
// console.log(p.toString());


//-------------------------------------------------------

// var a = [1, 2];
// a[Symbol.isConcatSpreadable] = false;
// var b = [3, 4];
// b[Symbol.isConcatSpreadable] = false;

// var c=a.concat(b); // [1,2,[3,4]]

//-------------------------------------------------------