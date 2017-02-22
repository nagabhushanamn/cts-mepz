
//------------------------------------------------------
// rest operator
//------------------------------------------------------
// function func(a, ...rest) {
//     console.log(a);
//     //console.dir(arguments);
//     // console.log(rest instanceof Array);
//     console.dir(rest);
// }
// func(1, 2, 3, 4);

//------------------------------------------------------
// spead opearator
//------------------------------------------------------


// let max = Math.max(1, 2, 3, 4, 5, 6);

// let nums = [1, 2, 3];
// let max = Math.max(nums[0],nums[1],nums[2]); // manually spread
// let max = Math.max(...nums);

//--------------------------------

var a = [1, 2, 3];
var b = [7, 8, 9];
var str = "NAG";
var c = [...a, 4, 5, 6, ...b,...str];

//-------------------------------------


// How spread operator working?

/*
    it can spread any iterable object
*/


