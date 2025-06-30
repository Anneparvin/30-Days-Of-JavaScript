// function with one parameter
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log("Area:",areaOfCircle(10));

// function with two parameter

function sumTwoNumbers(numOne, numTwo){
let sum = numOne + numTwo
return sum
}
console.log(sumTwoNumbers(10, 20));

// Function with many parameters
function sumArrayValues(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
return sum
}
const numbers = [1,2,3,45]
console.log(sumArrayValues(numbers));

// Function with unlimited number of parameters

function sumAllNums(){
let sum = 0;
for(let i = 0; i < arguments.length; i++){
    sum += arguments[i]
}
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Let us access the arguments object
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Unlimited number of parameters in arrow function
const sumAllNumbs = (...args) => {
    console.log(args);
}
sumAllNumbs(1, 2, 3, 4)

// function declaration
const sumAllNumbes = (...args) =>{
let sum = 0
for(const element of args) {
    sum += element
}
return sum
}
console.log("function declaration",sumAllNumbes(1, 2, 3, 4)) // 10
console.log("function declaration",sumAllNumbes(10, 20, 13, 40, 10))  // 93
console.log("function declaration",sumAllNumbes(15, 20, 30, 25, 10, 33, 40))  // 173