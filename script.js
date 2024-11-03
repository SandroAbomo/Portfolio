const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger__icon");

const toggleMenu = function () {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

// const left = document.querySelector(".arrow-left");
// const right = document.querySelector(".arrow-right");

const jsImages = document.querySelector(".js__img");
const jsDemoBtn = document.querySelector(".demoBtn-js");
const jsGitBtn = document.querySelector(".gitBtn-js");

const images = [
  "flappybird.png",
  "diceGame.png",
  "dadJoke.png",
  "GuessMyNumber.png",
];

const liveDemos = [
  "https://sandroabomo.github.io/Flappy-bird/",
  "https://sandroabomo.github.io/pig-game/",
  "https://sandroabomo.github.io/Dad-Jokes/",
  "https://sandroabomo.github.io/Guess-my-number/",
];

const gitLinks = [
  "https://github.com/SandroAbomo/Flappy-bird",
  "https://github.com/SandroAbomo/pig-game",
  "https://github.com/SandroAbomo/Dad-Jokes",
  "https://github.com/SandroAbomo/Guess-my-number",
];

let i = 0;

function jsbtnLeft() {
  if (i <= 0) i = images.length;
  i--;
  console.log(i);
  setImg();
}

function jsbtnRight() {
  if (i >= images.length - 1) i = -1;
  i++;
  setImg();
}

function setImg() {
  jsImages.setAttribute("src", "images/" + images[i]);

  jsDemoBtn.setAttribute("href", liveDemos[i]);
  jsGitBtn.setAttribute("href", gitLinks[i]);
}
setImg();
