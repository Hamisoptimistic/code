function sumDouble(a, b) {
  return a === b ? 2 * (a + b) : a + b;
}

sumDouble(1, 2); // 3
console.log(sumDouble(3, 2)); // 5
console.log(sumDouble(2, 2)); // 8
console.log(sumDouble(3, 3)); // 12
console.log(sumDouble(0, 0)); // 0
