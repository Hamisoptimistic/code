
### Numbers and Operators.

1. `++` increases the value by 1
2. `+` adds and concats.
3. `unary +` converts numeric strings into numbers.
4. if we add any number with string, then the number will be converted into strings.
5. If we divide 2 numbers as a string like `"10" / "10"`, then Javascript will convert those strings into numbers. So the result will be same goes for `/ * and -`
6. Nan (Not a Number) : if we do operations like 10+"apple",then result will be `NaN`.
7. NaN and Infinity are Js reserved keywords, and they are actually Numbers. (`typeof NaN` is Number).
8. Numbers can be created using `new Number(123)` which is not recommended.
9. [Operator Precedence](https://javascript.info/operators#operator-precedence)
10. Operators : Assignment,Arithmetic,Comparison,Logical,Comma
11. [chatGPT operator](https://chatgpt.com/c/678e15ab-6538-8006-a53a-a782d259c019)
### Data Types
1. Js has 2 data-types, `Primitive & Object`
2. Primitive Data type : Number, String, Boolean, Undefined, null, Bigint, Symbol.
3. Object Data type : object, function, array, class, Set, Map.
### Strings
1.  Strings can be primitive and object based in Js.
2.  String Methods.
	1. Using `[]` to return a word at that index of the string
	2. `.length`
	3. `.indexOf() & .lastIndexOf()`
	4. `.slice (2,4)` cuts the string and returns a new string according to index.
	5. `.toUpperCase() & .toLowerCase()` 
	6. `.trim()` and we can chain the methods.
	7. `.replace() & .replaceAll(what to replace and to replace with)`
	8. Boolean methods. `.includes(), .starsWith(), .endsWith()`
	9. `.padStart() & .padEnd(20, '+')`

## Logical Operators
1. Logical `OR (||)` : a chain of OR `||` returns the first truthy value or the last one if no truthy value is found.
2. Logical `AND(&&)` : returns the first falsy value or the last value if none were found.
3. Short-circuiting : Remember that `&&` stops at the first **falsy** value, while `||` stops at the first **truthy** value.
## Conditional Statements.
1. If-else : In its parenthesis, it takes  true or any truthy values.
2. Ternary operator : ```condition ? run this code : run this code instead.```
	