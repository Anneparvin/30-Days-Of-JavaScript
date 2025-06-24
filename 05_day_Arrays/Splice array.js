// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.


const numberSplice = [1, 2, 3, 4, 500000]
numberSplice.splice()
console.log(numberSplice);

const numbersPar = [1, 2, 3, 4, 500000]
numbersPar.splice(0,1)
console.log(numbersPar);

  const numbersGd = [1, 2, 3, 4, 5, 6]
	numbersGd.splice(3, 3, 7, 8, 9)
   // ✅ Syntax of splice(start, deleteCount, item1, item2, ...)
// start → index to start from

// deleteCount → how many items to remove

// item1, item2, ... → items to insert (optional)
// 🔹 splice(3, 3, 7, 8, 9) means:
// Start from index 3 → value is 4

// Remove 3 items → 4, 5, 6

// Insert 7, 8, 9 in their place
  console.log(numbersGd.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items