// 1.......................
const callback = (n) => {
    return n ** 2
}
console.log(3);

// 2....................
function cube(callback, n){
    return callback(n)* n
}
console.log(cube(callback, 3));

// 3............
function sayHello(name){
    console.log("hello" + name);
}
function greetUser(callback){
    const name = 'Anne';
    callback(name)
}
greetUser(sayHello)