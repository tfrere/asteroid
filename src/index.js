import Game from "./Game.js";

// INSTANTIATE

window.setTimeout(() => {
  const canvasElem = document.getElementById("canvas");
  new Game(canvasElem);
}, 500);
