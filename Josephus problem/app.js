let soldiers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let killingOne = 0;

function killSoldier(array) {
// killingOne+1 is compared to array lenght (+1 to match, indexes are from 0)
    if(killingOne+1 < soldiers.length){
        console.log('Soldier '+soldiers[killingOne]+' kills soldier '+soldiers[killingOne+1]);
        soldiers.splice(killingOne + 1, 1);
        killingOne = killingOne + 1;
    }
    
    if(killingOne+1 === soldiers.length){
        console.log('Soldier '+soldiers[killingOne]+' kills soldier '+soldiers[0]);
        soldiers.splice(0, 1);
        killingOne = 0
    }else if(killingOne === soldiers.length){
        killingOne = 0
    }

    if(soldiers.length > 1) {
        killSoldier(soldiers);
    }

    if(soldiers.length === 1) {
        console.log('Remain alive soldier number = ' + soldiers[0])
    }
}

killSoldier(soldiers);