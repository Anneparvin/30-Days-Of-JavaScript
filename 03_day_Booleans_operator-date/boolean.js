let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false


console.log("Boolean:" ,isHungry,isLightOn,falseValue,isMarried,truValue);

// ###Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

// Here are 5 examples of truthy values in JavaScript:

// 1 – Any non-zero number is truthy.

// "hello" – Any non-empty string is truthy.

// [] – An empty array is still truthy.

// {} – An empty object is truthy.

// true – The boolean true is obviously truthy.


// ###Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string

// Here are falsy values in JavaScript — these are values that evaluate to false in a boolean context:

// 0 – The number zero.

// "" – An empty string.

// null – Represents "no value".

// undefined – A variable that has not been assigned a value.

// NaN – "Not a Number".

// false – The boolean false.

if (0) {
  console.log("This won't run");
}