let numberTest = 100;
function reverseNumber(num){
  return String(num).split("").reverse().join("")
}
let extendedNumber = parseFloat(numberTest + reverseNumber(numberTest)) ;
console.log("Extended number '100' by its reversed value is: " +  extendedNumber);
