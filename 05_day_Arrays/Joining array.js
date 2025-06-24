const joinArray = [1, 2, 3, 4, 5]
console.log(joinArray.join());

const namesBeauty = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(namesBeauty.join()) // Asabeneh,Mathias,Elias,Brook
console.log(namesBeauty.join('')) //AsabenehMathiasEliasBrook
console.log(namesBeauty.join(' ')) //Asabeneh Mathias Elias Brook
console.log(namesBeauty.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(namesBeauty.join(' # ')) //Asabeneh # Mathias # Elias # Brook


const webTechsgrp = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechsgrp.join());
console.log(webTechsgrp.join(', '));
console.log(webTechsgrp.join(','));
console.log(webTechsgrp.join(' '));