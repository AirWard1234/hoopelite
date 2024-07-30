const OPEN_API_KEY = "sk-proj-PVRw2lA0P6ikK04jqrC1T3BlbkFJAZwpfxZLVDKWmCjqPx1Q";
const API_URL = "https://api.openai.com/v1/chat/completions";

const generateAnswer = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "I have thought of an NBA player, can you guess who it is using only yes or no questions?",
          },
        ],
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("The error is:", error);
  }
};

let infoHoverL = document.getElementById("front__hover");
let infoCardL = document.getElementById("info__content");
let infoHoverR = document.getElementById("front__hoverR");
let infoCardR = document.getElementById("info__contentR");
let homeScreen = document.getElementById("nikola__home__content");
let mode1Select = document.getElementById("mode1");
let mode2Select = document.getElementById("mode2");
let mode1Screen = document.getElementById("mode1__game__container");
let mode2Screen = document.getElementById("mode2__game__container");

infoHoverL.addEventListener("mouseover", function () {
  infoCardL.style.transform = "translateY(-50%)";
});

infoHoverL.addEventListener("click", generateAnswer);

infoHoverL.addEventListener("mouseleave", function () {
  infoCardL.style.transform = "translateY(0%)";
});

infoHoverR.addEventListener("mouseover", function () {
  infoCardR.style.transform = "translateY(-50%)";
});

infoHoverR.addEventListener("mouseleave", function () {
  infoCardR.style.transform = "translateY(0%)";
});

mode1Select.addEventListener("click", function () {
  mode1();
});

mode2Select.addEventListener("click", function () {
  mode2();
});

function mode1() {
  homeScreen.style.display = "none";
  mode1Screen.style.display = "flex";
}

function mode2() {
  homeScreen.style.display = "none";
  mode2Screen.style.display = "flex";
}