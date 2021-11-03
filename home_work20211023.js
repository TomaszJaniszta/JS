//1)      Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
// console.log('Task 1. Array is = ' + array1)

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
//2)      Create a function that returns sum of first and last elements of given array.

let arr = [1, 6, 23, 8, 4, 8, 3, 7]

function sumOfFirstAndLastElementOfAnArray(array) {
return array[0] + array[array.length - 1]
}

console.log(sumOfFirstAndLastElementOfAnArray(arr))

//----------------------------------------------------------------------------------------
// //3)      Create a function that takes a number and return factorial of that number.

// function factorial(nrx) {
//   let factorial1 = 1
//   let nrx2 = nrx // keep the original number
//   while (nrx >= 1) {
//     factorial1 = factorial1 * nrx--
//   }
//   console.log('Task 3. Factorial of the ' + nrx2 + ' = ' + factorial1) //with oribinal number
// }

// factorial(6)
//----------------------------------------------------------------------------------------
//4) Create a function that returns given array in reverse order. // no build in functions J

// console.log(
//   'Task 4. Create a function that returns given array in reverse order. // no build in functions',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
// console.log(array1)
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
//5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// console.log(
//   'Task 5. Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f] ',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
// console.log(array1)
// showNewPattern = (array) => {
//   let array2 = []
//   for (let i = 0; i < array.length; i += 2) {
//     array2.push(array[i] + array[i + 1])
//   }
//   console.log('Show new pattern: ' + array2)
// }

// showNewPattern(array1) // 7, 31, 12, 10
//----------------------------------------------------------------------------------------
//6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// console.log(
//   'Task 6. For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3]
// console.log(array1)

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
//7) Create a function the return one random element from given array. // use random function

// console.log(
//   'Task 7. Create a function the return one random element from given array. // use random function ',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
// console.log(array1)
// RandomNumber = (array) => {
//   return array[Math.floor(Math.random() * array.length)]
// }
// console.log(RandomNumber(array1))

//----------------------------------------------------------------------------------------
//8) Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

// console.log(
//   'Task 8. Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one. ',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
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
// //9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.
// console.log(
//   'Task 9. Create a function that takes given array. Takes random element, removes it and pushes it to result arrays. This takes place as long as there are elements in source array.',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
// console.log(array1)
// randomAndRemove = (array) => {
//   array2 = []
//   while (array.length > 0) {
//     let randomNumber = Math.floor(Math.random() * array.length) // random index number
//     // let newnumber = parseInt(array.splice(randomNumber, 1))
//     array2.push(
//       parseInt(array.splice(randomNumber, 1)),
//       //  newnumber
//     ) // zabiera z array i dodaje do array2. When you omit the removeCount parameter, splice() will remove all elements from the start index to the end of the array.
//   }
//   console.log(array2)
//   //return array2
// }
// randomAndRemove(array1)
// //console.log(randomAndRemove(array1))

//----------------------------------------------------------------------------------------
//10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// console.log(
//   'Task 10. Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)',
// )
// let array1 = [1, 6, 23, 8, 4, 8, 3, 7]
// console.log(array1)

// randomSubbAdd = (array) => {
//   //start funkcji
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
//11) Create a function that will return the current day name in Polish.
// console.log(
//   'Task11.Create a function that will return the current day name in Polish.',
// )
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
//12) Create a function that tells us how many days till Friday J
// console.log('Task12. Create a function that tells us how many days till Friday')

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
//13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.
// console.log(
//   'Task13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.',
// )

// function calc(a, b) {
//   let array = []
//   array.push(a + b, a - b, a * b, a / b)
//   console.log('a+b, a-b, a*b, a/b')
//   console.log('Results: ' + array)
// }

// calc(5, 5)
