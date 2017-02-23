

// //1.sync function-execution

// function foo() {

// }
// function bar() {
//     foo(); // sync
// }

//---------------------------------

// 2. Async function execution  ==> on event every handler execute async

// setTimeout(function () { }, 2000);

//.........

//-------------------------------------------------------

var hotel = {
    getCoffee: function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('resolving coffe promise..');
                resolve('CAPI');
                //reject('No Milk');
            }, 5000);
        });
        return promise;
    }
};

var Pizaa = {
    getPiza: function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('resolving pizaa promise..');
                resolve('CHIKEN PIZA');
                //reject('No Milk');
            }, 10000);
        });
        return promise;
    }
};

var trainer = {
    doTeach: function () {
        console.log('teaching....');
        console.log('thinking to have coffee');
        var promise1 = hotel.getCoffee(); //asnyc
         var promise2 = Pizaa.getPiza(); //asnyc
        console.log('got promise , deffering coffee actions to future');

        // var newPromise = promise.then(function (coffee) {
        //     console.log('yummy...half-cup' + coffee);
        //     return "HALF-CAPI"
        // }, function (reason) {
        //     console.log('opps, i hate that hotel , reason-' + reason);
        // });

        // newPromise.then(function (coffee) {
        //     console.log('having ' + coffee);
        // });

        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2])
            .then(function (items) {
                console.dir(items);
             },function (reason) {
                 console.log(reason);
                 console.log('party cancelled'); 
             });        

        console.log('continue on further teaching...end');
    }
};

trainer.doTeach();














