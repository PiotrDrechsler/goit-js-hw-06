function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const textColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

const changeColor = () => {
  const rngColor = getRandomHexColor();
  bodyColor.style.backgroundColor = `${rngColor}`;
  textColor.textContent = `${rngColor}`;
};

button.addEventListener("click", changeColor);
