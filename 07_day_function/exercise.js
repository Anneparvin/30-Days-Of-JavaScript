// Exercises: Level 1
// Declare a function fullName and it print out your full name.

function fullName(){
}
console.log(fullName());


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName){
    let space = ' '
let fullName = firstName +space+ lastName
return fullName
}
console.log(fullName('Anna','bhy'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo){
    return numOne + numTwo  
}
console.log(addNumbers(4, 2));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    return length * width
}
console.log(areaOfRectangle(6, 3));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
let perimeter= 2*(length + width)
return perimeter
}
console.log("perimeterOfRectangle:",perimeterOfRectangle(2,2));
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
return length * width * height
}
console.log("volumeOfRectPrism",volumeOfRectPrism(2,3,4));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    return Math.PI * r * r
}
console.log("areaOfCircle:",areaOfCircle(4));


// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
let circumference = 2* Math.PI *r;
return circumference;
}
console.log(circumOfCircle(4).toFixed(2));


// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    return mass/volume
}
console.log("Density:", density(4, 2).toFixed(2)); // Density: 2.00


// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedMovingObject(distanceMeters, timeSeconds){
return distanceMeters / timeSeconds;
}
console.log("speedMovingObject", speedMovingObject(1000, 6).toFixed(2)); 
// Output: speedMovingObject 166.67

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calculatesWeight (mass,gravity){
return weight = mass * gravity
}
console.log("calculatesWeight",calculatesWeight(500,45).toFixed(2));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC){
        return (oC * 9/5) + 32
}
const tempC = 30
const tempF = convertCelsiusToFahrenheit(tempC).toFixed(2)
console.log(`${tempC}°C is equal to ${tempF}°F`);
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calculateBMI(weightKg, heightM) {
    const bmi = weightKg / (heightM * heightM);
    let status = '';

    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obese';
    }

    console.log(`Your BMI is ${bmi.toFixed(2)} (${status})`);
    return bmi;
}

const weightKg = 100; // define first
const heightM = 1.75; // define first

calculateBMI(weightKg, heightM); // use after declaration

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    month = month.toLowerCase();
if(["september","october","november"].includes(month)){
    return "Autumn";
}else if (["december","january","february"].includes(month)){
    return "Winter";
} else if(["march","april","may"].includes(month)){
return "Spring";
} else if (["june","july","auguest"].includes(month)){
        return "Summer";
}
 else {
    return "Invalid Month"
}
}
console.log(checkSeason("March"));     // Spring
console.log(checkSeason("july"));      // Summer
console.log(checkSeason("NOVEMBER"));  // Autumn
console.log(checkSeason("January"));   // Winter
console.log(checkSeason("abc"));       // Invalid month

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
// Exercises: Level 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Writ a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE
// Exercises: Level 3
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// 🎉 CONGRATULATIONS ! 🎉

// << Day 6 | Day 8 >>

// 30-Days-Of-JavaScript/07_Day_Functions/07_day_functions.md at master · Asabeneh/30-Days-Of-JavaScript · GitHub 