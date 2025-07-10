// Exercises: Level 1
// Create an empty object called dog
let dog = {}
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
let dogObject = {
name:'Tommy',
legs:4,
color:'Black',
age:10,
bark:function(){
    return 'woof woof';
},
breed:'blackberry',
getDogInfo:{
    health:'good',
    posy:'not'
}
}
// Get name, legs, color, age and bark value from the dog object

console.log(dogObject.name);
console.log(dogObject.color);
console.log(dogObject.age);
console.log(dogObject['age']);
console.log(dogObject.bark());
console.log(dogObject.getDogInfo.health);
// Set new properties the dog object: breed, getDogInfo
// Exercises: Level 2
// Find the person who has many skills in the users object.


const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let mostSkilledPerson = '';
let maxSkills = 0;
for(let user in users){
    if(users[user].skills.length > maxSkills){
        maxSkills = users[user].skills.length;
        mostSkilledPerson = user;
    }
}
console.log(mostSkilledPerson);

// Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInCount = 0;
let highPointCount = 0;

for(let user in users){
    if(users[user].isLoggedIn){
        loggedInCount++;
    }
    if(users[user].points){
        highPointCount++;
    }
}
console.log(loggedInCount);
console.log(highPointCount);

// Find people who are MERN stack developer from the users object

let mernDevelopers = [];

for(let user in users){
    let skills = users[user].skills;
    if(
        skills.includes('MongoDB') && 
        skills.includes('Express') && 
        skills.includes('React') && 
        skills.includes('Node')  
    ){
        mernDevelopers.push(user);
    }
}
console.log("MernDeveloper", mernDevelopers);

// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object

// Get all the values of users object

// Use the countries object to print a country name, capital, populations and languages.

// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//     const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// 🎉 CONGRATULATIONS ! 🎉

// << Day 7 | Day 9 >>

// 30-Days-Of-JavaScript/08_Day_Objects/08_day_objects.md at master · Asabeneh/30-Days-Of-JavaScript