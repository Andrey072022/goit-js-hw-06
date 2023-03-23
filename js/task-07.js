const inputFontSizeEl = document.querySelector('#font-size-control');

// console.log(inputFontSizeEl);

const inputInsideEl = document.querySelector('#text');

// console.log(inputInsideEl);

inputInsideEl.style.fontSize = inputFontSizeEl.value + 'px';

inputFontSizeEl.addEventListener('input', (event) => {
    inputInsideEl.style.fontSize = event.currentTarget.value + 'px';
})