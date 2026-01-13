function getComputerChoice (){
    const compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;  
    }
}


const getHumanChoice = function (){
    const humanChoice = window.prompt(`Your Play!
        Write rock, paper, or scissors`).toLowerCase();
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors"){
        alert("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        alert("You win! Paper beats rock.");
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.");
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        alert("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        alert("You lose! Scissors beats paper.");
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("You lose! Rock beats scissors.");
        computerScore++
    } else {
        alert(`It's a tie! You both chose ${humanChoice}`);
    }
    alert(`Computer: ${computerChoice}       You: ${humanChoice}
        Computer Score: ${computerScore}
        Your Score: ${humanScore}`);

    }
    
function playGame (){
    while (humanScore < 3 && computerScore < 3){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore === 3) {
        alert("First to 3. You win the game!");
    } else {
        alert("First to 3. Computer wins the game!");
    }
    }

    playGame();