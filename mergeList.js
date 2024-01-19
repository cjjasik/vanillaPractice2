/**
Given two sorted arrays, combine them into one sorted array. Return the outcome.

positive values within both arrays.
 */


/**
 * 
 * @param {Integer} array1 
 * @param {Integer} array2 
 * @returns {Integer} // combined sorted arrays.
 */

// already sorted smallest -> largest

function mergeArrays (array1, array2) {
    let combined = [];

    for (let i = 0; i < array1.length; i++) {
        // get each element off array1, push to combined.
        combined.push(array1[i]);
    }

    for (let k = 0; k < array2.length; k++) {
        combined.push(array2[k]);
    }

    let sorted = combined.sort(function(a, b){return a - b});

    return sorted;
}
console.log(mergeArrays([1, 2, 3],[3, 6, 7]));