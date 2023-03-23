const loginFormEl = document.querySelector('.login-form');
console.log(loginFormEl);

loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
       
    if (email.value === "" || password.value === "") {
        return alert('Будь ласка заповніть всі поля форми');
    }

    const data = { 
   [ email.name ]: email.value, 
   [ password.name ]: password.value 
};

    console.log(data);

    event.currentTarget.reset();
})