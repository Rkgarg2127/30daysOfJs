// Activity 1: Assignment Operators
// • Task 1: Write a program to add two numbers log the result to console
// • Task 2: Write a program to subtract two numbers log the result to console
// • Task 3: Write a program to add multiply numbers log the result to console
// • Task 4: Write a program to add divide numbers log the result to console
// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let a =100 ,b=5;
let add=a+b;
let sub=a-b;
let mult=a*b;
let div=a/b;
let rem=a%b;

console.log("addition:"+add);
console.log("subtraction:"+sub);
console.log("multiplication:"+mult);
console.log("division:"+div);
console.log("remainder:"+rem);


// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let c=10;
console.log("c:"+c);
c+=5;
console.log("c+=:"+c);
c-=10;
console.log("c-= :"+c);


// Activity 3: Comparison Operators
let num1=20,num2=15;
// Task 8: Compare using > and <
console.log(`${num1} > ${num2}:`, num1 > num2);
console.log(`${num1} < ${num2}:`, num1 < num2);


// Task 9: Compare using >= and <=
console.log(`${num1} >= ${num2}:`, num1 >= num2);
console.log(`${num1} <= ${num2}:`, num1 <= num2);

num2="20";
// Task 10: Compare using == and ===
console.log(`${num1} == ${num2}:`, num1 == num2);
console.log(`${num1} === ${num2}:`, num1 === num2);


// Activity 4: Logical Operators
// Task 11: Using the && (AND) operator
console.log("Task 11: AND Operator");
console.log(`true && true => ${true && true}`);    // true && true => true
console.log(`true && false => ${true && false}`);  // true && false => false
console.log(`false && true => ${false && true}`);  // false && true => false
console.log(`false && false => ${false && false}`);// false && false => false

// Task 12: Using the || (OR) operator
console.log("\nTask 12: OR Operator");
console.log(`true || true => ${true || true}`);    // true || true => true
console.log(`true || false => ${true || false}`);  // true || false => true
console.log(`false || true => ${false || true}`);  // false || true => true
console.log(`false || false => ${false || false}`);// false || false => false

// Task 13: Using the ! (NOT) operator
console.log("\nTask 13: NOT Operator");
console.log(`!true => ${!true}`);  // !true => false
console.log(`!false => ${!false}`);// !false => true


// Activity 5: Ternary Operator
let number = 5;

let result = (number > 0) ? "positive" : (number < 0) ? "negative" : "zero";

console.log(`The number ${number} is ${result}.`);
