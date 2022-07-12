let k = 3;
let array = [1, 2, 3, 4, 5, 6];

while (k > 0) {
    array.push(array.shift());
    k = k - 1;
}

console.log(array);