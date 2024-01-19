/**
Find the Smallest & Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples:
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

 */


/**
 * 
 * @param {Integer} array of nums 
 * @returns {Integer} array of min, max
 */
function minMax (nums) {
    let sortedNums = nums.sort(function (a, b) {return a - b});

    // min -> element from the first index
    let min = sortedNums[0];
    // max -> element form the last index
    let max = sortedNums[sortedNums.length -1];

    return [min, max]; //min & max in order
}

console.log(minMax([1, 2, 3, 4, 5])); // expect [1,5];
console.log(minMax([5, 4, 1])); // expect [1,5];
console.log(minMax([15, 30, 22])); // expect [1,5];