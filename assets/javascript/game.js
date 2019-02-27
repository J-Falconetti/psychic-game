// this is the Javascrpit 

var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var compPick = letter[Math.floor(Math.random() * letter.length)];
var userGuess;
var win=0;
var loss=0;

console.log(compPick)
document.onkeypress = function(event){
    userGuess = event.key;
    console.log(userGuess)

if(userGuess === compPick) {
    win++;
    alert("you win! " +win);

} else {
    loss ++
    alert("you lose! " +loss)
}
}