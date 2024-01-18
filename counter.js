// button var established.
const buttonOne = document.getElementById("add-one-button");
const buttonTwo = document.getElementById("add-two-button");
const buttonThree = document.getElementById("add-three-button");

//functionality
// BUTTON ONE
function buttonOneClick() {
    const counterValue = document.getElementById("counter-number");

    counterValue.innerHTML = parseInt(counterValue.innerHTML) + 1
}
buttonOne.onclick = buttonOneClick;

// BUTTON TWO
function buttonTwoClick() {
    const counterValue = document.getElementById("counter-number");

    counterValue.innerHTML = parseInt(counterValue.innerHTML) + 2
}
buttonTwo.onclick = buttonTwoClick;

// BUTTON THREE
function buttonThreeClick() {
    const counterValue = document.getElementById("counter-number");

    counterValue.innerHTML = parseInt(counterValue.innerHTML) + 3
}
buttonThree.onclick = buttonThreeClick;