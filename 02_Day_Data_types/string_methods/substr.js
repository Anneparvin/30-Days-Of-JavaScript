// substr(): It takes two arguments, the starting index and number of characters to slice.
let substring = 'JavaScript'
console.log(substring.substr(4,6)); // Script

// 'JavaScript' → index positions:
// J(0) a(1) v(2) a(3) S(4) c(5) r(6) i(7) p(8) t(9)

// Start from index 4 (which is 'S')

// Take 6 characters → 'Script'

// ✅ Output: Script
let substring1 = 'Finland'
console.log(substring1.substr(1,5)); // inlan

// 'Finland' → index positions:
// F(0) i(1) n(2) l(3) a(4) n(5) d(6)

// Start from index 1 ('i')

// Take 5 characters → 'inlan'

// ✅ Output: inlan