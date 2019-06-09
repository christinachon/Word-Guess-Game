// my array of words
var words = ["link", "hyrule", "ganondorf", "kakariko", "dekutree", "zelda"];

//pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//changes random word to blanks
var answerArray = [""];
for(var i=0; i< word.length; i++){
    answerArray[i]= "_ ";
    }

//displays the random word with no comma between
document.getElementById("blank").innerHTML = (answerArray.join(""));

// sets wrong guessed letters
var wrongGuess = [""];
document.getElementById("wrongguess-text").innerHTML = (wrongGuess.join(" ").toUpperCase());

// sets number of guesses lef
var guessesLeft = 10;
document.getElementById("guessesleft-text").innerHTML = guessesLeft;

//sets wins
var wins = 0;
document.getElementById("wins-text").innerHTML = wins;

//sets losses
var lose = 0;
document.getElementById("losses-text").innerHTML = lose;

// ---------  MAIN GAME PART ---------------- // 

// guessesleft goes down if letter is not in word and goes to wrongGuess
document.onkeyup = function(event){
    var userKey = event.key;
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
            }
            // if guesses reach 0 then game over alert
    }    if (guessesLeft === 0){
        alert("You Lose!");
        lose++;
        document.getElementById("losses-text").innerHTML = lose;
    }
}