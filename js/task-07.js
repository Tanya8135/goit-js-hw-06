const inputFs = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputFs.addEventListener('input', () => {
    const fontSize = inputFs.value + 'px';
    text.style.fontSize = fontSize;
});
