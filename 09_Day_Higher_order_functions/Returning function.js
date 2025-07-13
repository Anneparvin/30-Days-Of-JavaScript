// 1...............
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2* n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10));
// 2..............
const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    arr.forEach(function(element){
        sum += element
    });
    return sum
}
console.log(sumArray(numbers));