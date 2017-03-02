
//--------------------------------------------

export let calc = {
    add(n1, n2) {
        return n1 + n2;
    },
    sub(n1, n2) {
        return n1 - n2;
    }
};

//--------------------------------------------


export let bakery = {
    getCake: function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () { 
                //resolve('BlackForest..');
                reject('sorry');
            },1000);
        });     
        return promise;
    }
};