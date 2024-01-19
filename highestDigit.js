/**
Create a function that takes a number as an argument and returns the highest digit in that number.

Examples:
highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7
 */

function highestDigit (num) {
    // sort
        // int -> string -> char
    let stringNum = num.toString();
    let charNum = stringNum.split('');
    let sortNum = charNum.sort();

    // get element from last index
    let largestNum = sortNum[sortNum.length -1];

    return largestNum;
}

console.log(highestDigit(2)); // expect 2
console.log(highestDigit(27)); // expect 7
console.log(highestDigit(379)); // expect 9
console.log(highestDigit(78193)); // expect 9