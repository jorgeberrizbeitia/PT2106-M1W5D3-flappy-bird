// main.js => Managing DOM elements & event listeners

// GLOBAL VARIABLES

// canvas setup
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

// DOM elements
let gameoverScreen = document.querySelector("#gameover-screen")
let splashScreen = document.querySelector("#splash-screen")
let startButton = document.querySelector("#start-btn")
let restartButton = document.querySelector("#restart-btn")

// main game global variable
let gameObj;


// ADD EVENT LISTENERS
startButton.addEventListener("click", () => {
  // show the canvas DOM element
  canvas.style.display = "block";
  // hide the splash screen DOM element
  splashScreen.style.display = "none"

  // here we need to create the game
  gameObj = new Game() // => game will have all properties and methods of Game class!

  gameObj.gameLoop() // => invoke method
  // here we need to start the game
})

canvas.addEventListener("click", () => {
  gameObj.bird.birdJump()
})

restartButton.addEventListener("click", () => {
    // show the canvas DOM element
    canvas.style.display = "block";
    // hide the splash screen DOM element
    gameoverScreen.style.display = "none"
  
    // here we need to create the game
    gameObj = new Game() // => game will have all properties and methods of Game class!
  
    gameObj.gameLoop() // => invoke method
    // here we need to start the game
})

