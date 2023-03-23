function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector('button[data-create]');
console.log(createBtnEl);
const destroyBtnEl = document.querySelector('button[data-destroy]');
console.log(destroyBtnEl);
const divBoxesEl = document.querySelector('#boxes');
console.log(divBoxesEl);
const divControlsEl = document.querySelector('#controls');
console.log(divControlsEl);

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBoxesEl.innerHTML = " ";
};

function createBoxes() {
  const quantity = divControlsEl.firstElementChild.value;
  const collectionBoxes = [];
  let sizeHeight = 30;
  let sizeWidth = 30;

  for (let i = 0; i < quantity; i += 1) {
    const box = document.createElement('div');
    box.style.height = `${sizeHeight}px`;
    box.style.width = `${sizeWidth}px`;
    sizeHeight += 10;
    sizeWidth += 10;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    collectionBoxes.push(box);
  }
  divBoxesEl.append(...collectionBoxes);
  console.log(divBoxesEl);
};
console.log(divBoxesEl);