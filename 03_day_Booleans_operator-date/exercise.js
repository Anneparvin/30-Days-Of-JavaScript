// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let userFirst = 'Forida';
let userLast = 'Parven';
let nation = 'Bangldeshi';
let homeTown = 'Chittagong';
let userAge = 35;
let marriedStatus = true;
let currentYear = 2025;

console.log(typeof userFirst);
console.log(typeof userLast);
console.log(typeof nation);
console.log(typeof homeTown);
console.log(typeof userAge);
console.log(typeof marriedStatus);
console.log(typeof currentYear);

// Check if type of '10' is equal to 10

console.log("typeOf 10",10 == '10');

// Check if parseInt('9.8') is equal to 10
console.log("typeOf 9.8",9.8 == '10');

// Boolean value is either true or false.
let isLoggedIn = true;
let hasPaid = false;
let isGreater = 10 > 5;

console.log(isLoggedIn);
console.log(hasPaid);
console.log(isGreater);

// Write three JavaScript statement which provide truthy value.
console.log("truthyValue",10 == '10');
console.log("truthyValue",10 > 9);
console.log("truthyValue",10 >= 9);
console.log("truthyValue",9 <= 10);
console.log("truthyValue",10 != 9);
console.log("truthyValue",10 !== '10');
console.log("truthyValue",0 == false);
console.log("truthyValue",0 == '');
console.log("truthyValue",0 == ' ');
console.log("truthyValue",1 == true);
console.log("truthyValue",undefined == null);

// Write three JavaScript statement which provide falsy value.
console.log("falsyValue",10 < 9);
console.log("falsyValue",10 == 9);
console.log("falsyValue",10 === 9);
console.log("falsyValue",10 != 9);
console.log("falsyValue",0 === true);