class Game {
  constructor() {
    // arguments are used to personalize the objects
    this.bg = new Image();
    this.bg.src = "../images/bg.png"
    this.bird = new Bird();
    this.pipes = [];
  }

  gameLoop = () => {
    // 1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. movements tof elements or other actions
    this.bird.birdGravity()

    // 3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

    this.bird.drawBird()
  
    // 4. request animation
    requestAnimationFrame(this.gameLoop)
  }
}

