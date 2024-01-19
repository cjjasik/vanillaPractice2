// 7. REMOVE THE SPACES FOUND IN A STRING

function removeSpaces (word) {
    // splitting the word into chars
    // for loop through chars
    // if statement char !== " " return.

    let chars = word.split("");
    let charsArray = [];

    for (let i = 0; i < chars.length; i++) {
        if ( chars[i] !== " ") {
            charsArray.push(chars[i]);
        }
    }

    let joinedArray = charsArray.join("");

    return joinedArray;
}

console.log(removeSpaces("H ELLO"));