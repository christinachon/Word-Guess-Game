// my array of words

var words = ["link", "hyrule", "ganondorf", "kakariko"];

//pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

//changes random word to blanks
var answerArray = [];

for(var i=0; i< word.length; i++){
    answerArray[i]= "_ ";
    }

//displays the random word
document.getElementById("blank").innerHTML = (answerArray.join(""));

