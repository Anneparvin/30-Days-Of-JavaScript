// Day 2: Exercises


// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var challenge = '30 Days Of JavaScript';
console.log("challenge:",challenge);
// Print the string on the browser console using console.log()
console.log(challenge);
// Print the length of the string on the browser console using console.log()
console.log("stringLength:",challenge.length);
// Change all the string characters to capital letters using toUpperCase() method
console.log("UpperCase:",challenge.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
console.log("LowerCase:",challenge.toLowerCase());
// Cut (slice) out the first word of the string using substr() or substring() method
console.log("substr:",challenge.substr(2,6));
console.log("substring:",challenge.substring(2,6));
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('Slice:',challenge.slice(3));
// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));
// Split the string into an array using split() method
console.log(challenge.split());
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var SocialLogin = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(SocialLogin.split(' '));
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("D"));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("t"));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log("sentence",sentence.indexOf("u"));
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("lastIndex",sentence.lastIndexOf("n"));
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("o"));
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var java = '                           30 Days Of JavaScript'
console.log("whiteSpace:",java);
console.log(challenge.trim());
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("t"));
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g));
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var concat =  '30 Days of' +' '+ 'JavaScript' +' '+ '30 Days Of JavaScript'
console.log(concat);
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log((challenge + ' ').repeat(10));
console.log((sentence + '\n').repeat(10));


// Exercise: Level 2
// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("Quote", "The quote'There is no exercise better for the heart than reaching down and lifting people up.'\n by John Holmes teaches us to help one another.");

// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log( "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.

// Generate a random number between 50 and 100 inclusively.

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// 🎉 CONGRATULATIONS ! 🎉

// << Day 1 | Day 3 >>

// 30-Days-Of-JavaScript/02_Day_Data_types/02_day_data_types.md at master · Asabeneh/30-Days-Of-JavaScript · GitHub
