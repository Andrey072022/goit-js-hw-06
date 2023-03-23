function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorTextEl = document.querySelector('.color');
const changeBtnEl = document.querySelector('.change-color');


changeBtnEl.addEventListener('click', () => {
const hexColor = getRandomHexColor();
document.body.style.backgroundColor = hexColor;
colorTextEl.textContent = hexColor;
console.log(hexColor);
});









