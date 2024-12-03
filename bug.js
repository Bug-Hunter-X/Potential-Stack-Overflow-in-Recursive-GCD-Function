function myFunc(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  return myFunc(Math.min(a, b), Math.abs(a - b));
}

console.log(myFunc(12, 18)); // Output: 6
console.log(myFunc(15, 20)); // Output: 5
console.log(myFunc(0, 10)); // Output: 10
console.log(myFunc(10,0)); // Output: 10