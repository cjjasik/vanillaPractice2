// 4. CALCULATE THE SUM OF NUMBERS WITHIN AN ARRAY

/**
 * 
 * @param {Integers} array 
 * @return {Integer} sum of array
 */

function sumNum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
}

console.log(sumNum([1,2,3]));