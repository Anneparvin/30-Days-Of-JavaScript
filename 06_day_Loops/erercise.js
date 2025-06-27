// Iterate 0 to 10 using for loop, do the same using while and do while loop

// let j = 0;
// do {
// // console.log(j);
// } while (j <= 5)

// Iterate 10 to 0 using for loop, do the same using while and do while loop

// ✅ Using for loop:
for(let i =10; i >= 0; i--){
    console.log(i);
}
// Iterate 0 to n using for loop

let n = 5;

for(let i = 0; i <= n; i++){
    console.log(" 0 to n using for loop",i);
}

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for(let i = 1; i <= 7; i++){
    console.log("#".repeat(i));
}
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i =0; i <= 10; i++){
    console.log(`${i} X ${i} = ${i * i}`);
}
// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for(let i = 0; i <= 10; i++){
    let square = i ** 2;
    let cube = i ** 3;
    console.log("Loop Print",i + " " + square + " "+ cube);
}
// Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log("0 to 100 and print",i);
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log("odd number", i);
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i = 2; i <=100; i++){
    let isPrime = true;

    for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log("primeNum",i);
    }
}



// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum100 = 0;

for(let i=0; i<=100; i++){
    sum100 += i;
}

console.log("The sum of all numbers from 0 to 100 is:", sum100);
// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumEven = 0;
// let sumOdd = 0;

// for(i =0; i <= 100; i++){
//     if(i % 2 === 0){
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }
// }

// console.log("Sum of all even numbers from 0 to 100 is:", sumEven);
// console.log("Sum of all odd numbers from 0 to 100 is:", sumOdd);


// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumEven = 0
let sumOdd = 0


for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        sumEven += i;
    } else {
        sumOdd += i
    }
}
let total = [sumEven, sumOdd]

console.log("Sum of all even numbers from 0 to 100 is:", sumEven);
console.log("Sum of all odd numbers from 0 to 100 is:", sumOdd);
console.log("Final array [evenSum, oddSum]:", total);

//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers
function generateArray(length) {
    result = [];

    for(let i = 0; i < length; i++){
        const ramdomNum = Math.floor(Math.random() * 101)
        result.push(ramdomNum)
    }
    return result
}

const randomArray = generateArray(5);
console.log(randomArray);



// another simple way to generate an array of 5 random numbers using Array.from() — a built-in JavaScript method:

const randomArray1 = Array.from({ length: 5},
    () => Math.floor(Math.random() * 101)
)
console.log(randomArray1);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// function generateUniqueRandomNumbers(length, max){
//     const numbers = [];

// while (numbers.length < length) {
// const ramdomNum = Math.floor(Math.random() * (max + 1));
// if(!numbers.includes(ramdomNum)){
//     numbers.push(ramdomNum)
// }
// }
// return numbers
// }

// const unique = generateUniqueRandomNumbers(5, 100);
// console.log("uniqueArray",unique);

// Develop a small script which generate a six characters random id:

function generateRandom(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex]
    }

    return result;
}

const randomId = generateRandom(6)
console.log("randomId",randomId);

// 5j2khz
// Exercises: Level 2
// Develop a small script which generate any number of characters random id:
function generateRandomId(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = [];

    for (let i = 0; i < length; i++){
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        result.push(randomChar)
    }
    return result.join('')
}

const random = generateRandomId(10)
console.log("RandomChar",random);


