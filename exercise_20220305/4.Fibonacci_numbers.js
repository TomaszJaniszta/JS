// Write a class that prints the list of the first n Fibonacci numbers.
// The first two Fibonacci numbers are 1 and 1.
// The n + 1-st Fibonacci number can be computed by adding the n-th and the n-1th Fibonacci number.
// The first few are therefore 1, 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8.

class fibonacciClass {
    constructor() {
        this.number1 = 1;
        this.number2 = 1;
        this.fibonacciNumbersArray = [1]
    }

    calculateFibonacciNumber(n) {
        while (n > 0) {
            let fibonacciNumber = this.number1 + this.number2;
            this.number1 = this.number2;
            this.number2 = fibonacciNumber;
            this.fibonacciNumbersArray.push(fibonacciNumber);
            n = n - 1;
        }
        return this.fibonacciNumbersArray;
    }
}

let fibonacciNumbers = new fibonacciClass();
console.log(fibonacciNumbers.calculateFibonacciNumber(10));