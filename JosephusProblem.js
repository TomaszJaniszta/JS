// 1) Show a result of Josephus Problem for 7 soldiers.		
// Display in the console log below:		
// a.    1 Kills 2		
// b.    3 Kills 4		
// c.    5 Kills 6		
// d.    7 Kills 1		
// e.    3 Kills 5		
// f.    7 Kills 3		
// g.    7 Remains alive		
// Following is the problem statement:		
// There are n people standing in a circle waiting to be executed. 
// The counting out begins at some point in the circle and proceeds around the circle in a fixed direction.		
//  In each step, a certain number of people are skipped and the next person is executed. 
// The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), 		
// until only the last person remains, who is given freedom. 
// Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle. 		
// In general, the classic Josephus problem has two parameters: N and K. 
// A circle of N people is formed, and successively every K-th person is selected for elimination. 
// As people are killed off, the circle shrinks, and the goal is to determine last surviving position.		

let soldiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //założenia,  ilość  żołnierzy
let killingOne = 0; //  żołnierz  zaczynający,  jego  indeks

function killSoldier(array) {

    //  killingOne+1  is  compared  to  array  lenght  (+1  to  match,  indexes  are  from  0)
    if (killingOne + 1 < soldiers.length) {
        console.log('Soldier ' + soldiers[killingOne] + ' kills soldier ' + soldiers[killingOne + 1]); //  jeżeli  więcej  niż  dwóch  to  żołnierz  zabija  żołnierza
        soldiers.splice(killingOne + 1, 1); //  usuwamy  z  tablicy  zabitego
        killingOne = killingOne + 1; //  przesuwamy  kolejkę  do  następnego  żołnierza
    }

    //  jeżeli  zabijającym  jest  ostatnim  z  tablicy  to  zabija  pierwszego,  wchodzimy  w  pętle
    if (killingOne + 1 === soldiers.length) {
        console.log('Soldier  ' + soldiers[killingOne] + '  kills  soldier  ' + soldiers[0]);
        soldiers.splice(0, 1);  //  usuwamy  pierwszego  z  tablicy
        killingOne = 0;  //  kolejnym  zabijającym  jest  pierwszy  żywy  z  tablicy
    } else if (killingOne === soldiers.length) {
        //  jeżeli  zabijający jest ostatnim to staje się pierwszym w nowej kolejce
        killingOne = 0;
    }

    if (soldiers.length === 1) {
        console.log('Remain  alive  soldier  number  =  ' + soldiers[0]);
    }

    if (soldiers.length > 1) {
        //  jeżeli  jest  więcej  niż  jeden  to  ponów  funkcję
        killSoldier(soldiers);
    }

}

killSoldier(soldiers)