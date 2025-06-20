let userName = "Forida"
let message = userName ? `Hello, ${userName}`:"Guest";
console.log(message);


let age18 = 18
let canVote = age18 >= 18 ? "yes": "No";
console.log(canVote);

let number5 = 5
let result = number5 % 5 === 0 ? "Even":"Odd"
console.log(result);


let score = 85;
let grade = 
score >= 90 ? "A" :
score >= 80 ? "B" :
score >= 70 ? "C" : "F";
console.log(grade);
//  Equivalent if...else version:
let score85 = 85
let grade85 ;
if (score85 >= 90) {
    grade85 = "A";
} else if (score85 >= 80) {
    grade85 = "B"
} else if (score85 >= 70) {
    grade85 = "C"
} else {
    grade85 = "F"
}

console.log(grade85);