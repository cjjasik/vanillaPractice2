// 9. RETURN A BOOLEAN IF A NUMBER IS DIVISIBLE BY 10

/**
 * 
 * @param {integer} num // provided int
 * @returns {boolean} // true if divisible by 10
 */

function divisibleByTen (num) {

    if (num % 10 === 0) {
        return true;
    }
    return false;
}

console.log(divisibleByTen(100));
console.log(divisibleByTen(111));