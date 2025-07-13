
// 2...........
let sum = 0;
const numbersSum = [1, 2, 3, 4, 6];
numbersSum.forEach(num => 
    console.log("forEach",num)
)

// 3..............
let sum1 = 0;
const numbers1 = [1, 2, 3, 4, 6];
numbers1.forEach(num => {
    sum1 += num
})
console.log("forEach1:",sum1);

// 3..................
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element) => 
console.log("countries:",element.toUpperCase())
)