// console.log('Task 10');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// function showSum(array) {
//   // showSum = (array) => {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
//   }
//   console.log('Sum of all elements from array = ' + sum)
// }
// showSum(array1)
//----------------------------------------------------------------------------------------
// console.log('Task 11');
// let arr = [1, 6, 23, 8, 4, 8, 3, 7];
// function sumOfFirstAndLastElementOfAnArray(array) {
//  return array[0] + array[array.length - 1]
// }
// console.log(sumOfFirstAndLastElementOfAnArray(arr))
//----------------------------------------------------------------------------------------
// console.log('Task 12');
// function factorial(nrx) {
//   let factorial1 = 1
//   let nrx2 = nrx // keep the original number
//   while (nrx >= 1) {
//     factorial1 = factorial1 * nrx--
//   }
//   console.log('Factorial of the ' + nrx2 + ' = ' + factorial1);
// }
// factorial(6)
//----------------------------------------------------------------------------------------
// console.log('Task 13');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(array1);
// function showTheReversal(array) {
//   let array2 = []
//   for (let i = array.length - 1; i >= 0; i--) {
//     // pętla dodaje liczby z array od końca do array2
//     array2.push(array[i])
//   }
//   console.log('Show the reversal: ')
//   console.log(array2)
// }
// showTheReversal(array1)
//----------------------------------------------------------------------------------------
// console.log('Task 14');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(array1);
// showNewPattern = (array) => {
//   let array2 = []
//   for (let i = 0; i < array.length; i += 2) {
//     array2.push(array[i] + array[i + 1])
//   }
//   console.log('Show new pattern: ' + array2)
// };
// showNewPattern(array1); // 7, 31, 12, 10
//----------------------------------------------------------------------------------------
// console.log('Task 15');
// let array1 = [1, 6, 23, 8, 4, 8, 3];
// console.log(array1);
// showNewPattern = (array) => {
//   let array2 = []
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 0 && i < array.length - 1) {
//       let sum = array[i] + array[i + 1]
//       array2.push(sum)
//     } else if (i == array.length - 1) {
//       let sum = array[i] + array[i]
//       array2.push(sum)
//     }
//   }
//   console.log('Show new pattern: ' + array2)
// }
// showNewPattern(array1) // 7, 31, 12, 6
//----------------------------------------------------------------------------------------
// console.log('Task 16');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(array1);
//   return array[Math.floor(Math.random() * array.length)]
// }
// console.log(RandomNumber(array1))
//----------------------------------------------------------------------------------------
// console.log('Task 17');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// let attempts1 = 5
// console.log(array1 + ' attempts = ' + attempts1)
// function randomAndLowest(array, attempts) {
//   var lowest
//   let randomNumber
//   let attempts2 = attempts //bu ustawić ilość prób tylko dla funkcji
//   for (attempts2; attempts2 > 0; attempts2--) {
//     randomNumber = array[Math.floor(Math.random() * array.length)]
//     if (attempts == attempts2) {
//       lowest = randomNumber
//     } else {
//       if (lowest > randomNumber) {
//         lowest = randomNumber
//       }
//     }
//     console.log('Random number = ' + randomNumber)
//   }
//   console.log('Lowest from  random numbers = ' + lowest)
// }
// randomAndLowest(array1, attempts1)
//----------------------------------------------------------------------------------------
// console.log('Task 18');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(array1);
// randomAndRemove = (array) => {
//   array2 = []
//   while (array.length > 0) {
//     let randomNumber = Math.floor(Math.random() * array.length) // random index number
//     array2.push( parseInt(array.splice(randomNumber, 1)) );
//   }
//   console.log(array2)
//   //return array2
// }
// randomAndRemove(array1)
// console.log(randomAndRemove(array1))
//----------------------------------------------------------------------------------------
// console.log('Task 19');
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(array1);
// randomSubbAdd = (array) => {
//   let operationResult = array[0]
//   let i = 1
//   while (i < array.length) {
//     let Roperation = Math.random()
//     //console.log(Roperation)
//     if ([1.5 - Roperation] > 1) {
//       // problem z liczbą dziesiętną, stąd 1,5
//       //console.log('substraction (odejmowanie)')
//       console.log(operationResult + ' - ' + array[i] + ' =')
//       operationResult = operationResult - array[i]
//     } else {
//       //console.log('addition (dodawanie)')
//       console.log(operationResult + ' + ' + array[i] + ' =')
//       operationResult = operationResult + array[i]
//     }
//     i += 1
//   }
//   console.log('= ' + operationResult)
// }
// randomSubbAdd(array1) // function run
//----------------------------------------------------------------------------------------
// console.log('Task 20');
// function myDate() {
//   let weekdays = [
//     'Niedziela',
//     'Poniedziałek',
//     'Wtorek',
//     'Środa',
//     'Czwartek',
//     'Piątek',
//     'Sobota',
//   ]
//   console.log(weekdays[new Date().getDay()]) //getDay() is an date method in JavaScript, which is used to return the day of the week (Name/number of the day in a week between 0 to 6) for the specified date. New Date = function.
// }
// myDate()
//----------------------------------------------------------------------------------------
// console.log('Task 21');
// function TillFriday() {
//   let daysTillFriday = new Date().getDay()
//   if (daysTillFriday == 6) {
//     daysTillFriday = 6
//   } else {
//     daysTillFriday = 5 - daysTillFriday
//   }
//   console.log('Numbers of days till Friday = ' + daysTillFriday)
// }
// console.log(TillFriday())
//----------------------------------------------------------------------------------------
console.log('Task 22');
function calc(a, b) {
  let array = []
  array.push(a + b, a - b, a * b, a / b)
  console.log('a+b, a-b, a*b, a/b')
  console.log('Results: ' + array)
}
calc(5, 5);