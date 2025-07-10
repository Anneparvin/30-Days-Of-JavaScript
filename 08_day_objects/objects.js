// 1.........
const person1 = {}
console.log(person1);

// 2.......person......
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle);

// 3............
const person = {
firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function(){
    return `${this.firstName}${this.lastName}`
  },
  'Phone Number':'+3584545454545'
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) 

console.log(person['Phone Number']);
console.log(person['age']);
console.log(person['lastName']);

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
console.log(person.getFullName());

// Setting new key for an object
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function(){
    let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(',')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())


// 4........................
const copyPerson = Object.assign({}, person)
console.log(copyPerson);

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']