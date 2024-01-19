/**
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
 */

function numOfDigits (num) {
    let intString = num.toString();
    let intChars = intString.split('');

    let intLength = intChars.length;

    return intLength;
}

console.log(numOfDigits(1000)); // expect 4
console.log(numOfDigits(100)); // expect 3
console.log(numOfDigits(3)); // expect 1