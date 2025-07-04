const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countriesString = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countriesString)
console.log('Number of countries:', countriesString.length)


// Array can have items of different data types
const arr = [
    'Asa',
    280,
    true,
    {countriesStr:"Ayarland", city: "helsinja"},
    {skills:["HTML", "CSS", "JS"]},
]
console.log(arr);

// Example 2
const mixedArray1 = [
  'John Doe',
  30,
  false,
  { country: 'USA', city: 'New York' },
  { hobbies: ['Reading', 'Gaming', 'Coding'] }
];

console.log(mixedArray1);

