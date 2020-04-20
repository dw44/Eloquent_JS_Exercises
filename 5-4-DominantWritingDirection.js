/*
Problem: Write a function that computes the dominant writing direction in a string of text. Remember that 
each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or 
"ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated 
with them. The characterScript and countBy functions defined earlier in the chapter are probably useful 
here.
*/

const SCRIPTS = require('./5-scripts');

require ('./5-scripts');

// characterScript and countBy defined in chapter 5 of Eloquent JS by the author

function characterScript(code) { 
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

// Main function

const dominantDirection = function(text) {
    const scriptList = countBy(text, char => characterScript(char.codePointAt(0))); 
    //scriptList creates a list of all scripts used in text and how many characters from each script. Uses null for spaces/punctuation etc.
    let dominant = 0;
    const directions = {
        'rtl' : 0,
        'ltr' : 0,
        'ttb' : 0
    }
    for (const script of scriptList) {
        if (script.name !== null) {
            directions[script.name.direction] += script.count;
        }
    }  // update directions object using scriptcounts from scriptList
    for (const direction of Object.keys(directions)) {
        if (directions[direction] > dominant) dominant = direction; 
    }
    return dominant;
}

// ----- TESTS -----

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

