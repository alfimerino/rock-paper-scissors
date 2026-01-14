// 1. SELECTORS
const container = document.querySelector(".container");
const humanScore = document.querySelector(".humanScore")
const computerScore = document.querySelector(".computerScore")

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let humanChoice = "";
    let computerChoice = "";

    let roundWinner = "";

    // for (let i = 0; i <= 5; i += 1) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundWinner = playRound(humanChoice, computerChoice);

    if (roundWinner == "Human") {
        humanScore++;
    } else if (roundWinner == "Computer") {
        computerScore++;
    }
    console.log("Human: " + humanScore + " Computer: " + computerScore);
    // }
    endGame(humanScore, computerScore);
}

function endGame(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("Human wins");
    } else if (computerScore > humanScore) {
        console.log("Computer wins");
    } else {
        console.log("Tie Game");
    }
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
    humanScore.textContent= event.target.textContent
}
rockButton.addEventListener("click", testbutton)

// 5. PLACEMENT
container.append(rockButton, paperButton, scissorsButton);



