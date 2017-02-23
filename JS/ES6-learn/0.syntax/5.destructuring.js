
//--------------------------------------------
// Object - destructuring
//--------------------------------------------
var person = {
    name: 'Nag',
    age: 32
};

//---------------------------------------------

// manual destructuring

// var name;
// var age;
// name = person.name;
// age = person.age;

//----------------------------------------------
// var {name, age} = person;
//-----------------------------------------------
// var {name: myName, age: myAge} = person;
//-----------------------------------------------
// var myName;
// var myAge;
// ({ name: myName, age: myAge } = person);
//------------------------------------------------

// Array destructuring

//------------------------------------------------

// var salaries = [100, 200, 300];

// manual

// var min = salaries[0];
// var avg = salaries[1];
// var max = salaries[2];

//-------------------------------------------------

// var salaries = [100, 200, 300];
// var [min, avg, max] = salaries;

//-------------------------------------------------
// var salaries = [100, 200];
// var [min, avg, max] = salaries;
//-------------------------------------------------

// var salaries = [100, 200, 300];
// var [min,, max] = salaries;

//-------------------------------------------------

// var salaries = [100, 200];
// var [min, avg, max=500] = salaries;

//-------------------------------------------------

// var salaries = [100, 200, 300];
// var [min,...rest] = salaries;

//-------------------------------------------------

// var salaries = [100, 200, [500,1000]];
// var [min, avg, [actualLow, actualHigh]] = salaries;

//------------------------------------------------














