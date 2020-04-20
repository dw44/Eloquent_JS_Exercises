/*
Problem: its elements appear. For this exercise, write two functions, reverseArray and 
reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that 
has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method 
does: it modifies the array given as argument by reversing its elements. Neither may use the standard 
reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant 
do you expect to be useful in more situations? Which one runs faster?
*/

const reverseArray = function(arr) {
    const reversed = [];
    for (const element of arr) {
        reversed.unshift(element); 
        // take element from array, add to the front of the reversed
    }
    return reversed;
}

const reverseArrayInPlace = function(arr) {
    const n = Math.floor(arr.length / 2);
    for (let i = 0; i < n; ++i) {
        let temp = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// ----- TESTS -----

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]