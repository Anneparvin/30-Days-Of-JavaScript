// ✅ Primitive Data Types (hold single values)
// | Type      | Example Code                       | Value                        |
// | --------- | ---------------------------------- | ---------------------------- |
// | String    | `let name = "Forida";`             | Text                         |
// | Number    | `let age = 25;`                    | A number                     |
// | Boolean   | `let isLoggedIn = true;`           | true or false                |
// | Undefined | `let email;`                       | No value assigned            |
// | Null      | `let job = null;`                  | Empty / intentional no value |
// | BigInt    | `let big = 12345678901234567890n;` | Very large number            |
// | Symbol    | `let id = Symbol("id");`           | Unique identifier            |


// ✅ Non-Primitive Data Types (hold collections or references)
// Type	Example         Code	                                                      Description
// Object	         let person = { name: "Forida", age: 25 };	                    Key-value pairs
// Array	         let colors = ["red", "green", "blue"];	                        List of items
// Function	         function greet() { console.log("Hi!"); }                       Reusable block of code
// Date	let          today = new Date();	                                        Current date and time
// Set	let          items = new Set([1, 2, 2, 3]);	                                Unique values only
// Map	let          map = new Map(); map.set("a", 1);	                            Key-value pairs (any type key)


// Mini Practice Project: Student Info Card
// Create a simple object with your name, age, skills (array), and a function that prints a greeting.

// 💻 Code:
let student = {
  name: "Forida",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript"],
  greet: function () {
    console.log("Hello, I am " + this.name);
  }
};

student.greet(); // Call the function
console.log(student.skills[1]); // Print "CSS"
