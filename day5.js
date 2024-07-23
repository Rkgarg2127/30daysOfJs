// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}
// Example usage:
checkEvenOdd(4); //  even.
checkEvenOdd(7); //  odd.


// • Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
    return number * number;
}
// Example usage:
var result1 = calculateSquare(5);
console.log(result1); // 25


// Task 3: Write a function expression to find maximum of two numbers
const findMax = function(num1, num2) {
    return (num1 > num2) ? num1 : num2;
};
// Example usage:
const max1 = findMax(10, 20);
console.log(max1); // 20


// Task 4: Write a function expression to concatenate two strings and retun the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
// Example usage:
const result = concatenateStrings('Hello, ', 'world!');
console.log(result); // Hello, world!


// Task 5: Wite an arrow function to calculate sum of two numbers
const calculateSum = (a, b) => a + b;
// Example usage:
const sum = calculateSum(5, 7);
console.log(sum); // 12


// Task 6: Write an arrow function to check if string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
// Example usage:
const result4 = containsCharacter('hello', 'e');
var result2 = containsCharacter('hello', 'a');
console.log(result2); // false


// task:7 Write a function that takes two numbers and return their product. also use default parameter
function multiplyNumbers(a, b = 1) {
    return a * b;
}
// Example usage:
var result1 = multiplyNumbers(5, 3);
console.log(result1); // 15
var result2 = multiplyNumbers(7);
console.log(result2); // 7 (since the default value for b is 1)


// write a function that takes name and age of person and returns greeting. also use default parameter for age
function greet(name, age = 0) {
    let ageMessage = age !== 0 ? ` You are ${age} years old.` : '';
    return `Hello, ${name}!${ageMessage}`;
  }

  // Example usage:
  console.log(greet("Alice", 30)); // Output: Hello, Alice! You are 30 years old.
  console.log(greet("Bob"));      // Output: Hello, Bob!
  