var words = ["link", "hyrule", "sword", "shield", "skyward", "zelda"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [""];
var wrongGuess = [""];
var guessesLeft = 10;
var wins = 0;
var lose = 0;
var lettersRemaining = word.length;
var correctLetters =[""];

function newGame(){
    document.getElementById("wins-text").innerHTML = wins;
    document.getElementById("losses-text").innerHTML = lose;
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [""];
        for(var i=0; i< word.length; i++){
         answerArray[i]= "_ ";
    }
    document.getElementById("blank").innerHTML = (answerArray.join(""));
    wrongGuess = [""];
    document.getElementById("wrongguess-text").innerHTML = (wrongGuess.join(" ").toUpperCase());
    guessesLeft = 10;
    document.getElementById("guessesleft-text").innerHTML = guessesLeft;
    correctLetters =[""];
    lettersRemaining = word.length;
};

// ---------  MAIN GAME PART ---------------- // 
newGame();

document.onkeyup = function(event){
    var userKey = event.key;
    if (wrongGuess.includes(userKey) === true || correctLetters.includes(userKey) === true) {
        return;
    } else { 
    if (word.includes(userKey) === false) {
        wrongGuess.push(userKey);
        document.getElementById("wrongguess-text").innerHTML = (wrongGuess.join(" ").toUpperCase());
        guessesLeft--;
        document.getElementById("guessesleft-text").innerHTML = guessesLeft;
        };
        for (var j=0; j< word.length; j++){
        if (word[j] === userKey) {
            answerArray[j] = userKey;
            document.getElementById("blank").innerHTML = (answerArray.join("").toUpperCase());
            correctLetters.push(userKey);
            lettersRemaining --;
            }
    };
      if (guessesLeft === 0){
          alert("You didn't guess the word.")
          lose++;
          document.getElementById("losses-text").innerHTML = lose;
          newGame();
    };
        if (lettersRemaining === 0){
            alert("You guessed the word! It was " + word + ".")
            wins++;
            document.getElementById("wins-text").innerHTML = wins;
            newGame();
        };
    }
}