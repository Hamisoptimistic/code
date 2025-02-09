// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

let add7 = (num) => {
  return num + 7;
};

let multiply = (num1, num2) => {
  return num1 * num2;
};

let capitalize = (string) => {
  let capz = string[0].toUpperCase() + string.slice(1);
  return capz;
};

let lastLetter = (string) => {
  return string.slice(-1);
  // console.log(last);
};

console.log(capitalize("hamim"));
console.log(lastLetter("hamim"));
