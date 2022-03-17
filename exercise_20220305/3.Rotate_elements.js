// 3)      Write a function that rotates a list by k elements. 
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
// Try solving this without creating a copy of the list.

let k = 3;
let array = [1, 2, 3, 4, 5, 6];

while (k > 0) {
    array.push(array.shift());
    k = k - 1;
}

console.log(array);