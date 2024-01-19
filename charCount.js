/**
Create a function that takes in a String (word or sentance, ALL LOWER CASE) and also takes in a char to look for.
Count the number of times that char occurs in the string.
 */


/**
 * 
 * @param {String} words 
 * @param {Char} letter 
 * @returns {Integer} // num of times char occurs
 */
function charCount (words, letter) {

    let counter = 0;

    for (let i = 0; i < words.length; i++) {
        // define what char is
        let char = words[i];
        if (char === letter) {
            counter++;
        }
    }

    return counter;
}

console.log(charCount("hello world", 'l')); //expect 3
console.log(charCount("yay", 'y')); //expect 2