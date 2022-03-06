const style = 'font-weight: bold; font-size: 30px;color: red; text-shadow: 1px 1px 0 yellow';

let computerScore = 0;
let userScore = 0;


function computerPlay () {
    let random = Math.floor(Math.random() * 3);
    // console.log(random);
    if( random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";

    }
};

function playRound() {
    computer = computerPlay().toLowerCase();
    player = prompt("Choose \"Paper\", \"Rock\" or \"Scissors\"").toLowerCase();

    c = "❌ Computer wins! "
    p = "✅ Player wins! "
    d = "🟨 Draw"

    console.log("Copmuter choos e " + computer + ".");
    console.log("You choose " + player + ". \n");

    if (player === computer) {
        return `${d}\n PC: ${computerScore}.\n\n You: ${userScore}`
    }

    if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
    ) {
    userScore++
    return p + `${player} beats ${computer}.\n\n PC: ${computerScore}\n You: ${userScore}`
    }
    if (
    (computer === 'rock' && player === 'scissors') ||
    (computer === 'scissors' && player === 'paper') ||
    (computer === 'paper' && player === 'rock')
    ) {
    computerScore++
    return c + `${computer} beats ${player}.\n\n PC: ${computerScore}\n You: ${userScore}`
    }
};

function game () {
    let NumberOfRounds = prompt("How many rounds do you want to play?", 3);
    for (let i = 0; i < NumberOfRounds; i++) {
        let result = playRound();
        if (typeof result == "undefined"){
            console.warn("Undefined type. Please type \"Paper\", \"Rock\" or \"Scissors\"");
            i--;
        } else {
        console.log(result);
        }
    }
    if (userScore > computerScore) {
        console.log("%c You win and have " + userScore + " points. You are good!", style);
    } else if (computerScore > userScore) {
        console.log ("%c Computer wins and have " + computerScore + " points. Trying harder!", style);
    } else {
        console.log ("%cNobody wins. Try again!", style);
        
    }
};


console.log(game());
