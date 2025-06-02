// Creating a time object
const nowDate = new Date()
console.log(nowDate);

// Getting full year
const nowYear = new Date()
console.log(nowYear.getFullYear());

// Getting month
const nowMonth = new Date()
console.log(nowMonth.getMonth());

// Getting date
const date = new Date()
console.log(date.getDate());

// Getting day
const nowDay = new Date()
console.log(nowDay.getDay());  //  Sunday is 0, Monday is 1 and Saturday is 6 // Getting the weekday as a number (0-6)

// Getting hours
const nowHour = new Date()
 console.log(nowHour.getHours());

// Getting minutes
const nowMinute = new Date()
 console.log(nowMinute.getMinutes());


// Getting seconds
const nowSecond = new Date()
 console.log(nowSecond.getSeconds());

 
// Getting time
// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:
const nowTime = new Date()
console.log(nowTime.getTime());  // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41


// Using Date.now()
const allSeconds = Date.now()
console.log(allSeconds);

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds);

// Let us format these values to a human readable time format. Example:

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const dateD = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${dateD}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56