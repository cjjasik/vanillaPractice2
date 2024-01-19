// CREATE A FUNCTION THAT FILTERS OUT NEGATIVE NUMBERS

function removeNegativeNums (array) {
    
    let positiveArray = [];

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > 0) {
            positiveArray.push(array[i]);
        }
    }

    return positiveArray;
}

console.log(removeNegativeNums([-1, 8, -5, 7]));