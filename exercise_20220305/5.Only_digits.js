// 5)      Write a code that takes a number/string and returns a list of its digits. So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].
var str = "A243b";
var res = str.replace(/\D/g, "");
// \D matches a character that is not a numerical digit. So any non digit is replaced by an empty string. The result is only the digits in a string.
// The g at the end of the regular expression literal is for "global" meaning that it replaces all matches, and not just the first.
// alert(res); 
console.log(res); // 243
console.log(res.split('')); // ["2","4","3"]
console.log(res.split('').map((i) => { return Number(i); })); // [2,4,3]

// przykład 2.
// function splitToDigit(n) {
//     return [...n + ''].map(Number)
// }

// console.log(splitToDigit(100)) // [1,0,0]