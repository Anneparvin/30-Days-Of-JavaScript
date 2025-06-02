// includes()
let stringIncludes = '30 Days Of JavaScript'
console.log("includes",stringIncludes.includes('Days'));
console.log("includes",stringIncludes.includes('days'));
console.log(stringIncludes.includes('Script'))   // true
console.log(stringIncludes.includes('script'))   // false
console.log(stringIncludes.includes('java'))     // false

let FinlandCountry = 'Finland'
console.log(FinlandCountry.includes('fin')) // false
console.log(FinlandCountry.includes('Fin')) // true
console.log(FinlandCountry.includes('land')) // true
console.log(FinlandCountry.includes('Land')) // false