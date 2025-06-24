const lastIndexArray = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(lastIndexArray.lastIndexOf(2));
console.log(lastIndexArray.lastIndexOf(0));
console.log(lastIndexArray.lastIndexOf(1));
console.log(lastIndexArray.lastIndexOf(4));
console.log(lastIndexArray.lastIndexOf(6));

const lastInclude = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(lastInclude.includes(2));
console.log(lastInclude.includes(0));
console.log(lastInclude.includes(1));
console.log(lastInclude.includes(4));
console.log(lastInclude.includes(6));

const webTechsGood = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log("webTechsGood",webTechsGood.includes('Node'));
console.log("webTechsGood",webTechsGood.includes('C'));