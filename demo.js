// js file

const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".currentColor");

const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
};

mainButton.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  currentColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});

// -----------------------Concept---->

// Math.floor(Math.random() * 255)
// 77
// Math.floor(Math.random() * 255)

// 0
// Math.floor(Math.random() * 255)

// 162
// Math.floor(Math.random() * 255)

// 126
// Math.floor(Math.random() * 255)

// 25
