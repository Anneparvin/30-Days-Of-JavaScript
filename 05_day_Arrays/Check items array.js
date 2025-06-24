const frutika = ['banana', 'orange', 'mango', 'lemon']
let index = frutika.indexOf('banana')

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}// This fruit does exist in the array

// we can use also ternary here
index === -1? console.log('This fruit does not exist in the array')  :console.log('This fruit does exist in the array');


let indexOfAvocado = frutika.indexOf('avocado')
if(indexOfAvocado === -1){
    console.log('This Avocado does not exist in the array')  
} else {
    console.log('This Avocado does exist in the array')
}
// This fruit does not exist in the array