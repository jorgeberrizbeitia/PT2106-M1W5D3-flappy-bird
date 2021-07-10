class Game {
  constructor() {
    // arguments are used to personalize the objects
    this.bg = new Image();
    this.bg.src = "./images/bg.png"
    this.bird = new Bird();
    this.pipesArr = [];
    this.isGameOn = true;
  }

  generatePipes = () => {

    // if the array is empty  || the last pipe collides with the middle of canvas
    if (!this.pipesArr.length || this.pipesArr[this.pipesArr.length - 1].x === canvas.width / 2) {
      // TO CREATE THE FIRST PIPE
      // create a random position for pipe
      let randomPos = Math.floor(Math.random() * -canvas.height / 2)

      // we want to create a pipe
      let pipe = new Pipe(randomPos, "./images/obstacle_top.png")
  
      // we want to add the pipe to the array
      this.pipesArr.push(pipe)

      // CREATE THE SECOND PIPE

      // position of pipe top + height of pipe + constant of 3 times bird
      let randomPos2 = randomPos + pipe.height + this.bird.height * 3
      let pipe2 = new Pipe(randomPos2, "./images/obstacle_bottom.png")
      this.pipesArr.push(pipe2)
    }
  }

  gameOverCheck = () => {
    this.pipesArr.forEach(eachPipe => {
      if (this.bird.birdPipeCollision(eachPipe)) {
        // console.log("colliding!")
        // stop the game from running
        this.isGameOn = false;
        // remove the canvas
        canvas.style.display = "none"
        // display the gameover screen
        gameoverScreen.style.display = "flex"
      }
    })
  }

  gameLoop = () => {
    // 1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. movements of elements or other actions
    this.bird.birdGravity()
    this.generatePipes()
    // this.pipesArr[0].pipeMove()
    this.pipesArr.forEach(eachPipe => {
      eachPipe.pipeMove()
    })
    this.gameOverCheck()

    // 3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

    this.bird.drawBird()

    // this.pipesArr[0].drawPipe()
    this.pipesArr.forEach(eachPipe => {
      eachPipe.drawPipe()
    })
  
    // 4. request animation
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop)
    }
  }
}

