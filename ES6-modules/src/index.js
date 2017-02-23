

// import { projectId,projectName } from './pack1/module1';
// console.log(projectId);
// console.log(projectName);

//-----------------------------------------------------------

// import { projectId as id, projectName as name } from './pack1/module1';
// console.log(id);
// console.log(name);

//-----------------------------------------------------------

// import * as mod1 from './pack1/module1';
// console.log(mod1.projectId);
// console.log(mod1.projectName);

//-----------------------------------------------------------

// import { project } from './pack1/module1';

// // console.log(project.id);
// // console.log(project.name);

// project.showDetails();
// project.name = "xyz";
// project.showDetails();

// project=null // Error , cant mutate reference of imported members

//---------------------------------------------------------------

// import MainComp,{ Comp1,Comp2 } from './pack1/module1';
import { default as MainComp,Comp1 } from './pack1/module1';

var c1 = new Comp1();
c1.whoAmI();


var main = new MainComp();
main.whoAmI();



