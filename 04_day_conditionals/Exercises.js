// #####Exercises: Level 1
// 1.........Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let userInput = prompt("Enter your age:")
// let ageNumber = Number(userInput)
// if(ageNumber >= 18) {
//     console.log('You are old enough to drive');
// } else {
//     let yearsToWait = 18 - ageNumber;
//     console.log(`stating to wait for the number of ${yearsToWait} he needs to turn 18.`);
// }

// ✅ Ternary Version:
// let userInput1 = prompt("Enter your age:")
// let ageNumber1 = Number(userInput)

// let message = ageNumber1 >= 18 ?
// 'You are old enough to drive':
// `You need to wait ${18 - age} more year(s) to drive.`;
// console.log(message);


// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
let ageEnter = 30
if(ageEnter >= 30) {
    console.log('You are old enough to drive.');
} else if(ageEnter >= 15) {
console.log('You are left with 3 years to drive.');
} else {
console.log('you are eligible');
}


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = 26
// let yourAge = Number(prompt("Enter your age"));

// if(myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} year(s) older than you`);
// } else if (yourAge > myAge) {
//     console.log(`I am ${yourAge - myAge} year(s) older than you`);
// } else {
//     console.log("We are the same age");
// }

// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a30 = 30
let b25 = 25
if(a30 > b25) {
    console.log('a is greater than b' );
} else {
    console.log('a is less than b' );
}

// Using a ternary operator
let a300 = 30;
let b250 = 25;

let result1 = a300 > b250 ? 'a is greater than b' : 'a is less than b';
console.log(result1);

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let a4 = 4;
let b3 = 3;

if(a4 > b3){
    console.log(`{a4} is grater than {b3}`);
} else {
    console.log(`{a4} is not grater than {b3}`);
}

let ternary = a4 > b3 ? '(`{a} is grater than {b}`)': '{a} is not grater than {b}';

// Enter a number: 2
// 2 is an even number

// Answer:
//  let even2 = parseInt(prompt('Enter a number:'));

// if(even2 % 2 === 0){
//     console.log(`Enter a number: ${even2}`);
//     console.log(`${even2} is an even number`);
// } else {
//      console.log(`Enter a number: ${even2}`);
//     console.log(`${even2} is an odd number`);
// }

// lets ternary 
// console.log(`${even2} is ${even2 % 2 === 0 ? 'even':'odd'} number`);

// Enter a number: 9
// 9 is is an odd number.

// let odd9 = parseInt(prompt('Enter a number:'));

// if(odd9 % 2 === 0){
//     console.log(`Enter a number: ${odd9}`);
//     console.log(`${odd9} is an even number`);
// } else {
//      console.log(`Enter a number: ${odd9}`);
//     console.log(`${odd9} is an odd number`);
// }


// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let scores = parseInt(prompt('Enter a number:'));
// let grades;

// if(scores >= 80 && scores <= 100){
//     grades = 'A'
// } else if (scores >= 70 && scores <= 79){
//     grades = 'B'
// } else if (scores >= 60 && scores <= 69){
//     grades = 'C'
// } else if (scores >= 50 && scores <= 59){
//     grades = 'D'
// } else if (scores >= 0 && scores <= 49){
//     grades = 'F'
// } else {
//     grades= 'Invalid Score'
// }

// console.log(`${scores}`);
// console.log(`${grades}`);


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt('Enter a month:').toLowerCase();
// let season;

// if (month === 'september' || month === 'october' || month === 'november') {
//     season = 'Autumn';
// } else if (month === 'december' || month === 'january' || month === 'february') {
//     season = 'Winter';
// } else if (month === 'march' || month === 'april' || month === 'may') {
//     season = 'Spring';
// } else if (month === 'june' || month === 'july' || month === 'august') {
//     season = 'Summer';
// } else {
//     season = 'Invalid season';
// }

// console.log(`${month}`);
// console.log(`${season}`);


// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// let day = prompt('What is the day today?').toLowerCase()
// let resultDay;

// if (day === 'saturday' || day === 'sunday'){
//    resultDay = `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend`
// }  else if ( day === 'monday' || day === 'tuesday' || day === 'wednesday' ||
//     day === 'thursday' || day === 'friday') {
//         resultDay= `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day`
// } else {
//     resultDay = "Invalid Day"
// }

// console.log(`${resultDay}`);
// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// let month = prompt('Enter a month:')
// let resultMonths = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

// if(month === 'January') {
//     console.log(`${month} has 31 days`);
// } else if (month === 'february') {
//    console.log(`${month} has 28 days`);
// } else {
//     resultMonths = 'Invalid months'
// }


// Write a program which tells the number of days in a month, now consider leap year.
let month = prompt('Enter a month:').toLowerCase()
let year = parseInt(prompt('Enter a year:'))
let days;

let leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (
    month === "january" || 
    month === "march" || 
    month === "may" || 
    month === "july" || 
    month === "auguest" || 
    month === "october" || 
    month === "december" 
    ){
        days = 31;
    } else if (
        month === "april" ||
        month === "june" ||
        month === "september" ||
        month === "november"
       
    ){
        days = 30;
    } else if (month === "february") {
        days = leapYear ? 29 : 28;
    } else {
       console.log("Invalid month entered.")
    }

    if (days){
        let capMonth = month.charAt(0).toUpperCase() + month.slice(1);
        console.log(`${capMonth} ${year} has ${days} days`);
    }


// 🎉 CONGRATULATIONS ! 🎉

// << Day 3 | Day 5 >>

// 30-