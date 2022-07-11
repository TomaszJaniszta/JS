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
    		
})(input);		
		
if (iife.showValue(input) == 'true'){console.log('No value in function!')};		
console.log('Value is = ' + iife.setValue(input));	
console.log(iife.reverseValue(input));	
// if (iife.setValue(input) !== 'true'){console.log('Value is = ' + iife.setValue(input));};		
// if (iife.setValue(input) !== 'true'){console.log(iife.reverseValue(input));};
