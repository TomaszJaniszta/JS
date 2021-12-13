let someObject = require("./Data.json");

function spendIn2014(){
    let var2014 = someObject.filter((i) => i.detailsOfPayent.date.includes("2014") == true); // filtr on the object in object, all transactions in 2014
    let spendSum2014 = 0; // array created to keep the result of foreach loop below
         var2014.forEach(element => { spendSum2014 = spendSum2014 + Number(element.cost)});
            return console.log('Sum of spend in 2014 is: ' + spendSum2014.toFixed(2));
            }(someObject);
//spendIn2014();

function companiesEarns(){
            let companies = [];                     
        someObject.forEach(element => {companies.push(element.detailsOfPayent.company);  // list of companies from each transaction                     
                        });                     
        const companiesUnique = [...new Set(companies)]; // unique values for companies          
            let companiesEarns = []; // creating  array to keep earns for each unique company                       
            let sum = 0                     
        for(let a = 0; a < companiesUnique.length; a++){ // for each unique company                     
             for(let b = 0; b < someObject.length; b++){ // sum of earnings  for each unique company, checking all transactions                     
                if(companiesUnique[a] === someObject[b].detailsOfPayent.company){                       
                    sum = sum + Number(someObject[b].cost)                      
                         };                     
                    };                      
                companiesEarns.push(sum.toFixed(2)); // adding sum results to result array, number, 2 decimal places                        
                sum = 0;                                                                                                                                                                                                                                                                                                                                        
             }                          
        resultCompaniesEarns = [];  
        for(let a = 0; a < companiesUnique.length; a++){ // connecting arrays of unique companies and their earns   
              resultCompaniesEarns.push(companiesUnique[a] +": "+companiesEarns[a]);    
              }     
    return console.log('Companies earns: ' + resultCompaniesEarns); // (3) ['ECSTASIA: 15695.64', 'MANGELICA: 14855.67', 'CODAX: 19036.06']       
    }(someObject);
 //companiesEarns();

function transactionSpendings(){
                let transactions = [];                     
            someObject.forEach(element => {transactions.push(element.detailsOfPayent.Type);  // list of all transaction types
                            });                     
            const typeUnique = [...new Set(transactions)]; // unique values for transactions
                let typeSpends = []; // creating  array to keep spends for each unique transaction type
                let sum = 0                     
            for(let a = 0; a < typeUnique.length; a++){ // for each unique type
                 for(let b = 0; b < someObject.length; b++){ // sum of spend for each unique type, checking all transactions                     
                    if(typeUnique[a] === someObject[b].detailsOfPayent.Type){                       
                        sum = sum + Number(someObject[b].cost)                      
                             };                     
                        };                      
                    typeSpends.push(sum.toFixed(2)); // adding sum results to result array, number, 2 decimal places                        
                    sum = 0;                                                                                                                                                                                                                                                                                                                                        
                 }                          
            resultTypeSpends = [];  
            for(let a = 0; a < typeUnique.length; a++){ // connecting arrays of unique types and their spends   
                  resultTypeSpends.push(" "+typeUnique[a] +": "+typeSpends[a]);    
                  }     
        resultTypeSpends.sort(); 
        return console.log('Spends per type transaction: ' + resultTypeSpends); 
}(someObject);    
//transactionSpendings();

function spendingsByMonth(){                    
    let months = [];                    
    someObject.forEach(element => {months.push(element.detailsOfPayent.date.split("-")[1])});  // list of all transaction months                    
                const monthUnique = [...new Set(months)]; // unique values for months                   
                    let monthSpends = []; // creating  array to keep spends for each unique month                   
                    let sum = 0                                         
                for(let a = 0; a < monthUnique.length; a++){ // for each unique month                   
                     for(let b = 0; b < someObject.length; b++){ // sum of spend for each unique month, checking all transactions                                       
                        if(monthUnique[a] === someObject[b].detailsOfPayent.date.split("-")[1]){                                        
                            sum = sum + Number(someObject[b].cost)                                          
                                 };                                         
                            };                                          
                       monthSpends.push(sum.toFixed(2)); // adding sum results to result array, number, 2 decimal places                                            
                        sum = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                     }                                              
                resultMonthSpends = [];                     
                for(let a = 0; a < monthUnique.length; a++){ // connecting arrays of unique months and their spends                     
                      resultMonthSpends.push(" "+monthUnique[a] +": "+monthSpends[a]);                      
                      }         
            resultMonthSpends.sort(); 
            return console.log('Spends per month: ' + resultMonthSpends);                   
    }(someObject);                              
 // spendingsByMonth(); 

function spendingsInEachDayofTheWeek(){
    let days = [0,1,2,3,4,5,6];                    
    let daySpends = []; // creating  array to keep spends for each unique day
    let currentDate = [];
    let day = [];
    let month = [];
    let year = [];
    let dateResult = [];
let sum = 0                                         
for(let a = 0; a < days.length; a++){ // for each day
     for(let b = 0; b < someObject.length; b++){ // sum of spend for each day, checking all transactions                                       
                currentDate = someObject[b].detailsOfPayent.date.split("-");
                day = currentDate[0];
                month = currentDate[1];
                year = currentDate[2];
                dateResult = new Date(year, month-1, day);
                dateResult.getDay();
        if(days[a] === dateResult.getDay()){                                        
                sum = sum + Number(someObject[b].cost)                                          
                                         };                                         
                                              };                                          
        daySpends.push(sum.toFixed(2)); // adding sum results to result array, number, 2 decimal places                                            
        sum = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        };                                             
let resultDaySpends = [];                     
days = ['Sunday = ','Monday = ','Tuesday = ','Wednesday = ','Thursday = ','Friday = ','Saturday = '];                    
                for(let a = 0; a < days.length; a++){ // connecting arrays of days and their spends                     
                      resultDaySpends.push(" "+days[a] +": "+daySpends[a]);                      
                                                    };       
            return console.log('Spends per day: ' + resultDaySpends);                   
    }(someObject);                  
//spendingsInEachDayofTheWeek();

let resultObject = {
    spentIn2014:  spendIn2014(),
    companiesEarns: companiesEarns(),
    transactionSpendings: transactionSpendings(),
    spendingsByMonth: spendingsByMonth(),
    spendingsInEachDayofTheWeek: spendingsInEachDayofTheWeek(),
                   };

console.log(resultObject);