const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener("input", () => {
    if (userNameInput.value) {
        userNameOutput.textContent = userNameInput.value;
    } else {
        userNameOutput.textContent = 'Anonymous';
    }

});


