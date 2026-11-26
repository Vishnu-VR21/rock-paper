
let humanScore = 0;
let computerScore = 0;

const hScore = document.querySelector("#user") 
const cScore = document.querySelector("#system") 
const result = document.querySelector("#result")

function playGround(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "Its a Draw"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "rock")) {
        result.textContent = "You Win!!"
        humanScore++;
    } else {
        computerScore++;
        result.textContent = "You loss!!"
    }

    hScore.textContent = `User Score ${humanScore}`
    cScore.textContent = `Computer Score ${computerScore}`
}


const buttons = document.querySelectorAll("button")
let clickCount = 0;
const maxCount = 5;

function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"]
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        if(clickCount >= maxCount){
            return
        }

        clickCount++;

        const hChoice = e.target.name;
        let cChoice = getComputerChoice()

        playGround(hChoice, cChoice)

        if (clickCount === maxCount) {
            buttons.forEach((btn) => {
                btn.disabled = true;
            })

            result.textContent = "game over! refresh the page";
        }
    })
});