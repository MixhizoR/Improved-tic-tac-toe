let currentChar = "X";
let gameOver = false;
var queue = [];
function changeText(button) {
  if (gameOver) {
    return;
  } else if (button.innerText !== "") {
    return;
  }
  if (button.innerText === "") {
    button.innerText = currentChar;
    currentChar = currentChar === "X" ? "O" : "X";
  }

  if (queue.length === 6) {
    queue.at(0).classList.remove("animate-text");
    let lastButton = queue.shift();
    lastButton.innerText = "";
  }
  if (queue.length === 5) {
    queue.at(0).classList.add("animate-text");
  }
  queue.push(button);

  if (checkWin()) {
    setTimeout(() => {
      alert("winner is " + button.innerText);
    }, 100);
    document.querySelectorAll(".game-button").forEach((button) => {
      button.classList.remove("animate-text");
    });
    gameOver = true;
  } else if (checkTie()) {
    setTimeout(() => {
      alert("tie");
    }, 100);
    document.querySelectorAll(".game-button").forEach((button) => {
      button.classList.remove("animate-text");
    });
    gameOver = true;
  }
}

function reset() {
  document.querySelectorAll(".game-button").forEach((button) => {
    button.innerText = "";
    button.classList.remove("animate-text");
  });
  currentChar = "X";
  gameOver = false;
  queue = [];
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      document.querySelectorAll(".game-button")[a].innerText ===
        document.querySelectorAll(".game-button")[b].innerText &&
      document.querySelectorAll(".game-button")[b].innerText ===
        document.querySelectorAll(".game-button")[c].innerText &&
      document.querySelectorAll(".game-button")[a].innerText !== ""
    ) {
      return true;
    }
  }
  return false;
}
function checkTie() {
  const buttons = document.querySelectorAll(".game-button");
  for (let button of buttons) {
    if (button.innerText === "") {
      console.log("BOŞ HÜCRE VAR");
      return false;
    }
  }
  console.log("BOŞ HÜCRE YOK");
  return true;
}
