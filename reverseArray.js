// 5. CREATE A FUNCTION THAT REVERSES AN ARRAY

function reverseArray(array) {
    
    let newArray =[];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let popped = array.pop();
        newArray.push(popped);
    }
    return newArray;
}

console.log(reverseArray([1,2,3,4,5]));