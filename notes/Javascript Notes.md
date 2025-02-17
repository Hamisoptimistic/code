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
10. <u>Operators</u> : Assignment,Arithmetic,Comparison,Logical,Comma
11. [chatGPT operator](https://chatgpt.com/c/678e15ab-6538-8006-a53a-a782d259c019)
### Data Types
1. Js has 2 data-types, `Primitive & Object`
2. <u>Primitive Data type</u> : Number, String, Boolean, Undefined, null, Bigint, Symbol.
3. <u>Object Data type</u> : object, function, array, class, Set, Map.
### Strings
1.  Strings can be primitive and object based in Js.

> [!NOTE]
> 1. [What is Method?](https://chat.mistral.ai/chat/e70a353e-9a9f-4e54-b439-1158dba2b587) : Methods are functions that are associated with an object, and they can be called using the method name followed by parentheses, e.g., `object.methodName()`.

2.  **String Methods.**
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
3. Logical `OR (||)` : a chain of OR `||` returns the first truthy value or the last one if no truthy value is found.
4. Logical `AND(&&)` : returns the first falsy value or the last value if none were found.
5. Short-circuiting : Remember that `&&` stops at the first **falsy** value, while `||` stops at the first **truthy** value.
## Conditional Statements.
6. If-else : In its parenthesis, it takes  true or any truthy values.
7. Ternary operator : ```condition ? run this code : run this code instead.```
## Functions
8. Parameters : Functions may require parameter to work and some doesnt
	1. <u>No parameter</u> : Some Functions doesnt require any parameter to work. `Math.random()`
	2. <u>Optional Parameters</u> : If no parameters are provided to function, it uses some default parameter. `function arr (name) {name.join ()}` name.join will use comma by default. You can use `" "` as an optional parameter and the functions would still work.
	3. <u>Default Parameters</u> : We can specify default value for a given parameter using the assignment operator. `(name = 'hamim')` 
9. <u>Anonymous function</u> : Function without a name, and its a function expression.
10. Variables declared globally can be accessed anywhere however when declared inside a function , it is accessible only inside the function.
11. If there is a global variable and we again declare a local variable with the same name using `let` then the local variable is accessed.
12. Similarly we can change the value of global variable inside function without declaring and the value of the global will be changed.
13. Return keyword can terminate and return the value where function is called.
14. <u>Arrow function</u> : It is similar to function expression but it doesnt have any function keyword.
## Arrays
15. An Array is an ordered collection of items (Strings, numbers, or other things).
16. Array can be created using array literal `const arr = []` or using `new Array()` constructor.
17. *Array is Basically an Object* suitable to store values in order.
18. ## **Basic Array Methods** : 
	1. .length : it is an property not a method, however it returns length of an array.
	2. .toString()
