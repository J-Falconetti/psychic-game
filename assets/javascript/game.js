// this is the Javascrpit 
// setting letter
// 
var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var compPick;
var guess = 1;
var userGuess;
var wins = 0;
var loss = 0;
var losstext = document.getElementById("losses");
var winstext = document.getElementById("wins");
var guesstext = document.getElementById("guesstx");

getlet()
// ADD GET LETTER FUNCTION to recall for more letter when needed
function getlet() {
    compPick = letter[Math.floor(Math.random() * letter.length)];
    // letter set getting user guess
    guess = 1
    console.log(compPick)
}
document.onkeypress = function (event) {
    
    userGuess = event.key;
    // console.log(userGuess)
    winstext.textContent = " Wins: " + wins;
     losstext.textContent = " Losses: " + loss;
     guesstext.textContent = " Guess #: " + guess;

    if (userGuess === compPick) {
        wins++;
    winstext.textContent = " Wins: " + wins;
        alert("you win! " + wins);
        getlet();
        
    }
    else {
        
        losstext.textContent = " Losses: " + loss;
        console.log(guess)
         if (guess === 10) {
             alert("you lose! " + loss);
             // guess = 1
             loss++
             getlet();
         }


         else {
            guess++;
            guesstext.textContent = " You are on Guess #: " + guess; 
            alert("Guess Again");
        }
    }
}
