/**
Create a function that meets the following criteria:

a is checked if it is true or false.
- If a is false, false is returned.
b is checked if it is true or false.
- If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
 */

function andAnd (a, b) {
    if (a === true && b === true) {
        return true;
    }
    return false;
}

console.log(andAnd(true, true)); // true
console.log(andAnd(true, false)); // false
console.log(andAnd(false, false)); // false