// Activity 1: For Loop

// Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log();

// Print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
var i = 1;
let sum = 0;
while (i <= 10) {
    sum += i++;
}
console.log("Sum of first 10 natural numbers: " + sum);
//output:- Sum of first 10 natural numbers: 55

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
var num = 11
while (--num) {
    console.log(num);
}
console.log();
//Output:-
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("a program to print numbers from 1 to 5 using a do...while loop.")
var i = 1;
do {
    console.log(i)
}
while (i++ < 5)
console.log()
// output:-
// 1
// 2
// 3
// 4
// 5

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
console.log("a program to calculate the factorial of a number using a do...while loop.")
var i = 6;
var num = 1;
do {
    num *= i;
}
while (--i)
console.log(`6! = ${num}`);
console.log();
// output:-6! = 720


// Activity 4: Nested Loops 

// Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = "*"; i.length <= 5; i += '*') {
    console.log(i);
}
console.log();


// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    else {
        console.log(i);
    }
}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 7) break; // break keyword will exit the loop when i==7
}