// Game state
let game = true;
let play = true;
let origin = 0;
let score = false;
let points = 0;

// Canvas setup
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 50;

const shotboxWidth = 5 * (canvas.width / 50);
const limeboxWidth = 12 * (canvas.width / 50);

// Draw rectangles
function drawRectangles() {
  ctx.fillStyle = "lime";
  ctx.fillRect(
    canvas.width / 2 - limeboxWidth / 2,
    0,
    limeboxWidth,
    canvas.height,
  );
  ctx.fillStyle = "red";
  ctx.fillRect(origin * (canvas.width / 100), 0, shotboxWidth, canvas.height);
}

// Animation function
async function shotmeter() {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  while (game) {
    for (let i = 0; i < 89; i++) {
      await timer(20);
      origin = origin + 1;
      if (origin > canvas.width) {
        origin = canvas.width;
      }

      collisionDetection();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shotbox.x = origin * (canvas.width / 100);
      drawRectangles();
    }
    // Loop through to move the red rectangle back
    for (let i = 0; i < 89; i++) {
      await timer(20);
      origin = origin - 1;
      if (origin < 0) {
        origin = 0;
      }

      collisionDetection();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shotbox.x = origin * (canvas.width / 100);
      drawRectangles();
    }
  }
}

// Collision detection
function collisionDetection() {
  if (
    shotbox.x < limebox.x + limebox.width &&
    shotbox.x + shotbox.width > limebox.x &&
    shotbox.y < limebox.y + limebox.height &&
    shotbox.y + shotbox.height > limebox.y
  ) {
    score = true;
  } else {
    score = false;
  }
}

// Create rectangle 
let shotbox = {
  x: origin * (canvas.width / 100),
  y: 0,
  width: shotboxWidth,
  height: canvas.height,
};
let limebox = {
  x: canvas.width / 2 - limeboxWidth / 2,
  y: 0,
  width: limeboxWidth,
  height: canvas.height,
};

function shootBall() {
  const scorecount = document.getElementById("scorecount");
  if (score) {
    const ball = document.getElementById("ball");

    ball.style.animation = "scoreball";
    ball.style.animationDuration = "2s";

    ball.style.animationPlayState = "running";

    ball.addEventListener("animationend", () => {
      score = false;
      ball.style.animation = "";
      // Enable button after animation finishes
      document.getElementById("shootBtn").disabled = false;
    });

    points += 1;
    console.log(points);
  } else {
    const ball = document.getElementById("ball");
    const missAnimation = Math.floor(Math.random() * 2) + 1;

    if (missAnimation == 1) {
      // Set the animation name
      ball.style.animation = "missball";
      ball.style.animationDuration = "2s";

      ball.style.animationPlayState = "running";

      ball.addEventListener("animationend", () => {
        score = false;
        ball.style.animation = "";
        // Enable button after animation finishes
        document.getElementById("shootBtn").disabled = false;
      });
    }

    if (missAnimation == 2) {
      // Set the animation name
      ball.style.animation = "missball2";
      ball.style.animationDuration = "2s";

      ball.style.animationPlayState = "running";

      ball.addEventListener("animationend", () => {
        score = false;
        ball.style.animation = "";
        // Enable button after animation finishes
        document.getElementById("shootBtn").disabled = false;
      });
    }
  }
  scorecount.textContent = `Score: ${points}`;
}

drawRectangles();
shotmeter();

document.getElementById("shootBtn").addEventListener("click", () => {
  document.getElementById("shootBtn").disabled = true;
  shootBall();
});
