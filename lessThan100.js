/**
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
 */

function lessThan100 (num1, num2) {
    
    let sum = num1 + num2;

    if (sum < 100) {
        return true;
    }

    return false;
}

console.log(lessThan100(10, 50)); // expect true
console.log(lessThan100(100, 50)); // expect false
console.log(lessThan100(10, 90)); // expect true