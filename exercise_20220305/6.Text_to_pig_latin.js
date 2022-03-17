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
    static ToPigLatin(text) {
        let translatedText;
        translatedText = text.split(" ").map(x => this.WordToPigLatin(x));
        return translatedText.concat(" ");
    }
    static WordToPigLatin(wordToBeTranslated) {
        let wordModification = () => wordToBeTranslated + 'ay';
        return wordModification
    }
    // static ReverseToPigLatin(text) {
    //     let translatedText;
    //     translatedText = text.split(" ").map(x => this.ReverseWordToPigLatin(x));
    //     return translatedText.concat(" ");
    // }
    // static ReverseWordToPigLatin(wordToBeTranslated) {
    //     // modyfikacje słowa
    //     // return word after modification
    // }
}
let translatorToPigLatin = new Translator('The quick brown fox', Transalions.ToPigLatin);
let translationResult = translatorToPigLatin.Translate();
console.log(translationResult);
// let reverseTranslatorToPigLatin = new Translator(translationResult, Transalions.ReverseToPigLatin);
