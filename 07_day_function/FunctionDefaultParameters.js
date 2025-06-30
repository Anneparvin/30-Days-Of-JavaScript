// 1.......................
function greetings(name = 'Peter'){
    let message = `${name}, Welcome to 30 days of JavaScript!`
    return message
}
console.log(greetings());
console.log(greetings('Asabeneh'))

// 2.......................
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh'){
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName());
console.log(generateFullName('David','Smith'));

// 3.......................
function calculateAge(birthYear, currentYear = 2019){
    let age = currentYear - birthYear
    return age
}

console.log('Age', calculateAge(1819));

// 4.......................
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + 'N'
console.log("Weight Of The Nation",weightOfObject(100));
console.log("Weight Of The Nation",weightOfObject(100, 1.63));