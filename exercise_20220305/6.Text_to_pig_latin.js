class Translator {
  constructor(textToBeTranslated, transaleMethod) {
    this.textToBeTranslated = textToBeTranslated;
    this.transaleMethod = transaleMethod;
  }
  Translate() {
    return this.transaleMethod(this.textToBeTranslated);
  }
}
class Transalions {
  ToPigLatin(text) {
    let translatedText = text.split(' ');
    let newTextToPigLatin = [];
    translatedText.forEach((e) => {
      let newText = e.split('');
      let oneLetter = newText.shift();
      let newWordToPigLatin = newText.join('') + oneLetter + 'ay'; // return word after modification
      newTextToPigLatin.push(newWordToPigLatin);
    });
    newTextToPigLatin = newTextToPigLatin.join(' ');
    return newTextToPigLatin;
  }
  ReverseToPigLatin(text) {
    let translatedText = text.split(' ');
    let reversedTextToPigLatin = [];
    translatedText.forEach((e) => {
      let newText = e.split(''); // usuwam 2 ostatnie znaki
      newText.pop();
      newText.pop(); // biorę 3 ostatni znak by przesunąć na początek
      let oneLetter = newText.pop();
      let wordReverseFromPigLatin = oneLetter + newText.join(''); // return word after modification
      reversedTextToPigLatin.push(wordReverseFromPigLatin);
    });
    reversedTextToPigLatin = reversedTextToPigLatin.join(' '); // return word after modification
    return reversedTextToPigLatin;
  }
}

let Translations = new Transalions();

let translatorToPigLatin = new Translator(
  'The quick brown fox',
  Translations.ToPigLatin
);
// let translationResult = translatorToPigLatin.Translate();
console.log(translatorToPigLatin.Translate());

let reverseTranslatorToPigLatin = new Translator(
  translatorToPigLatin.Translate(),
  Translations.ReverseToPigLatin
);
// let reverseResult = reverseTranslatorToPigLatin.Translate();
console.log(reverseTranslatorToPigLatin.Translate());