//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.
function randomScript(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = [];

    for(let i = 0; i < length; i++){
        const randomChar = characters[Math.floor(Math.random() * characters.length)]
        result.push(randomChar);
    }
    return result.join('')
}
console.log(randomScript(8));  // Example: 'aB7dK9Lm'
// '#ee33df'
// Write a script which generates a random rgb color number.
function generateRandomRGB(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb ${r}, ${g}, ${b}`;
}
console.log(generateRandomRGB());


// rgb(240,180,80)
// Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const countriesL = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const countryInfo = countriesL.map(country => {
const properCase = country[0] + country.slice(1).toLowerCase();
const code = country.slice(0, 3);
const length = country.length;
return [properCase, code, length]
})
console.log(countriesL);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countriesWithLand = countriesL.filter(country => country.toLowerCase().includes('land'))

if(countriesWithLand.length > 0){
    console.log(countriesWithLand);
} else {
    console.log('All these countries are without land');
}

// ['Finland'oun,'Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const countriesIa = countriesL
.filter(country => country.toLowerCase().includes('ia'))
.map(country => country[0]+country.slice(1).toLowerCase())

console.log(countriesIa);
// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// let longestCountry = countriesL[0];
// for(let i = 1; i < countriesL.length; i++){
//     if(countriesL[i].length > longestCountry.length){
//         longestCountry = countriesL[i]
//     }
// }
// console.log("longestCountry:",longestCountry);

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
const characters5 = countriesL.filter(country => 
    country.length === 5
) 
console.log("charaters",characters5);
// Find the longest word in the webTechs array
const webTecksSkill = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let longestWord = webTecksSkill[0];

for(let i = 1; i < webTecksSkill.length; i++){
    if(webTecksSkill[i].length > longestWord.length){
        longestWord = webTecksSkill[i]
    }

}
console.log(longestWord);

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let web = webTecksSkill.map(webTecks => {
    const skill = webTecks.toUpperCase();
    const length = webTecks.length;
    return [skill,length];
})
console.log(web);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(let i = 0; i < webTecksSkill.length; i++){
    console.log(webTecksSkill[i]);
}

const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for(const tech of techStack) {
    console.log("teckStack:",tech);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruits = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruit = [];

for(let i = fruits.length -1; i >= 0; i--){
    reverseFruit.push(fruits[i])
}
console.log(reverseFruit);

// Print all the elements of array as shown below.

 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  let arrray = []
for(let i = 0; i < fullStack.length; i++){
  for(let j = 0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j]);
  }
}

// for........of looop
for(stack of fullStack){
    for (tack of stack){
        console.log("fullstack:",tack);
    }
}


//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Exercises: Level 3
// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countriesL].sort();

console.log("Original countries:", countries);         // Not changed
console.log("Sorted countries:", sortedCountries);     // Alphabetically sorted
// Sort the webTechs array and mernStack array

const sortedWebteck = webTecksSkill.sort();

console.log("teck:", sortedWebteck);
// Extract all the countries contain the word 'land' from the countries array and print it as array

const extractCountries = countriesL
    .filter(country => country.toLowerCase().includes('land'))
    .map(country => country[0]+country.slice(1).toLowerCase())


console.log(extractCountries);
// Find the country containing the hightest number of characters in the countries array
let highestNumber = countriesL[0]

for(let i = 0; i < countriesL.length; i++){
    if(countriesL[i].length > highestNumber.length){
        highestNumber = countriesL[i]
    }
}
console.log("Country with highest number of characters:", highestNumber);
// Extract all the countries contain the word 'land' from the countries array and print it as array
const extractCountrie = countriesL
.filter(country => country.toLowerCase().includes('land'))
.map(country => country[0]+ country.slice(1).toLowerCase())
console.log(extractCountrie);


// Extract all the countries containing only four characters from the countries array and print it as array
const countriesLA = [
  "ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA",
  "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"
];


const countrie4 = countriesLA
  .filter(country => country.length === 4) // ✅ Filter only 4-character countries
  .map(country => country[0] + country.slice(1).toLowerCase()); // ✅ Proper case

console.log(countrie4);

// Extract all the countries containing two or more words from the countries array and print it as array
const countriesS = [
  "South Africa",
  "New Zealand",
  "United States",
  "Finland",
  "Japan",
  "United Kingdom",
  "South Korea",
  "Germany",
  "Czech Republic",
  "France"
];

const multiCounties = countriesS.filter(country => country.includes(' '))

console.log(multiCounties);
// Reverse the countries array and capitalize each country and stored it as an array
const reverseCountry = [...countriesLA].reverse();

const capitalizedReversed = reverseCountry.map(country => country.toUpperCase())

console.log(capitalizedReversed);
// 🎉 CONGRATULATIONS ! 🎉

// << Day 5 | Day 7 >>

// Copied! 