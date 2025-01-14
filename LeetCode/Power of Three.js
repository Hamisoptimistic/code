
const isPowerOfThree = function(n) {
  if (n < 1) {
      return false;
  }
  while (n %3 === 0) {
      n = n/3;
      
  }
  console.log (n)
  return n===1;
};

console.log(isPowerOfThree(10)) // true