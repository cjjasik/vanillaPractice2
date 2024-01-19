/**
Given an array of numbers that's not sorted... find and return the largest value in the array.
positive, negative, decimals, etc.
 */



// sort the array .sort -> smallest -> largest
// return the last digit in the sorted array.

/**
 * 
 * @param {Integers} array 
 * @returns {Integer} // biggest number
 */

function biggestNumber (array) {

    let sortedArray = array.sort(function (a, b){return a - b});
    console.log("SORTED ARRAY = " + sortedArray);

    let biggestNum = sortedArray[array.length-1];
    console.log("BIGGEST NUM = " + biggestNum);

    return biggestNum;
}

console.log(biggestNumber([3, 2, 5])); //expecting 5
console.log(biggestNumber([3, -2, 5])); //expecting 5
console.log(biggestNumber([0.3, 2, -5])); //expecting 2
console.log(biggestNumber([0.3, 2, -5, 10, -0.5, 100])); //expecting 100