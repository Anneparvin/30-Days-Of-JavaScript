// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let stringSub = 'JavaScript'

console.log("stringSub",stringSub.substring(0,4))     // Java
// Starts at index 0 (J)

// Stops before index 4 (S)

// ✅ Output: 'Java'


console.log("stringSub",stringSub.substring(4,10))    // Script
// Starts at index 4 (S)

// Stops before index 10 (which is end of the string)

// ✅ Output: 'Script'
console.log("stringSub",stringSub.substring(4))       // Script
// Starts at index 4 (S)

// Goes till the end

// ✅ Output: 'Script'

