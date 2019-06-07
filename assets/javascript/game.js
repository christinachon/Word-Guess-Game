// my array of words
var words = ["link", "hyrule", "ganondorf", "kakariko", "dekutree", "zelda"];

//pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//changes random word to blanks
var answerArray = [];
for(var i=0; i< word.length; i++){
    answerArray[i]= "_ ";
    }

//displays the random word with no comma between
document.getElementById("blank").innerHTML = (answerArray.join(""));

// sets number of guesses left and displays
var guessesLeft = word.length;
document.getElementById("guessesleft-text").innerHTML = guessesLeft;

//sets wins
var wins = 0;
document.getElementById("wins-text").innerHTML = wins;

//sets losses
var lose = 0;
document.getElementById("losses-text").innerHTML = lose;

//get guess from user
document.onkeyup = function(event){
    var userKey = event.key;
    for (var j=0; j< word.length; j++){
        if (word[j] === userKey) {
            answerArray[j] = userKey;
            document.getElementById("blank").innerHTML = (answerArray.join("").toUpperCase());
            guessesLeft--;
            document.getElementById("guessesleft-text").innerHTML = guessesLeft;
            console.log (guessesLeft);
        }
    }
}
