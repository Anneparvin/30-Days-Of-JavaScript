const squareArr = n => {
return n * n
}
console.log("square",squareArr(2));

// number 222222222222
const changeToUpperCase = arr => {
const newArr = [];
for(const element of arr){
    newArr.push(element.toUpperCase())
}
return newArr
}
const countries =  ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// number 3
const printFullNameZ = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullNameZ('Zohran', 'Mamdani'));