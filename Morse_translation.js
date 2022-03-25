const morseCode = [
         {english: 'A', morse: '.-'},
         {english: 'B', morse: '-...'},
         {english: 'C', morse: '-.-.'},
         {english: 'D', morse: '-..'},
         {english: 'E', morse: '.'},
         {english: 'F', morse: '..-.'},
         {english: 'G', morse: '--.'},
         {english: 'H', morse: '....'},
         {english: 'I', morse: '..'},
         {english: 'J', morse: '.---'},
         {english: 'K', morse: '-.-'},
         {english: 'L', morse: '.-..'},
         {english: 'M', morse: '--'},
         {english: 'N', morse: '-.'},
         {english: 'O', morse: '---'},
         {english: 'P', morse: '.--.'},
         {english: 'Q', morse: '--.-'},
         {english: 'R', morse: '.-.'},
         {english: 'S', morse: '...'},
         {english: 'T', morse: '-'},
         {english: 'U', morse: '..-'},
         {english: 'W', morse: '.--'},
         {english: 'X', morse: '-..-'},
         {english: 'Y', morse: '-.--'},
         {english: 'Z', morse: '--..'},
         {english: ' ', morse: ' '}
        ];
      
      class Translator {
       constructor(textToBeTranslated, transaleMethod) {
        this.textToBeTranslated = textToBeTranslated;
        this.transaleMethod = transaleMethod;
       }
       Translate() {
        return this.transaleMethod(this.textToBeTranslated);
       }
      }
      
      class Transalions {
       ToMorse(text) {
        text = text.toUpperCase(text).split('');
        let morseArray =[ ];
        text.forEach(element => {morseArray.push(morseCode.find((p) => p.english === element).morse)});
         return morseArray.join(' ');
       };
      
       ReverseMorse(text) {
        text = text.split(' ');
        let normalTextArray =[ ];
        text.forEach(element => {normalTextArray.push(morseCode.find((p) => p.morse === element).english)});
         return normalTextArray.join('');
       };
      };
     
      let Translations = new Transalions();
     
      let translatorToMorse = new Translator(
       'The quick brown bear',
       Translations.ToMorse
      );
    
      console.log(translatorToMorse.Translate());
      
      let reverseFromMorse = new Translator(
       translatorToMorse.Translate(),
       Translations.ReverseMorse
      );
    
      console.log(reverseFromMorse.Translate());