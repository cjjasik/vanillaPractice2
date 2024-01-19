// 4. CALCULATE THE SUM OF NUMBERS WITHIN AN ARRAY

function sumOfNums(numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    return sum;
}
console.log(sumOfNums([1,2,3]));