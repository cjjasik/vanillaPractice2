// 10. RETURN NUMBER OF VOWELS IN A STRING

function vowelsInString (word) {

    // split word into chars
    // for loop through each chars
        // if chars[i] === A || E || I || O || U || Y

    let upper = word.toUpperCase();
    let chars = upper.split("");
    let count = 0;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === 'A' || chars[i] === 'E' || chars[i] === 'I' || chars[i] === 'O' || chars[i] === 'U' || chars[i] === 'Y'){
            count ++;
        }
    }

    return count;
}

console.log(vowelsInString("HELLO")); // expect 2
console.log(vowelsInString("YIPPEE")); // expect 4
console.log(vowelsInString("Wow")); // expect 1