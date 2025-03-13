function isPrime(n) {
  if (n <= 1 || isNaN(n)) return false;

  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let output = isPrime(3);
console.log(output);
