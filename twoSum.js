/** LEET CODE #1
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */

/**
 * 
 * @param {Integer} array ofintegers 
 * @param {Integer} target 
 * @returns {Integer} indicies of the two numbers
 */

function twoSum (integers, target) {
    
    for (let i = 0; i < integers.length; i++) {
        for (let k = i + 1; k < integers.length; k++) {
            if (integers[i] + integers[k] === target) {
                return [i, k];
            }
        }
    }

    // return indicies of the two elements
    return ;
}

console.log(twoSum([1,2,3], 5));