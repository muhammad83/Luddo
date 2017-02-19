function rollDice(){
    console.log("Dice rolled");

    var dice = Math.floor(Math.random()*(6 - 1 + 1)) + 1

    document.getElementById("test").value = dice;
}