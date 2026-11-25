console.log("Welcome to the game !")

function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"]
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, scissors):")
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playGround(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win!, System loss")
            humanScore = humanScore + 1;
        } else if ( humanChoice === "rock" && computerChoice === "paper") {
            console.log("You loss!, System Win")
            computerScore =  computerScore + 1;
        } else 
            console.log("Draw")
    } else if (humanChoice === "scissors") {
        if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win!, System loss")
            humanScore = humanScore + 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You loss!, System Win")
            computerScore =  computerScore + 1;
        } else 
            console.log("Draw")
    } else if (humanChoice === "paper") {
        if ( humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win!, System loss")
            humanScore = humanScore + 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You loss!, System Win")
            computerScore =  computerScore + 1;
        } else {
            console.log("Draw")
        }
    }

    return console.log(`Human Scored : ${humanScore} && Computer Scored : ${computerScore}`)
}

for (let i = 1; i <= 5; i++) {
    let cChoice = (getComputerChoice());
    let hChoice = (getHumanChoice())

    playGround(hChoice, cChoice)
}


