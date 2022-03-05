// 2) Utwórz cztery definicje funkcji. Jeden na każdą podstawową operację matematyczną i przyjmowanie dwóch parametrów wejściowych. 
// Utwórz jeszcze jedną funkcję. Ta funkcja ma na celu zwrócenie obiektu obliczeniowego. 
// Obiekt ten ma mieć pole obiektu parameters, które zawiera dwa parametry operacji wewnątrz (x i y) 
// oraz pole funkcyjne, które wskazuje na funkcję z operacją matematyczną (zdefiniowaną na początku). 
// Funkcja setOperation(), która ustawia pole z poprzedniego zdania, 
// oraz funkcja obliczania(), która wykonuje obliczenia i zwraca jego wartość.

let operations = {
    sum: (x, y) => x + y,
    sub: (x, y) => x - y,
    mul: (x, y) => x * y,
    div: (x, y) => x / y,
    // mod: (x, y) => x % y,
    // pow: (x, y) => Math.pow(x, y),
                };
  let calculation = (function (x, y) {
    let innerObject = {
                    param: {
                        x: x,
                        y: y,
                            },
                    mathOperation: null,
                    setOperation: setOperation,
                    calculate: calculate,
                    };
  
function setOperation(mathOperation) {
                                this.mathOperation = mathOperation;
                                    }
  
function calculate() {
                    return this.mathOperation(this.param.x, this.param.y);
                    }

    return innerObject;
  })(12, 9);
  
  calculation.setOperation(operations.sub);
  console.log(calculation.calculate());
  