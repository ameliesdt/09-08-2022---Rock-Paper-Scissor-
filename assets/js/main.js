// Set rounds
//declaring variables
let roundsPlayed = 0;
let roundsAlreadyPlayed = 0;

document.querySelectorAll('.roundsContainer input').forEach((item) => {
    item.addEventListener('click', (event) => {
        roundsPlayed = event.target.value;
        console.log(event.target.value);

        getUserChoice.forEach((item) =>(item.disabled = false));
        document.querySelector('#reset').disabled = false;

        result.innerText = 'Let the games begin!';
        document.querySelector('#round-select').style.display = "none";
        document.querySelector("#rounds-container").style.display = "block";

        document.querySelector("#all-rounds").innerText = roundsPlayed;

    })
})

// ==RESTART
document.querySelector('#reset').addEventListener('click', () => {
    location.reload();
})

//PLay game
//declaring variables
let userScore = 0;
let computerScore = 0;

//Variable for user Button click
const getUserChoice = document.querySelectorAll('.choiceBtn');
//Output for User Score
const displayUserScore = document.querySelector('#userScoreDisplay');
//Output for Computer score /course/the-ultimate-fullstack-web-development-bootcamp/
const displayCompScore = document.querySelector('#compScoreDisplay');
// Output for userChoice
const displayUserChoice = document.querySelector('#userChoiceDisplay');
// Output for ComputerChoice
const displayCompChoice = document.querySelector('#compChoiceDisplay');
// Output for Result String 
const result = document.querySelector(".result");


//get computer choices
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

//get user choice including actual play game function

    getUserChoice.forEach(button => {
        button.addEventListener('click', (event) => {
    
            getComputerChoice()
            const computerChoice = getComputerChoice();
            const userChoice = event.target.id;
            
            displayUserChoice.innerHTML = event.target.id;
            displayCompChoice.innerHTML = computerChoice;

    if(roundsAlreadyPlayed < roundsPlayed) {

        if (userChoice == 'Rock' && computerChoice == 'Rock') {
            result.innerHTML = 'It is a draw';
            roundsAlreadyPlayed++;
        }  else if (userChoice == 'Paper' && computerChoice == 'Paper') {
            result.innerHTML = 'It is a draw';
            roundsAlreadyPlayed++;
        }  else if (userChoice == 'Scissor' && computerChoice == 'Scissor') {
            result.innerHTML = 'It is a draw';
            roundsAlreadyPlayed++;
        } else if (userChoice == 'Paper' && computerChoice == 'Rock') {
            result.innerHTML = 'Paper beats Rock, you win!';
            userScore++;
        } else if (userChoice == 'Scissor' && computerChoice == 'Rock') {
            result.innerHTML = 'Rock beats Scissor, Computer wins!';
            computerScore++;
            roundsAlreadyPlayed++;
        } else if (userChoice == 'Rock' && computerChoice == 'Paper') {
            result.innerHTML = 'Rock beats Paper, computer wins!';
            computerScore++;
            roundsAlreadyPlayed++;
        } else if (userChoice == 'Paper' && computerChoice == 'Scissor') {
            result.innerHTML = ' Scissor beats Paper, Computer wins!';
            computerScore++
            roundsAlreadyPlayed++;
        } else if (userChoice == 'Scissor' && computerChoice == 'Paper') {
            result.innerHTML = ' Scissor beats Paper, you win!';
            userScore++;
            roundsAlreadyPlayed++;
        } else if (userChoice == 'Rock' && computerChoice == 'Scissor') {
            result.innerHTML = 'Rock beats Scissor, you win!';
            userScore++;
            roundsAlreadyPlayed++;
        }

        displayCompScore.innerHTML = computerScore;
        displayUserScore.innerHTML = userScore;
        document.querySelector('#already-played').innerText = roundsAlreadyPlayed;

    }
        })
    })


