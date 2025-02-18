const numbers = [1, 2, 3, 4, 5, 16, 7];
const strings = ["Apple", "Mango", "Orange"];

// console.log(Array.isArray(numbers));
// LENGTH property.
console.log(numbers.length);
// toString
console.log(strings.toString());
// .at()
console.log(strings.at(-2));
// .join()
console.log(numbers.join(" "));

// .pop()

// let lastEl = numbers.pop();
// console.log(lastEl);
// console.log(numbers);

// push

let newNum = numbers.push("WTF");
console.log(newNum);

function commonEnd(a, b) {
  if (a[0] === b[0]) {
    return true;
  } else if (a.at(-1) === b.at(-1)) {
    return true;
  } else {
    return false;
  }
}
