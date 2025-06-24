



// Declare an empty array;
const emptyArr = Array()
console.log(emptyArr);
// Declare an array with more than 5 number of elements

const declare = [1, 2, 3, 4, 5, 9, 0]
console.log(declare);
// Find the length of your array
console.log(declare.length);
// Get the first item, the middle item and the last item of the array
let firstItem= declare[0]
let middleIndex = Math.floor(declare.length/2)
let middleItem = declare[middleIndex]
let lastIndexOF = declare[declare.length -1]

console.log('First',firstItem);
console.log('middle',middleItem);
console.log('last',lastIndexOF);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [200, 30, 28, true, 89, 67, '38', 'julia']
mixedDataTypes.length
console.log(mixedDataTypes);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company

// Print out each company
// forLoop
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
}
// forEach
itCompanies.forEach(companie => {
    console.log(companie);
})
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(companie => {
    console.log("COMPANI:",companie.toUpperCase());
})
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const sentenceArray = itCompanies.slice(0, -1).join(', ') + " and " + itCompanies[itCompanies.length-1] + " are big IT companies.";

console.log(sentenceArray);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const companyToCheck = "Tesla";

if (itCompanies.includes(companyToCheck)){
    console.log(companyToCheck);
} else {
    console.log("Company isn't found");
}
// Filter out companies which have more than one 'o' without the filter method

const itCompaniesFilter = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const result = [];

for (const company of itCompaniesFilter) {
  // Count how many 'o' or 'O' are in the company name
  let count = 0;
  for (const char of company.toLowerCase()) {
    if (char === 'o') {
      count++;
    }
  }

  // Keep companies with 0 or 1 'o'
  if (count <= 1) {
    result.push(company);
  }
}

console.log(result);

// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7));
// Slice out the middle IT company or companies from the array
const middleItCompanies = itCompanies.length % 2 === 0 ?
itCompanies.slice(itCompanies.length /2 -1, itCompanies.length /2 + 1):
itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1);

console.log(middleItCompanies);
// Remove the first IT company from the array
const itCompaniesp = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

itCompaniesp.shift();  // Removes the first item

console.log(itCompaniesp);

// Remove the middle IT company or companies from the array
const itCompaniesMiddle = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const length = itCompaniesMiddle.length;

if(length % 2 === 0){
itCompaniesMiddle.splice(length / 2 - 1, 2)
} else {
itCompaniesMiddle.splice(Math.floor(length/2), 1)
}
// Remove the last IT company from the array
const itCompaniesLast = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

itCompaniesLast.pop();  // Removes the last item

console.log(itCompaniesLast);


// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);

// ..................Another option splice
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies);
// Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// complete in main.js

// First remove all the punctuations and change the string to array and count the number of words in the array

 let text =
 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

 let cleanText = text.replace(/[^\w\s]/g, '');
 let wordsArray = cleanText.split(" ")
 console.log(wordsArray)
 console.log(wordsArray.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// In the following shopping cart add, remove, edit items

 const shoppingCartAdd = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCartAdd[0] = 'Meat';
console.log(shoppingCartAdd);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCartAdd.push('Sugar')
console.log(shoppingCartAdd);
// remove 'Honey' if you are allergic to honey
shoppingCartAdd.splice(shoppingCartAdd.indexOf('Honey'), 1)
console.log(shoppingCartAdd);
// modify Tea to 'Green Tea'
shoppingCartAdd[shoppingCartAdd.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCartAdd);
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let countries = 'Ethiopia';

// if(countries.includes){
//     console.log(countries.toUpperCase());
// } else {
//     console.log(countries.push);
// }

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// const web = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// if(web.includes(Sass)){
//     console.log('Sass is a CSS preprocess');
// } else {
//     web.push('Sass')
//     console.log(web);
// }

// Concatenate the following two variables and store it in a fullStack variable.

//  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// Exercise: Level 3
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// ages.sort((a, b) => a - b);
// console.log("sorted ages", ages);

// const minAge = ages[0]
// const maxAge = ages[ages.length - 1]

// console.log("Min age:", minAge);
// console.log("Max age:", maxAge);
// // Find the median age(one middle item or two middle items divided by two)
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// First, sort the ages in ascending order
ages.sort((a, b) => a - b);

const lengthAge = ages.length;
let median;

if (lengthAge % 2 === 0) {
  // Even number of elements → average of two middle items
  median = (ages[length / 2 - 1] + ages[length / 2]) / 2;
} else {
  // Odd number of elements → middle item
  median = ages[Math.floor(length / 2)];
}

console.log("Median age:", median);


// Find the average age(all items divided by number of items)

const sum = ages.reduce((acc, curr) => acc + curr, 0)
const average = sum / ages.length;

console.log(average);
// Find the range of the ages(max minus min)
const maxAge = Math.max(...ages);
const minAge = Math.min(...ages);

const range = maxAge - minAge;
console.log("Range of ages:", range);
// Compare the value of (min - average) and (max - average), use abs() method 

// 1.Slice the first ten countries from the countries array
 const countriesU = ['Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

const sliceCountry = countriesU.slice(0,10)
console.log(sliceCountry);

// Find the middle country(ies) in the countries array
let LengthC = countriesU.length;

if(LengthC % 2 === 0){
  // Even number of countries → 2 middle countries
  const middle1 = countriesU[LengthC / 2 - 1]
  const middle2 = countriesU[LengthC / 2 ]
   console.log("Middle countries:", middle1, "and", middle2);
} else {
  const middle = countriesU[LengthC / 2]
  console.log("Middle country:", middle);
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.



const lengthVar = countriesU.length;
const middleIn = Math.ceil(LengthC/2); // Add 1 extra to first half if odd

const firstHalf = countriesU.slice(0, middleIn)
const secondHalf = countriesU.slice(middleIn)

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);




// 🎉 CONGRATULATIONS ! 🎉

// << Day 4 | Day 6 >>

// Copied!