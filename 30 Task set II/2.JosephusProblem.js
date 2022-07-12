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