// Exercises: Level 1
// 1..// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
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

// 2..// Check if type of '10' is equal to 10

console.log("typeOf 10",10 == '10');

// 3.// Check if parseInt('9.8') is equal to 10
console.log("typeOf 9.8",9.8 == '10');

// 4..// Boolean value is either true or false.
let isLoggedIn = true;
let hasPaid = false;
let isGreater = 10 > 5;

console.log(isLoggedIn);
console.log(hasPaid);
console.log(isGreater);

// !!!// Write three JavaScript statement which provide truthy value.
console.log("truthyValue",Boolean(true));
console.log("truthyValue",Boolean(1));
console.log("truthyValue",Boolean(-1));
console.log("truthyValue",Boolean(3.14));
console.log("truthyValue",Boolean("0"));
console.log("truthyValue",Boolean("false"));
console.log("truthyValue",Boolean("hello"));
console.log("truthyValue",Boolean([]));
console.log("truthyValue",Boolean({}));
console.log("truthyValue",Boolean(function() {}));
console.log("truthyValue",Boolean(Infinity));
console.log("truthyValue",Boolean(-Infinity));
console.log("truthyValue",Boolean(new Date()));
console.log("truthyValue",Boolean(Symbol("sym")));
console.log("truthyValue",Boolean(1n));


// Write three JavaScript statement which provide falsy value.
console.log("falsyValue",Boolean(0));
console.log("falsyValue",Boolean(""));
console.log("falsyValue",Boolean(NaN));
console.log("falsyValue",Boolean(undefined));
console.log("falsyValue",Boolean(null));
console.log("falsyValue",Boolean(0n));  
console.log("falsyValue",Boolean(false));
console.log("document.all",Boolean(document.all
));

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
console.log("1comparison", 4 > 3);
// 4 >= 3
console.log("2comparison", 4 >= 3);
// 4 < 3
console.log("3comparison", 4 < 3);
// 4 <= 3
console.log("4comparison", 4 <= 3);
// 4 == 4
console.log("5comparison", 4 == 4);
// 4 === 4
console.log("6comparison", 4 === 4);
// 4 != 4
console.log("7comparison", 4 != 4);
// 4 !== 4
console.log("8comparison", 4 !== 4);
// 4 != '4'
console.log("9comparison", 4 != "4");
// 4 == '4'
console.log("10comparison", 4 == "4");
// 4 === '4'
console.log("11comparison", 4 === "4");
// Find the length of python and jargon and make a falsy comparison statement.
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
console.log("&Values", 4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12
console.log("&Values",  4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12
console.log("OrValues", 4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12
console.log("OrValues", 4 > 3 || 10 > 12);

// !(4 > 3)
// ✅ Meaning:
// !true → false

// !false → true
console.log("!(4 > 3", !(4 > 3));

// !(4 < 3)
console.log("!(4 < 3)", !(4 < 3));
// !(false)
console.log(" !(false)", !(false));
// !(4 > 3 && 10 < 12)
console.log("!(4 > 3 && 10 < 12)", !(4 > 3 && 10 < 12));
// !(4 > 3 && 10 > 12)
console.log("!(4 > 3 && 10 > 12)", !(4 > 3 && 10 > 12));
// !(4 === '4')
console.log("notValues", !(4 === '4'));

// 🔁 Double NOT (!!)
// To explicitly convert any value to a true or false value.
console.log("Double NOT (!!)",!!"Hello");  // true (non-empty string is truthy)
console.log("Double NOT (!!)",!!0);        // false (0 is falsy)
console.log(!!true);         // true
console.log(!!false);        // false
console.log(!!1);            // true
console.log(!!0);            // false
console.log(!!"hello");      // true (non-empty string is truthy)
console.log(!!"");           // false (empty string is falsy)
console.log(!!null);         // false
console.log(!!undefined);    // false
console.log(!!{});           // true (object is truthy)
console.log(!![]);           // true (array is truthy)


// There is no 'on' in both dragon and python
// Use the Date object to do the following activities

// What is the year today?
var Exercises = new Date()
console.log(Exercises.getFullYear());
// What is the month today as a number?
console.log(Exercises.getMonth());
// What is the date today?
console.log(Exercises.getDate());
// What is the day today as a number?


//  Explanation:
// getDay() returns the day of the week as a number:

// 0 = Sunday

// 1 = Monday

// 2 = Tuesday

// 3 = Wednesday

// 4 = Thursday

// 5 = Friday

// 6 = Saturday
console.log(Exercises.getDay());
// What is the hours now?
console.log(Exercises.getHours());
// What is the minutes now?
console.log(Exercises.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondsElapsed = Math.floor(Date.now()/1000)
console.log(secondsElapsed);


// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm


// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

const activities = new Date();

const yearsTime = String(activities.getHours()).padStart(2, '0');
const monthsTime = String(activities.getHours()).padStart(2, '0');
const datesTime = String(activities.getHours()).padStart(2, '0');
const hoursTime = String(activities.getHours()).padStart(2, '0');
const minutesTime = String(activities.getMinutes()).padStart(2, '0');

const formattedTime = `${yearsTime}/${monthsTime}/${datesTime} ${hoursTime}:${minutesTime}`;

console.log("formattedTime",formattedTime);



// YYY-MM-DD HH:mm eg. 20120-01-02 07:05