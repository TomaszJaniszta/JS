// console.log('Task 1');
// let years = [1974, 1900, 1985, 2000];
// let year;
// for (let i = 0; i < years.length; i++) {
//     year = years[i];
//     if ((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0) {
//         console.log("Leap year from array = " + year);
//     }
// }
//-----------------------------------------------------------------------------------------------------
// console.log('Task 2');
// let n = 7;
// let summary = 1
// while (n > 0) {
//     summary *= n--;
// }
// console.log("Factorial of 7 = " + summary)
//-----------------------------------------------------------------------------------------------------
console.log('Task 3');
let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
let sum = 0
for (let i = 0; i < valueArray.length; i++) {
  if (valueArray[i] % 2 != 0) {
    0
    sum = sum + valueArray[i]
  }
}
console.log('Sum of the odd items ' + sum)
//-----------------------------------------------------------------------------------------------------
// console.log('Task 4');
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let i = 0;
// let lowest = valueArray[i];
// let highest = valueArray[i];
// for (i; i < valueArray.length; i++) {
//     if (valueArray[i] < lowest) {
//         lowest = valueArray[i];
//} else if (valueArray[i] > highest) {
//         highest = valueArray[i];
//     }
// }
// console.log("Lowest value =" + lowest + ". Highest value =" + highest + ".");
//-----------------------------------------------------------------------------------------------------
// console.log('Task 5');
// let valueArray = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// let i = 0;
// let lgth = valueArray[i].length;
// let longest = valueArray[i]
// for (i; i < valueArray.length; i++) {
//     if (valueArray[i].length > lgth) {
//         lgth = valueArray[i].length, longest = valueArray[i];
//     }
// }
// console.log("Longest string from array = " + longest);
//-----------------------------------------------------------------------------------------------------
// console.log('Task 6');
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let i = 0;
// let highest = valueArray[i];
// for (i; i < valueArray.length; i++) {
//     if (valueArray[i] > highest) {
//         highest = valueArray[i];
//     }
// }
// console.log("Highest value from array: " + valueArray + "=" + highest);
// console.log("Numbers of indexes for the highest value :");
// for (let i = 0; i < valueArray.length; i++) {
//     if (valueArray[i] === highest) {
//         console.log(i);
//     }
// }
//-----------------------------------------------------------------------------------------------------
// console.log('Task 7');
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// let i;
// let evenNumbersCount = 0
// for (i = 0; i < valueArray.length; i++) {
//     if (valueArray[i] % 2 == 0) {
//         sum = sum + valueArray[i];
//     }
// }
// for (let i = 0; i < valueArray.length; i++) {
//     if (valueArray[i] % 2 == 0) {
//         evenNumbersCount = evenNumbersCount + 1;
//     }
// }
// console.log("Average of the even numbers = " + sum / evenNumbersCount);
//-----------------------------------------------------------------------------------------------------
// console.log('Task 8');
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// let even_indexes_count = 0
// for (let i = 0; i < valueArray.length; i++) {
//     if (i % 2 == 0 && i !== 0) {
//         even_indexes_count = even_indexes_count + 1
//     }
// }
// for (let i = 0; i < valueArray.length; i++) {
//     if (i % 2 == 0 && i !== 0) {
//         sum = sum + valueArray[i];
//     }
// }
// console.log("Average value of items on the even indexes " + sum / even_indexes_count);
//-----------------------------------------------------------------------------------------------------
// console.log('Task 9');
// let valueArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
// let sum = 0
// for (let i = 0; i < valueArray.length; i++) {
//   if (valueArray[i] % 2 == 0) {
//     sum = sum + valueArray[i]
//   } else {
//     sum = sum - valueArray[i]
//   }
// }
// console.log(
//   'Sum of even and substract off odd items from array ' +
//     valueArray +
//     ' = ' +
//     sum,
// )
//-------------------------------------------------------------------------------------------------