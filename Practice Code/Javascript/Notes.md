# Javascript

### Numbers and Operators.

1. "++" increases the value by 1
2. "+" adds and concats.
3. if we add any number with string, then the number will be converted into strings.
4. If we divide 2 numbers as a string like "10" / "10", then Javascript will convert those strings into numbers. So the result will be 1.same goes for \* and -
5. Nan (Not a Number) : if we do operations like 10+"apple",then result will be NaN.
6. NaN and Infinity are Js reserved keywords, and they are actually Numbers. (typeof NaN is Number).

## Javascript Operator Guide

JavaScript supports a wide variety of operators, which are used to perform operations on variables and values. These operators can be categorized based on their purpose and functionality. Below is a detailed and generous explanation of all the types of operators in JavaScript:

---

### **1. Arithmetic Operators**

These are used for mathematical operations.

| Operator | Description                     | Example  | Result |
| -------- | ------------------------------- | -------- | ------ |
| `+`      | Addition                        | `5 + 3`  | `8`    |
| `-`      | Subtraction                     | `5 - 3`  | `2`    |
| `*`      | Multiplication                  | `5 * 3`  | `15`   |
| `/`      | Division                        | `10 / 2` | `5`    |
| `%`      | Modulus (Remainder)             | `10 % 3` | `1`    |
| `**`     | Exponentiation (Power)          | `2 ** 3` | `8`    |
| `-`      | Unary Negation                  | `-5`     | `-5`   |
| `+`      | Unary Plus (Converts to Number) | `+"5"`   | `5`    |

---

### **2. Assignment Operators**

These assign values to variables. They often combine assignment with another operation.

| Operator | Description             | Example   | Equivalent   |
| -------- | ----------------------- | --------- | ------------ |
| `=`      | Assign                  | `x = 10`  | `x = 10`     |
| `+=`     | Add and Assign          | `x += 5`  | `x = x + 5`  |
| `-=`     | Subtract and Assign     | `x -= 5`  | `x = x - 5`  |
| `*=`     | Multiply and Assign     | `x *= 5`  | `x = x * 5`  |
| `/=`     | Divide and Assign       | `x /= 5`  | `x = x / 5`  |
| `%=`     | Modulus and Assign      | `x %= 5`  | `x = x % 5`  |
| `**=`    | Exponentiate and Assign | `x **= 2` | `x = x ** 2` |

---

### **3. Comparison Operators**

Used to compare values and return a boolean (`true` or `false`).

| Operator | Description              | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Equal (loose comparison) | `5 == '5'`  | `true`  |
| `===`    | Strict Equal             | `5 === '5'` | `false` |
| `!=`     | Not Equal                | `5 != '5'`  | `false` |
| `!==`    | Strict Not Equal         | `5 !== '5'` | `true`  |
| `>`      | Greater Than             | `5 > 3`     | `true`  |
| `<`      | Less Than                | `3 < 5`     | `true`  |
| `>=`     | Greater Than or Equal    | `5 >= 5`    | `true`  |
| `<=`     | Less Than or Equal       | `5 <= 3`    | `false` |

---

### **4. Logical Operators**

These are used to combine or invert boolean values.

| Operator | Description            | Example         | Result     |
| -------- | ---------------------- | --------------- | ---------- | ----- | --- | ------ | ------ |
| `&&`     | Logical AND            | `true && false` | `false`    |
| `        |                        | `               | Logical OR | `true |     | false` | `true` |
| `!`      | Logical NOT (Negation) | `!true`         | `false`    |

---

### **5. Bitwise Operators**

These operate on numbers at the binary level.

| Operator | Description            | Example   | Result |
| -------- | ---------------------- | --------- | ------ | --- | --- |
| `&`      | AND                    | `5 & 1`   | `1`    |
| `        | `                      | OR        | `5     | 1`  | `5` |
| `^`      | XOR                    | `5 ^ 1`   | `4`    |
| `~`      | NOT (One's Complement) | `~5`      | `-6`   |
| `<<`     | Left Shift             | `5 << 1`  | `10`   |
| `>>`     | Right Shift            | `5 >> 1`  | `2`    |
| `>>>`    | Zero-Fill Right Shift  | `5 >>> 1` | `2`    |

---

### **6. String Operators**

These operate on strings.

| Operator | Description            | Example             | Result            |
| -------- | ---------------------- | ------------------- | ----------------- |
| `+`      | Concatenation          | `'Hello' + 'World'` | `'HelloWorld'`    |
| `+=`     | Concatenate and Assign | `x += 'World'`      | `x = x + 'World'` |

---

### **7. Conditional (Ternary) Operator**

A shorthand for `if-else`.

| Operator | Description      | Example                | Result             |
| -------- | ---------------- | ---------------------- | ------------------ |
| `? :`    | Ternary Operator | `x > 5 ? 'Yes' : 'No'` | `'Yes'` if `x > 5` |

---

### **8. Type Operators**

Used to work with types of variables.

| Operator     | Description                  | Example          | Result       |
| ------------ | ---------------------------- | ---------------- | ------------ |
| `typeof`     | Returns type of a variable   | `typeof 'Hello'` | `'string'`   |
| `instanceof` | Checks if object is instance | `x instanceof A` | `true/false` |

---

### **9. Nullish Coalescing Operator**

Introduced in ES2020, handles `null` or `undefined`.

| Operator | Description                                            | Example             | Result      |
| -------- | ------------------------------------------------------ | ------------------- | ----------- |
| `??`     | Returns right operand if left is `null` or `undefined` | `null ?? 'Default'` | `'Default'` |

---

### **10. Optional Chaining Operator**

Introduced in ES2020, safely access deeply nested properties.

| Operator | Description                                    | Example     | Result      |
| -------- | ---------------------------------------------- | ----------- | ----------- |
| `?.`     | Returns `undefined` if property does not exist | `obj?.prop` | `undefined` |

---

### **11. Increment and Decrement Operators**

Used to increase or decrease values by 1.

| Operator | Description | Example | Result  |
| -------- | ----------- | ------- | ------- |
| `++`     | Increment   | `x++`   | `x + 1` |
| `--`     | Decrement   | `x--`   | `x - 1` |

---

### **12. Comma Operator**

Used to evaluate multiple expressions and return the last value.

| Operator | Description              | Example     | Result |
| -------- | ------------------------ | ----------- | ------ |
| `,`      | Evaluate multiple values | `(1, 2, 3)` | `3`    |

---

This comprehensive breakdown covers all major operators in JavaScript. Let me know if you'd like detailed examples for any specific category!
