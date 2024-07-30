let start = document.getElementById("startBtn");
let homePage = document.getElementById("kobe__screen");
let selectPage = document.getElementById("select__screen");
let buttonL = document.getElementById("buttonL");
let buttonR = document.getElementById("buttonR");
let card = document.querySelectorAll(".card");
let main = document.getElementById("card");
let sideCard = document.querySelectorAll(".game__level__side");
let mainParent = document.getElementById("main__parent");
let leftChild = document.getElementById("l");
let gamePage = document.getElementById("game__screen");
let rightChild = document.getElementById("r");
let currentPage = homePage;
let nextPage = selectPage;
let click = 0;
let currentPosition = 0;
leftChild.addEventListener("click", () => {
  window.location.href = "nbaQuiz.html";
});
main.addEventListener("click", () => {
  window.location.href = "dunk.html";
});
rightChild.addEventListener("click", () => {
  window.location.href = "shoot.html";
});
function cardPosition(direction) {
  if (direction === "l") {
    if (click > 1 || click < -1) {
    } else {
      setTimeout(() => {
        currentPosition--;
        card.forEach((card) => {
          // Base transformation
          let transformValue = `translateX(${currentPosition}%)`;
          scaleValue = 1 + Math.abs(currentPosition) / 1000;
          transformValue += `scale(${scaleValue})`;

          // Apply the combined transformation
          card.style.transform = transformValue;
        });
      }, 10);
    }
  } else {
    if (click > 1 || click < -1) {
    } else {
      setTimeout(() => {
        currentPosition++;
        card.forEach((card) => {
          // Base transformation
          let transformValue = `translateX(${currentPosition}%)`;
          scaleValue = 1 + Math.abs(currentPosition) / 1000;
          transformValue += `scale(${scaleValue})`;

          // Apply the combined transformation
          card.style.transform = transformValue;
        });
      }, 10);
    }
  }
  return currentPosition;
}
/*
function pageUpdate(currentPage, nextPage, displayType) {
  currentPage.style.display = "none";
  nextPage.style.display = `${displayType}`;
}
start.addEventListener("click", () => {
  pageUpdate(currentPage, nextPage, "grid");
});*/

let isRunning = false;
const totalPositions = 3;
let viewPosition = Math.floor(totalPositions / 2);
const delay = 10;

if (viewPosition < 0) viewPosition = 0;
if (viewPosition >= totalPositions) viewPosition = totalPositions - 1;

buttonL.addEventListener("click", () => {
  if (viewPosition <= 0) return;

  viewPosition--;

  console.log("Moved view left to position:", viewPosition);

  for (let i = 0; i < 160; i++) {
    setTimeout(() => {
      cardPosition("r");
    }, i * delay);
  }
});

buttonR.addEventListener("click", () => {
  if (viewPosition >= totalPositions - 1) return;

  viewPosition++;

  console.log("Moved view right to position:", viewPosition);

  for (let i = 0; i < 160; i++) {
    setTimeout(() => {
      cardPosition("l");
    }, i * delay);
  }
});

let levelInfo = {
  selectedLevel: "",
  level1: {
    images: [1, 1, 1],
    key: [3, 2, 1],
  },
  level2: {
    images: [1, 1, 1],
    key: [3, 2, 1],
  },
  level3: {
    images: [1, 1, 1],
    key: [3, 2, 1],
  },
};

/* function runGame(info) {
  pageUpdate(selectPage, gamePage, "flex");
  
}

card.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.id.includes("l")) {
      levelInfo.selectedLevel = "level1";
      console.log(levelInfo);
    } else if (card.id.includes("card")) {
      levelInfo.selectedLevel = "level2";
      console.log(levelInfo);
    } else if (card.id.includes("r")) {
      levelInfo.selectedLevel = "level3";
      console.log(levelInfo);
    } else {
      levelInfo.selectedLevel = "err";
      console.log(levelInfo);
    }
    runGame(levelInfo);
  });
});
*/
