//Zadania 2021.10.16 Tomasz Janiszta
//-----------------------------------------------------------------------------------------------------
// console.log("Task 1) From years in array check for leap years[1974, 1900, 1985, 2000]");
// let years = [1974, 1900, 1985, 2000];
// let year;
// for (let i = 0; i < years.length; i++) {
//     year = years[i];
//     if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
//         console.log("Leap year from array = " + year);
//     }
// }
//-----------------------------------------------------------------------------------------------------
// console.log("Task 2) Calculate factorial of 7.");
// let n = 7;
// let summary = 1
// while (n > 0) {
//     summary *= n--;
// }
// console.log("Factorial of 7 = " + summary)
//-----------------------------------------------------------------------------------------------------
// console.log("Task 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]");
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// for (let i = 0; i < valueArray.length; i++) {
//     if (valueArray[i] % 2 != 0) {
//         sum = sum + valueArray[i];
//     }
// }
// console.log("Sum of the odd items " + sum);
//-----------------------------------------------------------------------------------------------------
// console.log("Task 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.");
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let i = 0;
// let lowest = valueArray[i];
// let highest = valueArray[i];
// for (i; i < valueArray.length; i++) {  
//     if (valueArray[i] < lowest) {
//         lowest = valueArray[i];    //     } else if (valueArray[i] > highest) {
//         highest = valueArray[i];
//     }
// }
// console.log("Lowest value =" + lowest + ". Highest value =" + highest + ".");
//-----------------------------------------------------------------------------------------------------
// console.log("Task 5) Choose longest string from the array. [‘Karol’,‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].");
// let valueArray = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// let i = 0;
// let lgth = valueArray[i].length;
// let longest = valueArray[i]
// for (i; i < valueArray.length; i++) {
//     if (valueArray[i].length > lgth) {
//         lgth = valueArray[i].length, longest = valueArray[i];
//     }
// }
// console.log("Longest string from array = " + longest);
//-----------------------------------------------------------------------------------------------------
// console.log("Task 6) Choose all the indexes of the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].");
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let i = 0;
// let highest = valueArray[i];
// for (i; i < valueArray.length; i++) {  
//     if (valueArray[i] > highest) {    
//         highest = valueArray[i];  
//     }
// }
// console.log("Highest value from array: " + valueArray + "=" + highest);
// console.log("Numbers of indexes for the highest value :");
// for (let i = 0; i < valueArray.length; i++) {    
//     if (valueArray[i] === highest) {
//         console.log(i);  
//     }
// }
//-----------------------------------------------------------------------------------------------------
// console.log("Task 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]")
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// let i;
// let evenNumbersCount = 0
// for (i = 0; i < valueArray.length; i++) {  
//     if (valueArray[i] % 2 == 0) {    
//         sum = sum + valueArray[i];  
//     }
// }
// for (let i = 0; i < valueArray.length; i++) {  
//     if (valueArray[i] % 2 == 0) {
//         evenNumbersCount = evenNumbersCount + 1;  
//     }
// }
// console.log("Average of the even numbers = " + sum / evenNumbersCount);
//-----------------------------------------------------------------------------------------------------
// console.log("Task 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]")
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// let even_indexes_count = 0
// for (let i = 0; i < valueArray.length; i++) {  
//     if (i % 2 == 0 && i !== 0) {
//         even_indexes_count = even_indexes_count + 1  
//     }
// }
// for (let i = 0; i < valueArray.length; i++) {  
//     if (i % 2 == 0 && i !== 0) {
//         sum = sum + valueArray[i];  
//     }
// }
// console.log("Average value of items on the even indexes " + sum / even_indexes_count);
//-----------------------------------------------------------------------------------------------------
// console.log("Task 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]")
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// for (let i = 0; i < valueArray.length; i++) {  
//     if (valueArray[i] % 2 == 0) {    
//         sum = sum + valueArray[i];
//     } else {    
//         sum = sum - valueArray[i];
//     }
// }
// console.log("Sum of even and substract off odd items from array " + valueArray + " = " + sum);
//-----------------------------------------------------------------------------------------------------
