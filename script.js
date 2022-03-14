
let computerScore = 0;
let userScore = 0;
const numberOfRounds = 5;

const buttons = document.querySelectorAll('input');

const pcChoise =  document.querySelector('.pc-choise');

const resultsContainer = document.querySelector('.results');
const resultDiv = document.createElement('h2');
resultDiv.setAttribute('id', 'round-result')
resultsContainer.appendChild(resultDiv);


const pointsContainer = document.querySelector('.points');
const pointUser = document.createElement('p');
const pointPC = document.createElement('p');
resultsContainer.appendChild(pointPC);
resultsContainer.appendChild(pointUser);

const winner = document.querySelector('.winner');







//Create a random number and return paper rock or scissors
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
//Compare computer сhoice and user choise, and compare them
//Return "computer" win, "player win" or "draw"
function playRound(player) {
    computer = computerPlay();
    player = player.toLowerCase();


    c = "❌ Computer wins! "
    p = "✅ You wins! "
    d = "🟨 Draw"

    //  console.log("Copmuter choose a " + computer + ".");
    // console.log("You choose a " + player + ". \n");
    pcChoise.textContent = ("Copmuter choose a " + computer + ".");





 if (player === computer) {
        resultDiv.textContent = (`${d}`);
        resultDiv.removeAttribute('class')
        resultDiv.setAttribute('class', 'yellow');
    }else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
    ) {
    userScore++
    resultDiv.textContent = (p + `${player} beats ${computer}.`);
    resultDiv.removeAttribute('class')
    resultDiv.setAttribute('class', 'green');
        if(userScore == numberOfRounds) {
        winner.textContent = "User wins!";

        

        }
    }
    if (
    (computer === 'rock' && player === 'scissors') ||
    (computer === 'scissors' && player === 'paper') ||
    (computer === 'paper' && player === 'rock')
    ) {
    computerScore++
    resultDiv.textContent = (c + `${computer} beats ${player}.`);
    resultDiv.removeAttribute('class')
    resultDiv.setAttribute('class', 'red');
        if(computerScore == numberOfRounds) {
        winner.textContent = "computer wins!";
        }

    }
    pointUser.textContent = `You: ${userScore}`;
    pointPC.textContent = `Computer: ${computerScore}`;
};
//cycle a prompt times function "playRound" and choose a winner or draw
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
        console.log ("%c Computer wins and has " + computerScore + " points. Trying harder!", style);
    } else {
        console.log ("%cNobody wins. Try again!", style);
        
    }
};
function halo (){
    console.log("hui");
}

function toggleSelection(e) {
    buttons.forEach(remove =>{
        console.log(remove);
        this.ClassList.remove('selection');
    })
    e.ClassList.add('selection');

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
        toggleSelection(this);


    })
})