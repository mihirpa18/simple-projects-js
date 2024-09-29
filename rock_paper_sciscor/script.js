let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#comp-score")


const gencompchoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randind = Math.floor(Math.random() * options.length);
  return options[randind];
};

const drawgame = () => {
  console.log("The game was draw");
  msg.innerText = "Game Was Draw,Play again";
  msg.style.backgroundColor="#081b31"

};

const showwinner = (userWin) => {
  if (userWin) { 
    userscore++
    userscorePara.innerText=userscore
    console.log("u won");
    msg.innerText = "You Win!";
    msg.style.backgroundColor="green"

  } else {
    compscore++
    compscorePara.innerText=compscore
    console.log("you loss");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor="red"

  }
};
const playGame = (userChoice) => {
  console.log("user choice :", userChoice);
  const compchoice = gencompchoice();
  console.log("comp choice :", compchoice);

  if (userChoice === compchoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showwinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
