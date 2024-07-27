//Activity 1: 
//Task 1: Create an array of numbers from 1 to 5 and log the array to console
var arr1=[1,2,3,4,5];
console.log(arr1);

//Task2: Acess the first and last elements of the array and log them to console
console.log(`First element arr[${0}]: `+arr1[0]);
console.log(`First element arr[${arr1.length-1}]: `+arr1[arr1.length-1]);


//Activity 2:
//Task 3: Use the push method to add an elemnt at last of array and log the result
arr1.push(6);
console.log("Array after pushing 6 at last of arry:"+arr1);

//Task 4: Use the pop method to remove the last  element of array and log the result
arr1.pop();
console.log("Array after removing 6 from last of arry:"+arr1);

//Task 5: Use the unshift method to add an elemnt at start of array and log the result
arr1.unshift(6);
console.log("Array after adding 6 at start of arry:"+arr1);

//Task 6: Use the shift method to remove the first element of array and log the result
arr1.shift();
console.log("Array after removing first elemnent of arry:"+arr1);


//ACtivity 4:
//Task 7: Use the map method to create a new array where each element is double of initial array
var arr2= arr1.map((x)=>x*2);
console.log(`New array where all the elment are double of previous array: `+arr2);

//Task 8: Use the filter method to create a new array only even even elements
var arr2= arr1.filter((x)=>x%2==0);
console.log(`New array with only even elements: ` +arr2);


//Task 9: Use the reduce method to calculate sum of all the elemnts of the array
summ= arr1.reduce((total,num)=>total+num ,0);
console.log(`Sum of all elements of array is ${summ}`);


//Activity 4:
//Task 10: Use a for loop to iterate over the array and log the result to console
console.log("Displaying all elements with for loop");
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

//Task 11: Use a forEach method and log the result to console
console.log("Displaying all elements with forEach method");
arr1.forEach((num)=>{console.log(num)});


// ACtivity 5: Multi DIMensional array
//Task 12: Create a two dimensional matrix and log the entire result to console
var arr3=[[1,2,3],[4,5,6],[7,8]];
console.log(arr3);

//Task 13: Acess and log a specific elemnt of array to console
console.log(arr3[0][1]);