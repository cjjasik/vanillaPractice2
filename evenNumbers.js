// --------------------------------------------
// 0. PRINT ALL EVEN NUMBERS BETWEEN BETWEEN 0 - 10
function helloWorld () {
    return ("Hello World");
}
console.log(helloWorld());

// 1. PRINT ALL EVEN NUMBERS BETWEEN PROVIDED START AND END POINTS
function evenNumbers(start, end) {

    for (let i=start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
evenNumbers(2, 10);

// --------------------------------------------
// 1. PRINT ALL EVEN NUMBERS BETWEEN BETWEEN 0 - 10
function evenNumbers() {

    for (let i=0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
evenNumbers();