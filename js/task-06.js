
const inputEl = document.querySelector(`#validation-input`);

 const dataLenght = Number(inputEl.getAttribute('data-length'));
console.log(dataLenght);


const handleInput = event => {
    
    if (event.target.value.length === dataLenght) {
        inputEl.classList.add(`valid`);
        inputEl.classList.remove(`invalid`);
    
    } else
       inputEl.classList.add(`invalid`);
};
inputEl.addEventListener('blur', handleInput);