// pipe.js => class Pipe

class Pipe {
  constructor(yPos, srcURL) {
    this.x = canvas.width;
    this.y = yPos;
    this.width = 80;
    this.height = canvas.height * 0.75
    this.speed = 1
    this.image = new Image();
    this.image.src = srcURL;
  }

  // method to draw the pipe
  drawPipe = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  // method that moves the pipe
  pipeMove = () => {
    this.x -= this.speed
  }
}

// let pipe1 = new Pipe(50, "/images") // => example of drawing a pipe