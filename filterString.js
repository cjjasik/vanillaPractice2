/**
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
 */

/**
 * 
 * @param {Integers, Strings} array 
 * @returns {Integers} array *** remove STRINGS!
 */
function filterStrings (array) {
    // identify integers vs strings
        // for loop -> if !String -> push to empty array
    
    let integerArray = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "string") {
            integerArray.push(array[i]);
        }
    }

    return integerArray;
}

console.log(filterStrings([1, 2, "three", "four", "five", 6, 7]))