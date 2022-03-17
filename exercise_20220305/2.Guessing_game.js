// Write a guessing game where the user has to guess a secret number. After every guess the
// program tells the user whether their number was too large or too small. At the end the number
// of tries needed should be printed. It counts only as one try if they input the same number
// multiple times consecutively. Range 1-100.

class Host {
    constructor() {
        this.secretNumber;
        this.guesses = [];
    }

    setNumber = (number) => {
        this.secretNumber = number;
    };

    answer = (number) => {
        if (number === this.secretNumber) {
            this.guesses.push(number);
            console.log(
                `Host: ${number} is the correct number! You guessed it with ${this.guesses.length} try(ies)!`
            );
            return "WIN";
        } else if (number >= this.secretNumber) {
            if (!this.guesses.includes(number)) {
                this.guesses.push(number);
                console.log(`Host: Your number is too high`);
            } else console.log("Host: You asked for that number before");
            return "HI";
        } else if (number <= this.secretNumber) {
            if (!this.guesses.includes(number)) {
                this.guesses.push(number);
                console.log(`Host: Your number is too low`);
            } else console.log("Host: You asked for that number before");
            return "LO";
        }
    };
}

class User {
    constructor() {
        this.min = 1;
        this.max = 100;
    }

    generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    askForNummber() {
        this.number = this.generateRandom(this.min, this.max);
        console.log(`User: The number is ${this.number}?`);
        let ans = host.answer(this.number);

        if (ans === "HI") {
            this.max = this.number;
        }
        if (ans === "LO") {
            this.min = this.number;
        }
        if (ans === "WIN") {
            return; // ends game
        }

        this.askForNummber();
    }
}

const host = new Host();
const user = new User();

host.setNumber(26); // set number to guess
user.askForNummber();