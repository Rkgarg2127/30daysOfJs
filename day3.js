// Day 3: Control Structures
// Tasks/Activities:

// Activity 1: If-Else Statements
//Task 1: Wrir=te a program to check if a number is positive negative or zer0 using if else statement
let a = 10;
if (a > 0) {
    console.log(`The number ${a} is positive`);
}
else if (a < 0) {
    console.log(`The number ${a} is negative`);
}
else {
    console.log(`the number is 0`);
}

// Task 2: Wite a program to check if a person is eligible to votin or not and log the result he console.
let b = 17;
if (b < 18) {
    console.log("You are not eligible vote");
}
else {
    console.log("you can vote");
}


// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 8, num2 = 9, num3 = 4;
if (num1 < num2) {
    if (num2 < num3) {
        console.log(`The biggest number:${num3}`);
    }
    else {
        console.log(`The biggest number:${num2}`);
    }
}
else {
    if (num1 < num3) {
        console.log(`The biggest number:${num3}`);
    }
    else {
        console.log(`The biggest number:${num1}`);
    }
}

// Activity 3: Switch Case
// • Task 4: Writ A program using switch case to determine the day of 
//the week and log the name of week
let day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error");
        break;
}

// : Task 5: Wite a program that uses a switch case to assign a grade (A, B, C, D,F )based on a score and log the grade to the conse the console,
let score = 76;
switch (true) {
    case (score <= 100 && score > 85):
        grade = "A"
        break;

    case (score <= 85 && score > 75):
        grade = "B"
        break;

    case (score <=75 && score > 65):
        grade = "C"
        break;

    case (score <= 65 && score > 40):
        grade = "D"
        break;

    case (score <=40 ):
        grade = "F"
        break;

    default:
        grade="Wrong Input"
}
console.log(`Grade:${grade}`);


// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num=2;
var res= (num%2==0)?"even":"odd";
console.log(`the number ${num} is ${res}`);

// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year =new Date().getFullYear();
var res = (year%400==0)?"":(year%4==0 && year%100!=0)?"":"not";
 console.log(`The year ${year} is ${res} leap year`);