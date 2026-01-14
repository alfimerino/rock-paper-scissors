// 1. SELECTORS
const container = document.querySelector(".container");
const humanScoreElement = document.querySelector(".humanScore")
const computerScoreElement = document.querySelector(".computerScore")
const computerChoiceElement = document.querySelector(".computerChoice")
const humanChoiceElement = document.querySelector(".humanChoice")

// 2. LOGIC (The Function)
function getComputerChoice() {
    let numChoice = Math.random();
    if (numChoice < 0.25) {
        return "Rock";
    } else if (numChoice < 0.75) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter 1: Rock, 2: Paper, 3: Scissors", 1);

    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else if (choice == 3) {
        return "Scissors";
    }
}

function playGame(event) {
    let humanChoice = "";
    let computerChoice = "";

    humanChoice = event.target.textContent
    computerChoice = getComputerChoice();

    humanChoiceElement.textContent = humanChoice
    computerChoiceElement.textContent = computerChoice
    roundWinner = playRound(humanChoice, computerChoice);

    if (roundWinner == "Human") {
        humanScoreElement.textContent= Number(humanScoreElement.textContent) + 1

    } else if (roundWinner == "Computer") {
        computerScoreElement.textContent= Number(computerScoreElement.textContent) + 1
    }

    if (computerScoreElement.textContent == "5" || humanScoreElement.textContent == "5") {
        endGame(Number(humanScoreElement.textContent), Number(computerScoreElement.textContent))
    }
}

function endGame(humanScore, computerScore) {

    if (humanScore > computerScore) {
        alert("Human wins");
    } else if (computerScore > humanScore) {
        alert("Computer wins");
    } else {
        console.log("Tie Game");
    }
    humanScoreElement.textContent = ""
    computerScoreElement.textContent = ""
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        return "Human";
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        return "Human";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        return "Human";
    } else if (humanChoice == computerChoice) {
        return " ";
    } else {
        return "Computer";
    }
}
// 3. CREATION
const rockButton = document.createElement("Button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("Button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("Button");
scissorsButton.textContent = "Scissors";

// 4. INTERACTION (Connecting the function to the button)

function testbutton(event) {
    humanScoreElement.textContent= Number(humanScoreElement.textContent) + 1
}
rockButton.addEventListener("click", playGame)
paperButton.addEventListener("click", playGame)
scissorsButton.addEventListener("click", playGame)

// 5. PLACEMENT
container.append(rockButton, paperButton, scissorsButton);



