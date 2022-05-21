
// This function is going to called when the webpage loads in and when ever the user hit the button

function rollDice() {
    var sum = 0
    document.getElementById("dice1").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random() * 6) + 1;

    sum = parseInt(document.getElementById("dice1").value) + parseInt(document.getElementById("dice2").value);

    document.getElementById("total").innerHTML = "Total: " + sum;
}