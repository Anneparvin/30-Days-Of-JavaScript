// String Concatenation
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
// let age = 250

let fullName = firstName + space + lastName
let personInfoOne = fullName + ' . I am ' + language + '. I Live in ' + country;

console.log(personInfoOne);
console.log(fullName);

// concat():
let stringConcat = '30'
console.log("stringConcat",stringConcat.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let countryConcat = 'Fin'
console.log("stringConcat",countryConcat.concat("land")) // Finland