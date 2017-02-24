
// var lodash = require('lodash');
var _ = require('underscore');

var lib = {
    findMax: function (arr) {
        return _.max(arr);
    }
};

console.log(lib.findMax([1,2,3]));

module.exports = lib;