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
        Write rock, paper, or scissors`);
    return humanChoice;
}



let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors"){
        alert("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock"){
        alert("You win! Paper beats rock.");
        humanScore++
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.");
        humanScore++
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper"){
        alert("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors"){
        alert("You lose! Scissors beats paper.");
        computerScore++
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock"){
        alert("You lose! Rock beats scissors.");
        computerScore++
    } else {
        alert(`It's a tie! You both chose ${humanChoice}`);
    }
    alert(`Computer: ${computerChoice}       You: ${humanChoice}
        Computer Score: ${computerScore}
        Your Score: ${humanScore}`);

    if (computerScore < 3 && humanScore < 3) {
        // playRound(getHumanChoice(), getComputerChoice());
    } else if (computerScore >= 3){
        alert("Computer wins best out of three!");
        return;
    } else if (humanScore >= 3){
        alert("You win best out of three!");
        return;
    }
    return;
    }
    

playRound(getHumanChoice(), getComputerChoice());