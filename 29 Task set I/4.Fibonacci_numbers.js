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