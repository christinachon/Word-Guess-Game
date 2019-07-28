# Word-Guess-Game

# Description
I have created this game as part of an assignment with the University of Washington Coding Bootcamp. The game starts automatically when you load the page, just start typing letters to figure out what the mystery word is!When you win or lose, a new game will automatically begin and it will keep track of your wins and losses. How many wins can you get?

# Problems
I struggled with figuring out a way to not let a user guess the game letter twice. I eventually decided to create a new array called answerArray, where each letter would be pushed into. When a letter is guessed, the program would check if that letter is in the answerArray. If it is, then it would not count that guess. If it is not, it would push that new letter into the answerArray and check if that letter is in the mystery word.

# Technical Approach
I created an array of words to choose from. Using Math.floor(Math.random()) a random number would be generated to grab an index of the words array. I set a variable that there are 10 guesses left and that letters remaining is the word.length.

At the start of the game, a random word is selected and displayed with _ instead of the letter. I achieved this by going through each of the characters with a for loop and replacing it with an underscore. When a button is clicked, the program will check if the letter has been guessed before by an answerArray. If the letter exists in the answerArray, nothing will happen. If it does not exist, it will push that letter into the array and continue the game.

The guessed letter will be checked to see if it is in the hidden word. If it does not exist in the hidden word, the letter gets pushed into the "Guessed Letters" array and the number of guesses goes down by one using a counter. IF it is in the hidden word, the letter still gets pushed into the answersArray and the letter gets revealed in the hidden word.  The number of remaining letters goes down by one using a counter.

Once the guesses left counter reaches 0, then a lose alart is displayed and a sound is played. A new game function is called and Lose goes up by one.

If the letters remaining reaches 0, that means the word is fully guessed. A win sound is played and a win alert is shown. A new game function is called and Wins goes up by one.
