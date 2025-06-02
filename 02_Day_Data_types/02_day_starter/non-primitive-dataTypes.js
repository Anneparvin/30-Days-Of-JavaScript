let person = {
  name: "Forida",
  age: 30
};

let fruits = ["apple", "banana", "mango"];

function greet() {
  console.log("Hello!");
}

let today = new Date();

let pattern = /hello/i;

let numbers = new Set([1, 2, 3]);

let userRoles = new Map();
userRoles.set("admin", "read-write");

console.log("nonPrimitive",person, fruits, greet, today, pattern, numbers, userRoles);