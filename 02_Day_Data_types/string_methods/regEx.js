// regular expression.
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

console.log("txt",txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log("regEx",txt.match(/\d+/g)) // ["2019", "30", "2020"]