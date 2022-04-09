const mapping = {
    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
    "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
    "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
    "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
    "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
    "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
    "Y" : "-.--", "Z" : "--.."
    // ,
    // "0" : "-----",
    // "1" : ".----", "2" : "..---", "3" : "...--",
    // "4" : "....-", "5" : ".....", "6" : "-....",
    // "7" : "--...", "8" : "---..", "9" : "----."
}
    
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
        let array = text.toUpperCase().split("");
        let array2 = array.map(x => {
            if(mapping[x]){ return mapping[x] }
            else { return x }
        });

        return array2.join(" ");
    };
    
    ReverseMorse(text) {
        function getKey (obj, val){
            return Object.keys(obj).find(key => obj[key] === val)
        };

        let array = text.split(' ');
        let array2 = array.map(x=>{
            if(getKey(mapping,x)){
            return getKey(mapping,x)}
            else if(x==""){ return " " }
            else{ return x }
        }); 
        let result = array2.join("").replace(/\s\s+/g, ' ');    
        //   \s\s+    //   \s matches any whitespace character 
        //  g  //  g modifier: global. All matches 
        //  + matches the previous token between one and unlimited times, as many times as possible
        return result;
    }
};
    
let Translations = new Transalions();
         
let translatorToMorse = new Translator(
    'dupa test javascript',
    Translations.ToMorse
);

console.log(translatorToMorse.Translate());
      
let reverseFromMorse = new Translator(
    translatorToMorse.Translate(),
    Translations.ReverseMorse
);

console.log(reverseFromMorse.Translate());