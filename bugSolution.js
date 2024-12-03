function myFunc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(myFunc(12, 18)); // Output: 6
console.log(myFunc(15, 20)); // Output: 5
console.log(myFunc(0, 10)); // Output: 10
console.log(myFunc(10,0)); // Output: 10
console.log(myFunc(123456789, 987654321)); // Output: 3