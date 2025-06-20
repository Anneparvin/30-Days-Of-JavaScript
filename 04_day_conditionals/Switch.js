// ex 1
let weatherPart = "cloudy"
switch (weatherPart) {
    case "rainy" :
    console.log('You need a rain coat.')
    break
    case "cloudy" :
    console.log('It might be cold, you need a jacket.')
    break
    case "sunny":
    console.log('Go out freely.')
    break
    default :
    console.log(' No need for rain coat.')
}

// ex 2
// let dayUserInput = prompt("What day is today?")
// let day = dayUserInput.toLowerCase()
// switch(day) {
// case "monday":
//     console.log("Today is Monday");
//     break
// case "Tuesday":
//     console.log("Today is Tuesday");
//     break
// case "wednesday":
//     console.log("Today is wednesday");
//     break
// case "thursday":
//     console.log("Today is thursday");
//     break
// case "friday":
//     console.log("Today is Friday");
//     break
// case "saturday":
//     console.log("Today is Saturday");
//     break
// case "sunday":
//     console.log("today is Sunday");
//     break
//     default:
//         console.log("it is not a week Day");
// }


// // Examples to use conditions in the cases
// let condition = prompt("Enter a Number");
// switch (true) {
//     case condition > 0:
//         console.log("Number is positive");
//         break
//     case condition < 0:
//         console.log("Number is negetive");
//         break
//     case condition == 0:
//         console.log("Number is zero");
//         break
//     default:
//         console.log("Entered value was not a number");
// }