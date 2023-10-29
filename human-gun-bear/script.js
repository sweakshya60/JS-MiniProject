function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
    return userInput;
  }
  else {
    return 'you write wrong name!!';
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'bear';
  }

  else if (randomNumber === 1) {
    return 'human';
  }

  else {
    return 'gun';
  }
}


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It was a tie';
  }
  if (userChoice == 'human') {

    return (computerChoice === 'bear') ? 'Computer Won' : 'You Won!!';

  }

  if (userChoice == 'bear') {
    return (computerChoice === 'gun') ? 'Computer Won' : 'You Won!!';
  }

  if (userChoice == 'gun') {
    return (computerChoice === 'human') ? 'Computer Won' : 'You Won!!';
  }

}

function playGame() {
  let promptUserChoice = prompt("Please choose bear, human or gun");
  let userChoice = getUserChoice(promptUserChoice);
  let computerChoice = getComputerChoice();
  document.write("User Choose: " + userChoice + '<br>');
  document.write("Computer Choose: " + computerChoice + '<br>');

  document.write(determineWinner(userChoice, computerChoice));
}

playGame();                                                                                                                                                  