/**
Create a function that takes two numbers as arguments (num, length)
and returns an array of multiples of num until the array length reaches length.
 */

/**
 * 
 * @param {Integer} num 
 * @param {Integers} length 
 * @returns {[Integers]} // return array of multiples until length reached.
 */
function arrayOfMultiples (num, length) {

    let newArray = [];

    for (let i = 1; i <= length; i++) {
        newArray.push(i * num);
    }

    return newArray;
}

console.log(arrayOfMultiples(7, 5));