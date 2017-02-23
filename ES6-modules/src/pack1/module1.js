

// export var projectId = 123;
// export var projectName = "Abc";


//----------------------------------------------

// var projectId = 123;
// var projectName = "Abc";

// export { projectId,projectName};

//----------------------------------------------

// var project = {
//     id: 123,
//     name: "Abc",
//     showDetails: function () {
//         console.log(`id : ${this.id}, name : ${this.name}`);
//     }
// };

// export { project };


//----------------------------------------------


class Comp1 {
    whoAmI() {
        console.log('im Comp1');
    }
}
class Comp2 {
    whoAmI() {
        console.log('im Comp2');
    }
}

class Main {
    whoAmI() {
        console.log('im main');
    }
}

export { Comp1, Comp2 };
export default Main;    
