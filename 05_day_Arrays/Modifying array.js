const num = [1, 2, 3, 4, 8]
num[2] = 10
num[1] = 290
console.log(num);


const countriesBull = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countriesBull[1] = 'Greece'
let lastCountrie = countriesBull.length - 1
countriesBull[lastCountrie] = 'bulgeriya'
console.log(countriesBull);


// 4.............
const arrValue = Array() // creates an an empty array
console.log(arrValue)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]