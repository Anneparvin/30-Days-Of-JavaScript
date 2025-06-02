// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check1 = 4 > 3 && 10 < 5         // true && false -> false
const check2 = 4 < 3 && 10 < 5 

console.log("logical operator:",check, check1, check2);

// || pipe or operator, example
const check3 = 4 > 3 || 10 > 5         // true  || true -> true
const check4 = 4 > 3 || 10 < 5         // true  || false -> true
const check5 = 4 < 3 || 10 < 5 

console.log("logical operator:",check3,check4, check5);


//! Negation examples
let checking = 4 > 3
let checking1 = !(4 > 3)
let isLightOnTrue = true
let isLightOff = !isLightOnTrue          // false
let isMarriedFalse = !false    

console.log("logical operator:",checking, checking1, isLightOff, isLightOnTrue, isMarriedFalse);