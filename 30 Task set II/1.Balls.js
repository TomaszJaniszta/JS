console.log("Scale riddle. With 8 balls. One of the items will be change to two.");
console.log("Indexes are t be chosen at random. Use comparing of weights only two times.");

let balls = [1, 1, 1, 2, 1, 1, 1, 1];
console.log(balls);

// mapping balls to have index values and weights values together
let ballsObject = balls.map((v, i) => {
  return { value: v, index: i + 0 }; 
});

// taking random balls
let RandomBall1 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall2 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall3 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall4 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall5 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall6 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall7 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 
let RandomBall8 = ballsObject.splice(Math.floor(Math.random() * ballsObject.length), 1); 

console.log("First weighting. Randomly taken 3 and 3 balls. 2 left beside");

//info, Object.values(RandomBall1[0])[1]) // first [0] element, second [0] to take only weight, [1] give index number

//sum of weight first 3 balls
let weight1first3balls = Object.values(RandomBall1[0])[0] + Object.values(RandomBall2[0])[0] + Object.values(RandomBall3[0])[0];
console.log('Weight first 3 balls = ' + weight1first3balls);
//sum of weight second 3 balls
let weight1second3balls = Object.values(RandomBall4[0])[0] + Object.values(RandomBall5[0])[0] + Object.values(RandomBall6[0])[0];
console.log('Weight second 3 balls = ' + weight1second3balls);

// first weighting
let weight1result = weight1first3balls - weight1second3balls 

// first 3 balls heavier
if(weight1result == 1){ 
    console.log('First 3 random balls are heavier. Weighting first and second random ball.');
    console.log('Third random ball left beside.');
    let weight2result = Object.values(RandomBall1[0])[0] - Object.values(RandomBall2[0])[0];
      if(weight2result == 1){
        console.log('The heaviest ball is 1 random ball' + JSON.stringify(RandomBall1))
      };
      if(weight2result == -1){
        console.log('The heaviest ball is 2 random ball' + JSON.stringify(RandomBall2))
      };
      if(weight2result == 0){
        console.log('The heaviest ball is 3 random ball' + JSON.stringify(RandomBall3))
      };
};

// secon 3 balls heavier
if(weight1result == -1){ 
    console.log('Second 3 random balls are heavier. Weighting fourth and fifth random ball.');
    console.log('Sixth random ball left beside.');
      let weight2result = Object.values(RandomBall4[0])[0] - Object.values(RandomBall5[0])[0];
        if(weight2result == 1){
          console.log('The heaviest ball is 4 random ball ' + JSON.stringify(RandomBall4))
        };
        if(weight2result == -1){
          console.log('The heaviest ball is 5 random ball ' + JSON.stringify(RandomBall5))
        };
        if(weight2result == 0){
          console.log('The heaviest ball is 6 random ball ' + JSON.stringify(RandomBall6))
        };
};

//weight of first 3 ball = second 3 ball
if(weight1result == 0){ 
    console.log('Weight is equal. Weighting 2 random balls not weighted yet.');
      //weighting 2 left balls
        if (Object.values(RandomBall7[0])[0] > Object.values(RandomBall8[0])[0]){
          console.log('The heaviest ball is 7 random ball ' + JSON.stringify(RandomBall7));
             }else{
              console.log('The heaviest ball is 8 random ball ' + JSON.stringify(RandomBall8));
              };
};