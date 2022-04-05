class PalindromClass {
     constructor(textToBeChecked, palindromicMethod) {
       this.textToBeChecked = textToBeChecked;
       this.palindromicMethod = palindromicMethod;
     }
     writePalindromicSubstring() {
       return this.palindromicMethod(this.textToBeChecked);
     }
   }
   
   class PalindromMethod {
     checkText(text) {
       let testPalindromicText = [];
       let textArray = text.split('');
       for (let i = 1; i < textArray.length; i++) {
         if (
           textArray[i - 1] === textArray[i + 1] &&
           textArray[i - 2] === textArray[i + 2]
         ) {
           testPalindromicText = [
             textArray[i - 2],
             textArray[i - 1],
             textArray[i],
             textArray[i + 1],
             textArray[i + 2],
           ];
           return testPalindromicText.join('');
         }
   
         if (
           textArray[i - 1] === textArray[i + 2] &&
           textArray[i] === textArray[i + 1]
         ) {
           testPalindromicText = [
             textArray[i - 1],
             textArray[i],
             textArray[i + 1],
             textArray[i + 2],
           ];
           return testPalindromicText.join('');
         }
   
         if (textArray[i - 1] === textArray[i + 1]) {
           testPalindromicText = [
             textArray[i - 1],
             textArray[i],
             textArray[i + 1],
           ];
           return testPalindromicText.join('');
         }
   
         if (textArray[i - 1] === textArray[i]) {
           testPalindromicText = [textArray[i - 1], textArray[i]];
           return testPalindromicText.join('');
         }
   
       }
     }
   }
   
   let checkPalindrom = new PalindromMethod();
   
   // ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’
   let newPalindrom = new PalindromClass('inniaaa', checkPalindrom.checkText);
   let result = newPalindrom.writePalindromicSubstring();
   
   if (result == undefined) {
     console.log('Palindromic substring not available');
   } else {
     console.log(newPalindrom.writePalindromicSubstring());
   }
   