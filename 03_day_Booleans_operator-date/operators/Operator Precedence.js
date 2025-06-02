console.log(3 + 4 * 5);
console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

console.log("oparator precedence",1 + 2 ** 3 * 4 / 5 >> 6);

 (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘


function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }

console.log("function",C() || B() && A());

// Logs:
// called C
// true