const sliceArray = [1,2,3,4,5]

console.log(sliceArray.slice());
console.log(sliceArray.slice(0));
console.log(sliceArray.slice(0, sliceArray.length));
console.log(sliceArray.slice(1,4));  // -> [2,3,4] // it doesn't include the ending position
