const _ = require('lodash');
const numbers = [2,4,6,8,33,44,65,356]

_.each(numbers, function(number, i){
    console.log(number)
})