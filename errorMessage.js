/**
Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan: e1"
2 >> "Emergency stop: e2"
3 >> "Pump Error: e3"
4 >> "c: e4"
5 >> "Temperature Sensor Error: e5"

 */

function errorMessage (num) {
    if (num === 1) {
        return ("Check the fan: e1");
    } if (num === 2) {
        return ("Emergency stop: e2");
    } if (num === 3) {
        return ("Pump Error: e3");
    } if (num === 4) {
        return ("c: e4");
    } if (num === 5) {
        return ("Temperature Sensor Error: e5");
    } else {
        return("Cannot Read Error Message");
    }
}

console.log(errorMessage(1));
console.log(errorMessage(2));
console.log(errorMessage(3));
console.log(errorMessage(4));
console.log(errorMessage(5));
console.log(errorMessage(6));