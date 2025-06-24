const numberLoop = [1, 2, 3, 4, 5]

for(const num of numberLoop) {
    console.log(num);
}

// // adding all the numbers in the array
let sum0 = 0
for(const num of numberLoop){
    sum += num
}

console.log("Summation",sum0);

const webTecks = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTecks) {
    console.log(tech.toUpperCase());
}
for (const tech of webTecks) {
    console.log(tech[0]);
}