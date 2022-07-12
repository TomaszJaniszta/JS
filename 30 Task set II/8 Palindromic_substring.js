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
  checkText(textToCheck) {
    let palindromicSubstring = [ ];

    let extendPalindromicSubstring = (text, left, right) => {
      while (text[left - 1] && text[right + 1] && text[left - 1] === text[right + 1]) {
        right = right + 1;
        left = left - 1;
      };
      let temp = text.slice(left, right + 1);
      if (palindromicSubstring.length < temp.length) { palindromicSubstring = temp };
    };

    let startChecking = (someWord) => {
      let text = someWord.split('');
      for (let i = 0; i < text.length; i++) {
        let right = Number(i);
        let left = Number(i); // for odd palindromic
        extendPalindromicSubstring(text, left, right);
        right = Number(i);
        left = Number(i) -1; // for even palindromic
        extendPalindromicSubstring(text, left, right);
      };
    };

    startChecking(textToCheck);
    return palindromicSubstring.join('');
  };
};

let checkPalindrom = new PalindromMethod();

let newPalindrom = new PalindromClass('karakis', checkPalindrom.checkText);
console.log(newPalindrom.writePalindromicSubstring());

newPalindrom = new PalindromClass('baerren', checkPalindrom.checkText);
console.log(newPalindrom.writePalindromicSubstring());

newPalindrom = new PalindromClass('kajak', checkPalindrom.checkText);
console.log(newPalindrom.writePalindromicSubstring());

newPalindrom = new PalindromClass('inni', checkPalindrom.checkText);
console.log(newPalindrom.writePalindromicSubstring());

newPalindrom = new PalindromClass('sedes', checkPalindrom.checkText);
console.log(newPalindrom.writePalindromicSubstring());