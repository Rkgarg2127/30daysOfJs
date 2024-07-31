//Activity 1:-
//TAsk 1:- USe template literals to create a string that includes variable for oerson name and age and log it
let personName="Ram kinkar";
let personAge="19";
let personDesc=`Name: ${personName} Age:${personAge}`;
console.log((personDesc));

//Task2 : Create a multi line string using template literals and log ot to the console
console.log();
let multiLineString=`my self Ram 
i study in NIt Kurukshetra`;
console.log(multiLineString);


// Activity 2:
// TAsk 3: USe array destructing to extract the first and second elements from an array of numbers and log the result
console.log();
const numbers = [10, 20, 30, 40, 50];
// Using array destructuring to extract the first and second elements
const [first, second] = numbers;
// Logging the result
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`); 

//Task 4: Use object destucting to extract the title and author from a book object and log them to console
console.log();
var book={
    title:"30DaysOfJS", 
    noOfPages:30,
    author:"OCD",
    year:2024,
    
};
const {title ,author}= book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

//Activity 3:
//Task 5: Use the spread operator to create a new array that includes all element an existing array plus additional elements
console.log();
const originalArray=[1,2,3,4,5,6];
const newArray=[...originalArray,7,8,9];
console.log("New Array:"+newArray);

//Task 6: USe the rest operator in a function to accept an arbitary number of arguments , sum them and return the result
const sumNum= function(...args){
    let total =0;
    for( let i in args){
        total=total+parseInt(i);
    }
    return total;
}
console.log(`Sum:${sumNum(1,2,3,4,5,6,7,8,4)}`);

//Activity 4:
//TAsk 7: Write a function that takes two parameter and returns their product with the second arguments having a default value
const mult=function(num1,num2=1){
    return num1*num2;
}
console.log(`\nusing mult operation with only one argument`)
console.log(`mult(4)=${mult(4)}`);

