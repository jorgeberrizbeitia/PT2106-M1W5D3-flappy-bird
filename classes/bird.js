class Bird {
  constructor() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.width = 40;
    this.height = 40;
    this.image = new Image();
    this.image.src = "../images/flappy.png";
    this.speed = 1;
  }

  // drawing of the bird
  drawBird = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  birdGravity = () => {
    this.y++
  }

  birdJump = () => {
    this.y -= 40
  }
}