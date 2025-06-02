//Syntax
// `String literal text`
// `String literal text ${expression}`

// Example: 1
console.log(`THE sum of 2 and 3 is 5`);
let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a + b}`);


// Example:2
let AsafirstName = 'Asabeneh'
let AsalastName = 'Yetayeh'
let Funcountry = 'Finland'
let funcity = 'Helsinki'
let Funlanguage = 'JavaScript'
let Wojob = 'teacher'
let count = 25
let AsafullName = AsafirstName + ' ' + AsalastName

let personInfoTwo = `I am ${AsafullName}. I am ${count}. I live in ${Funcountry}.`
console.log(personInfoTwo);
