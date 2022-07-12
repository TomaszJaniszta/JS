let primeNumbers = [];

for (let num = 1; num < 100; num++) {
    checkForPrime(num);
}

function checkForPrime(num) {
    var i;
    var flag = true;
    if (num == 1) {
        flag = false;
    } else {
        for (i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                flag = false;
            }
        }
        if (flag == true) {
            primeNumbers.push(num);
        }
    }
}

console.log(`The prime numbers: ${primeNumbers}`);