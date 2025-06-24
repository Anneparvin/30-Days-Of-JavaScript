// For loop structure
// for(initialization, condition, increment/decrement){
  // code goes here
// }

for(let i = 0; i <= 5; i++){
    console.log(i);  // 0 1 2 3 4 5
}

for(let i = 5; i >= 0; i--){
    console.log(i); // 5 4 3 2 1 0
}

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

const countriesArray = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

const newArr = []
for(let i = 0; i < countriesArray.length; i++){
newArr.push(countriesArray[i].toUpperCase())
}

console.log(newArr);

// Adding all elements in the array
const numbersEle = [1, 2, 3, 4, 5, 6]

let sum = 0;
for(let i = 0; i< numbersEle.length; i++){
    sum = sum + numbersEle[i] // can be shorten, sum += numbers[i]
}

console.log(sum);

// Creating a new array based on the existing array
const numbers = [1, 2, 3, 4, 5]

const newArrG = []

let sumg = 0;
for(let i = 0; i < numbers.length; i++){
    newArrG.push(numbers[i] ** 2)
}

console.log(newArrG);