const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 900;
const isMobile = window.innerWidth < 576;
const speed = isMobile ? 0.8 : 3;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function initStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = (Math.random() - 0.5) * canvas.width;
    this.y = (Math.random() - 0.5) * canvas.height;
    this.z = Math.random() * canvas.width;
  }

  update() {
    this.z -= speed;
    if (this.z <= 0) this.reset();
  }

  draw() {
    const sx = (this.x / this.z) * canvas.width + canvas.width / 2;
    const sy = (this.y / this.z) * canvas.height + canvas.height / 2;
    const radius = 1 - this.z / canvas.width;

    if (sx < 0 || sx >= canvas.width || sy < 0 || sy >= canvas.height) {
      this.reset();
      return;
    }

    ctx.beginPath();
    ctx.arc(sx, sy, radius * 1.5, 0, Math.PI * 1.5);
    ctx.fillStyle = "#a5a5a5";
    ctx.fill();
  }
}

function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.update();
    star.draw();
  }

  requestAnimationFrame(animate);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

$(document).ready(function () {
  resizeCanvas();
  animate();

  $(window).on("resize", function () {
    resizeCanvas();
  });
});
