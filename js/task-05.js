const inputId = document.querySelector('#name-input');
console.log(inputId);
const outputId = document.querySelector('#name-output');
console.log(outputId);


inputId.addEventListener('input', handleTextInput);

function handleTextInput (event) {
    if (inputId.value === "") {
        outputId.textContent = `Anonymous`;
    } else 
        (outputId.textContent = event.currentTarget.value);
};

