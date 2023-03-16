const controls = document.querySelector('#controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const color = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = color;
    boxes.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

createBtn.addEventListener('click', () => {
  const amount = +controls.querySelector('input').value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);