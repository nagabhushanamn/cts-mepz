
// Iterators
//=============================================

// var items = ['biryani', 'combo', 'salad'];

//var it = items[Symbol.iterator]();

//--------------------------------------------
// a. for-of-loop   ( works tith iterable objects )

// for (let v of items) {
//     console.log(v);
// }
//------------------------------------------
// b. iterable objects are spreadable

// var menu = ['item-1', ...items];

//--------------------------------------------
// c. iterable objects can be destructured

// var [m1, m2, m3] = items;

//-------------------------------------------

// var idMaker = {
//     [Symbol.iterator]: function () {
//         var id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id, done: id==11?true:false }
//             }
//         }
//     }
// };


// for (let id of idMaker) {
//     console.log(id);
// }

// var ids = [...idMaker];

// var [id1, id2, ...ids] = idMaker;


//---------------------------------------------------------

// Generators

function* idMaker() {
    // yield 1;
    // yield 2;
    // yield 3;

    var i = 0;
    while (true) {
        i++;
        yield i;
        if (i == 5) {
            return;
        }
    }
}

var it = idMaker();
