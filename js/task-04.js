let initialValue = 0;
let step = 1;
const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', () => {
    initialValue -= step;
    valueEl.textContent = initialValue;
    console.log('Decrement');
});

counterEl.lastElementChild.addEventListener('click',() => {
    initialValue += step;
    valueEl.textContent = initialValue;
      console.log('Increment');
});


