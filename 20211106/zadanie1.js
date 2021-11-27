// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. 			
// 	Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.		
// 1) Utwórz iffe, który zwraca obiekt z polami: funkcja setValue(), funkcja showValue() i funkcja reverseValue().  Wywoływanie funkcji albo rejestruje wartość, albo odwraca ją w obiekcie. Jeżeli wartość nie została jeszcze podana lub jest pusta funkcja showValue  ma zwrócić informację o tym.			
         
//              var input = 'kot';		
		
// let iife = (function () {		
		
// function showValue(input) {		
//         if(showValue.arguments.length == 0 || input == undefined || input == ''){		
//         return ('true')};}		
//         		
// function setValue(input) {		
//         if(arguments.length == 0 || input == undefined || input == ''){		
//         return ('true')} else { return input;};}		
		
// function reverseValue(input){		
//         if(typeof input === 'number'){		
//                 input = input*(-1);		
//                 return ('Reversed number is = ' + input)		
//                 } else {		
//                 if(typeof input === 'string' && input !== 'undefined'){		
//                 return ('Reversed string is = ' + (input.split('').reverse().join('')));		
//                 };  // odwraca string		
//                 };		
//             };		
		
//     return {		
//     showValue,		
//     setValue,		
//     reverseValue,		
//            };		
//     		
// })(); // koniec IIFE		
		
// if (iife.showValue(input) == 'true'){console.log('No value in function!')};		
// if (iife.setValue(input) !== 'true'){console.log('Value is = ' + iife.setValue(input));};		
// if (iife.setValue(input) !== 'true'){console.log(iife.reverseValue(input));};		

//************************************************************** */

             var input = '';		
		
let iife = (function (input) {		
		
function showValue(input) {		
        if(showValue.arguments.length == 0 || input == undefined || input == ''){		
        return ('true')};}		
        		
function setValue(input) {		
        if(arguments.length == 0 || input == undefined || input == ''){		
        return ('true')} else { return input;};}		
		
function reverseValue(input){		
        if(typeof input === 'number'){		
                input = input*(-1);		
                return ('Reversed number is = ' + input)		
                } else {		
                if(typeof input === 'string' && input !== 'undefined'){		
                return ('Reversed string is = ' + (input.split('').reverse().join('')));		
                };  // odwraca string		
                };		
            };		
		
    return {		
    showValue,		
    setValue,		
    reverseValue,		
           };		
    		
})(input); // koniec IIFE		
		
if (iife.showValue(input) == 'true'){console.log('No value in function!')};		
console.log('Value is = ' + iife.setValue(input));	
console.log(iife.reverseValue(input));	