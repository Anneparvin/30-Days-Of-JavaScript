// match
let stringMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log("stringMatch",stringMatch.match('love'));
let patternLove = /love/gi  // g-means to search in the whole text, i - case insensitive

console.log("stringMatch",stringMatch.match(patternLove))  