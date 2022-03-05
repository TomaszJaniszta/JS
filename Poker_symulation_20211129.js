// creating a deck of cards // tworzenie talii 52 kart
console.log("Deck of cards  (Ace = 1,  Jack = 11, Queen=12, King=13): ");
let deck = [];

                     // kiery, karo, trefl, pik
const colors = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; 
const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Ace = 1,  Jack = 11, Queen=12, King=13

for (let color in colors){
  for (let figure in figures){
    deck.push(figures[figure] + " " + colors[color]);
  };
};
console.log(deck);

console.log("Deck of cards after shuffle:");

// cards shuffling // tasowanie kart
function Shuffle(d){
  for (var i = 0; i < d.length; i++){
    let j = Math.floor(Math.random() * d.length);
        let tmp = d[i]; // ex. 5
    d[i] = d[j]; // 5 = 7
    d[j] = tmp; // 7 = 5
  };
  return d;
};
console.log(Shuffle(deck));

//5 card hand // rozdanie 5 kart
let hand = deck.splice(0, 5);
// below line to uncoment for test and egzam purpose
 hand = ['1 Spades', '11 Spades', '12 Spades', '13 Spades', '10 Spades']; 
console.log("The cards in hand in this game: " + hand);
let color = hand[0].split(' ')[1];

// do we got the color? // czy mamy kolor? // true / false
function colorFunction(hand1){
    if ( hand1[0].split(' ')[1] == hand1[1].split(' ')[1]&&
         hand1[1].split(' ')[1] == hand1[2].split(' ')[1]&&
         hand1[2].split(' ')[1] == hand1[3].split(' ')[1]&&
         hand1[3].split(' ')[1] == hand1[4].split(' ')[1] ){
             return true
         } else {
            return false
            };
};

// figures // figury // taking only numbers
let resultFigures = [parseFloat(hand[0]), parseFloat(hand[1]), parseFloat(hand[2]), parseFloat(hand[3]), parseFloat(hand[4])];
// sorting, ascending order
resultFigures.sort(function(a, b){return a-b});  

// the best combination is 
if( resultFigures[0]==1 && resultFigures[1]==10 &&  resultFigures[2]==11 &&
    resultFigures[3]==12 && resultFigures[4]==13 && colorFunction(hand) == true)
    { console.log("You have the: Royal flush Straight - flush from Ten to Ace!. " +  "Color: " + color ) 
} else if 
  ( resultFigures[0]!==1 && resultFigures[0]==resultFigures[1]-1 &&  resultFigures[1]==resultFigures[2]-1 &&
    resultFigures[2]== resultFigures[3]-1 && resultFigures[3]== resultFigures[4]-1 && colorFunction(hand) == true)
    { console.log("You have the: Straight flush: Straight of the same color!. " +  "Color: " +  color ) 
} else if 
  ( resultFigures[0] == resultFigures[1] &&  resultFigures[1] == resultFigures[2] &&
    resultFigures[2] ==  resultFigures[3]  ||  resultFigures[1] == resultFigures[2] &&
    resultFigures[2] == resultFigures[3] &&  resultFigures[3] ==  resultFigures[4]  )
    { console.log("You have the: Four of a kind - four cards of the same value.");
} else if 
  ( resultFigures[0] == resultFigures[1] &&  resultFigures[1] == resultFigures[2] &&
    resultFigures[3] == resultFigures[4] ||  resultFigures[0] == resultFigures[1] &&
    resultFigures[2] == resultFigures[3] && resultFigures[3] == resultFigures[4] )
    { console.log("You have the: Full house - combination of three of a kind, and a pair.");
} else if 
  ( colorFunction(hand) == true )
    { console.log("You have the: Flush - 5 cards of the same color. " +  "Color: " +  color ) 
} else if 
  ( resultFigures[0] == resultFigures[1]-1 &&  resultFigures[1] == resultFigures[2]-1 &&
    resultFigures[2] == resultFigures[3]-1 && resultFigures[3] == resultFigures[4]-1 )
    { console.log("You have the: Straight - sequence of 5 cards in increasing value (Ace can precede 2 and follow up King)." ) 
} else if 
  ( resultFigures[0] == 1 && resultFigures[1]==10 && resultFigures[2]== 11 && resultFigures[3]==12 && resultFigures[4]==13 )
    { console.log("You have the: Straight - sequence of 5 cards in increasing value (Ace can precede 2 and follow up King)." ) 
} else if 
  ( (resultFigures[0] == resultFigures[1] &&  resultFigures[1] == resultFigures[2]) || (resultFigures[4] == resultFigures[3] &&
     resultFigures[3] == resultFigures[2]) || (resultFigures[1] == resultFigures[2] &&  resultFigures[2] == resultFigures[3]) )
    { console.log("You have the: Three of a kind - three cards with the same value." ) 
} else if 
  ( (resultFigures[0] == resultFigures[1] &&  resultFigures[2] == resultFigures[3]) || (resultFigures[0] == resultFigures[1] &&
     resultFigures[3] == resultFigures[4]) || (resultFigures[1] == resultFigures[2] &&  resultFigures[3] == resultFigures[4]) )
    { console.log("You have the: Two pairs - two sets of two cards with the same value." ) 
} else if 
  ( resultFigures[0] == resultFigures[1] || resultFigures[1] == resultFigures[2] ||
    resultFigures[2] == resultFigures[3] || resultFigures[3] == resultFigures[4] )
    { console.log("You have the: Pair - two cards with the same value." ) 
} else if 
    ( resultFigures[0] == 1)
    { console.log("Your high card is Ace." ) 
} else if 
    ( resultFigures[4] > 1)
    { console.log("Your high card is " +   resultFigures[4]) 
} else {
      console.log('Uknown error!') };
