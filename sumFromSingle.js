/**
Add up the Numbers from a Single Number

Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 */

/**
 * 
 * @param {Integer} num // indicates the ending number of sums.
 * @returns {Integer} // value of the sum of nums.
 */

function sumOfNums (num) {

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNums(4)); // expecting 10
console.log(sumOfNums(3)); // 1 + 2 + 3 = 6