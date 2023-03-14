let counterValue = 0;

const valueId = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueId.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueId.textContent = counterValue;
});

console.log(counterValue);
console.log(valueId);