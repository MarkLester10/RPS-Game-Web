const choices = document.querySelectorAll(".choice");
const score = document.getElementById("scoreBoard");
const restart = document.getElementById("restart");
const result = document.getElementById("result");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0
};

//Play Game
function play(e) {
  console.log(e.target.id);
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);

  console.log(playerChoice, computerChoice, winner);
}

//Get Computer Choice
function getComputerChoice() {
  const rand = Math.random();
  console.log(rand);
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissor";
  }
}

//Get Winner

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    if (computer === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (player === "paper") {
    if (computer === "scissor") {
      return "computer";
    } else {
      return "player";
    }
  } else if (player === "scissor") {
    if (computer === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

//Show Winner

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <img class="choice" src="pic/${computerChoice}.png" />
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <img class="choice" src="pic/${computerChoice}.png" />
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        
        `;
  } else {
    result.innerHTML = `
        <h1>It's A Draw</h1>
        <img class="choice" src="pic/${computerChoice}.png" />
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
  }

  //show Score

  score.innerHTML = `
    <p>${scoreboard.player}</p>
    <p>${scoreboard.computer}</p>
    `;

  modal.style.display = "block";
}

//remove modal
function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

//restart Game
function RestartGame(e) {
  score.innerHTML = `
    <p>0</p>
    <p>0</p>
    `;
  scoreboard.player = 0;
  scoreboard.computer = 0;
}

//Event Listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", RestartGame);
