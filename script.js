"use strict";


const boxValue = Array.from(document.querySelectorAll(".game__box--child"));
let turn = "O";
const gameInfo = document.querySelector(".game__turn");
const resetGame = document.querySelector(".game__reset");
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let win = false;

function initializationGame() {
  boxValue.forEach(e => {
    e.textContent = "";
    win = false;
    gameInfo.textContent = "start the game.";
  });
}
initializationGame();

boxValue.forEach(element => {
  element.addEventListener("click", () => {
    if (!element.textContent && !win) {
    
      element.textContent = turn;
      gameInfo.textContent = `Turn : ${turn}`;
      turn = turn === "O" ? "X" : "O";
      gameInfo.textContent = `Turn : ${turn}`;
      checkWin();
    }
    if (!element.textContent && !win) {
      console.log("no on won the match");
    }
  });
});

resetGame.addEventListener("click", () => {
  initializationGame();
});

function checkWin() {
  winPattern.forEach(([first, second, third], i) => {
    if (
      boxValue[first].textContent === boxValue[second].textContent &&
      boxValue[third].textContent === boxValue[second].textContent &&
      boxValue[third].textContent === boxValue[first].textContent &&
      boxValue[first].textContent != ""
    ) {
      gameInfo.textContent = `${turn === "O" ? "X" : "O"} won the match.`;
      win = true;
    }
  });
}
