// // 1ST TASK

// /**
//  * ===== Troubleshooting =====
//  * The function below should log the number 2, however it does not,
//  * see if you can fix it!
//  * Be sure to fix it in the spirit of the code, do not hard code the result.
//  */

// function troubleshooting() {
//   const a = 1;
//   const b = 1;

//   let result;

//   // Edit between these lines
//   // =================================
//   result = a + b;

//   // =================================

//   return result;
// }

// console.log(troubleshooting()); // Expected output: 2

// 2nd TASK

// function numberChecker(number) {
//   if (number === 6) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numberChecker(6));

/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

// const a = 1 + 8;
// const b = 22 * 3;
// const c = 5 % 4;
// const d = a - 17;
// const e = a + b + c + d;
// console.log(e);

const birthYear = 2000;
const thisYear = 2025;
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName = firstName + lastName;
const age = thisYear - birthYear;

const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

console.log(greeting);
