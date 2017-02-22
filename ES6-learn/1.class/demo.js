

// es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im '+this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im '+this.age+" old");
// }

//-------------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor()');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }

}

//--------------------------------------------------------

// var p1 = new Person('Nag', 32);
// p1.sayName();

// var P = Person;
// var p1 = new P('Nag',32);

// Person('Nag',32); // Not possible without new keyword

//--------------------------------------------------------

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor()');
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

// var emp = new Employee('Emp', 32, 1000);

//--------------------------------------------------------

class Boss extends Employee {
    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }
}
// var boss = new Boss('BOSS', 32, 1000);

//-------------------------------------------------------


class Abc {

    constructor() {
        this.v = 100;
    }
    ins() {
        console.log('instance method..' + this.v);
    }
    static sta() {
        console.log('static method..' + this.v);
    }

}
Abc.v = 200; // static var.

new Abc().ins();
Abc.sta();

//-------------------------------------------------

