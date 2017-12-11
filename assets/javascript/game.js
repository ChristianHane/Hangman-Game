var currentWord = "";
var lettersCurrentWord = [];
var numBlanks = 0;
var incorrectGuesses = [];
var displayWord = [];
var wordChoices = ["anakin", "yoda", "luke", "kylo", "leia", "han", 
"boba", "sheev", "ahsoka", "rey", "chewbacca"];


// score counters
var winCounter =  0;
var lossCounter = 0;
var guesses = 13;





function startGame() {
    currentWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
    lettersCurrentWord = currentWord.split("");
    numBlanks = lettersCurrentWord.length;
    console.log(currentWord);
    console.log(lettersCurrentWord);

    incorrectGuesses = [];
    displayWord = [];
    guesses = 13;


    for (var i = 0; i < numBlanks; i++) {
        displayWord.push("_");
    }
    console.log(displayWord); 
    document.getElementById("display").innerHTML = displayWord.join(" ");
    document.getElementById("incorrect").innerHTML = incorrectGuesses.join(" ");
    document.getElementById("num-guesses").innerHTML = guesses;
    

}
startGame();

function letterChecker(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (currentWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (currentWord[j] === letter) {
                displayWord[j] = letter;
            }
        }
    } else {
        incorrectGuesses.push(letter);
        guesses--;
    }
};

function turnComplete() {
    document.getElementById("display").innerHTML = displayWord.join(" ");
    document.getElementById("incorrect").innerHTML = incorrectGuesses.join(" ");
    document.getElementById("num-guesses").innerHTML = guesses;
    if (displayWord.toString() === lettersCurrentWord.toString()) {
        winCounter++;
        alert("You did it!");
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }
    else if (guesses === 0) {
        lossCounter++;
        alert("You're a loser!")
        document.getElementById("losses").innerHTML = lossCounter;
        startGame();
    };
};

function guess (event) {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    letterChecker(userInput);
    turnComplete();
};
document.addEventListener("keyup", guess);


