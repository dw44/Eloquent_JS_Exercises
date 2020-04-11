/*
Problem: The == operator compares objects by identity. But sometimes you’d prefer to compare the values 
of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are 
objects with the same properties, where the values of the properties are equal when compared with a 
recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their 
properties compared, you can use the typeof operator. If it produces "object" for both values, you 
should do a deep comparison. But you have to take one silly exception into account: because of a 
historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare 
them.
*/

const deepEqual = function(first, second) {
    if (typeof(first) !== typeof(second)) {
        return false;
    } 
    else {
        if (first === null || second === null) {
            return first === null && second === null;
        }
        else if (typeof(first) !== 'object') {
            return first === second;
        } else { 
            // In case both items are objects
            const firstK = Object.keys(first);
            const secK = Object.keys(second);

            if (firstK.length !== secK.length) {
                return false;
            } else {
                for (let i = 0; i < firstK.length; ++i) {
                    if (firstK[i] !== secK[i]) {
                        return false;
                    }
                }
            }
            for (const element of firstK) {
                if (typeof(first[element]) !== typeof(second[element])) {
                    return false;
                } else {
                    if (typeof(first[element]) !== 'object') {
                        if (first[element] !== second[element]) {
                            return false;
                        }
                    } else {
                        deepEqual(first[element], second[element]);
                    }
                }
            }
        } 
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(3,3));
// → true
console.log(deepEqual(3,5));
// → false
console.log(deepEqual("a","a"));
// → true
console.log(deepEqual(true,true));
// → true
console.log(deepEqual(false,true));
// → false