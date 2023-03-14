const validInput = document.querySelector('#validation-input');
const lengthInput = document.querySelector('input[data-length="6"]');

validInput.addEventListener('blur', () => {
    if (validInput.value.length === 6) {
        validInput.classList.add('valid');
        validInput.classList.remove('invalid');
    } else {
        validInput.classList.add('invalid');
        validInput.classList.remove('valid');
    };
});
