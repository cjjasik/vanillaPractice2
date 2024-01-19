/**
Repeating Letters:
Create a function that takes a string and returns a string in which each character is repeated once.

Examples:
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
 */


/**
 * 
 * @param {String} words //a string provided
 * @returns {String} // each letter duplicated once
 */

function repeatingLetters (words) {
    
    // string -> chars
    let chars = words.split("");
    // for loop to go through each char, add duplicate
    
    let duplicatedChars = [];
    for (let i = 0; i < chars.length; i++){
        // identify char -> add duplicate
        let duplicate = chars[i] + chars[i];
        duplicatedChars.push(duplicate);
    }

    // chars -> string using join("")
    let newArray = duplicatedChars.join("");

    return newArray; // string -> each letter is repeated once
}

console.log(repeatingLetters("String"));
console.log(repeatingLetters("Hello World!"));
console.log(repeatingLetters("1234!_ "));