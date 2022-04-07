
let lodash = function(){
    let months = [ "jan", "feb", "march", "apr", "may","june", "july","aug","sep","oct", "nov","dec"];
const _ = require("lodash");
return(_.chunk(months, 3))

}

let odd = function(){
    let oddno = [1, 3, 5, 7, 9, 11, 13, 15, 19, 21];
const _=require("lodash");
console.log(oddno);
return(_.tail( oddno))

}

let duplicate = function(){
    arr1 = [1, 2, 1, 3, 1];
    arr2 = [4, 6, 4, 7,4];
    arr3 = [2, 2, 3, 4, 5];
    arr4 = [3, 3, 6, 7, 1];
    arr5 = [5, 9, 9 , 4, 5];
    const _=require("lodash")
    return(_.union(arr1, arr2, arr3, arr4, arr5));
}

let pairs = function(){
    const _ = require('lodash');
  
let pairs = [['x', 1], ['y', 2], ['z', 3]]
  
let obj = _.fromPairs(pairs);
  
return(obj);
}

let welcome = function() {
    return " Welcome to my application. I am Anjali Srivastava and part of FunctionUp Uranium cohort" ;

}
module.exports.welcome = welcome;
module.exports.lodash = lodash;
module.exports.odd = odd;
module.exports.duplicate = duplicate;
module.exports.pairs = pairs;
