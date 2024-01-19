/**
Given a number, return the total sum of that number multiplied by every number between 1 and 10.

multiSum(1) ➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
 */

/**
 * 
 * @param {Integer} num 
 * @returns {Integer} sum of nums
 */
function sumOfNums (num) {
    //for loop
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        // multiply num * 1-10
        let tempNum = num * i;
        // add to sum
        sum = sum + tempNum;
    }

    return sum;
}

console.log(sumOfNums(1));
console.log(sumOfNums(6));
console.log(sumOfNums(10));
console.log(sumOfNums(8));
console.log(sumOfNums(2));