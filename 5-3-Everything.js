/*
Problem: Analogous to the some method, arrays also have an every method. This one returns true when the 
given function returns true for every element in the array. In a way, some is a version of the || 
operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two 
versions, one using a loop and  oneusing the some method.
*/

const every = function(array, test) {
    for (const element of array) {
        if (!test(element)) return false;
    }
    return true;
}

const everySome = function(array, test) {
    return !array.some(n => test(n) === false);
}

// ----- TESTS -----

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true