// Retrieving HTML element from the DOM

//1
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/////////////////////////////////////////////////////////
// 3
// function to update class and message for errors
const showError = (input, message) => {

    const formControl = input.parentElement;
    // class update
    formControl.className = 'form-control error';
    // get small element in formControll
    const small = formControl.querySelector('small');
    // show message
    small.innerText = message;
}

//4
// function to update class and message for success
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



////////////////////////////////////////////////////////
// 2
// submit button
form.addEventListener('submit', (e) => {
    // stop page for reloading
    e.preventDefault();


    //   check if username is empty
    if (username.value === '') {
        showError(username, 'Username is required');
    }else{
        showSuccess(username);
    }
    //   check if email is empty
    if (email.value === '') {
        showError(email, 'Email is required');
    }else{
        showSuccess(email);
    }
    //   check if username is empty

    if (password.value === '') {
        showError(password, 'password is required');
    }else{
        showSuccess(password);
    }
    //   check if username is empty

    if (password2.value === '') {
        showError(password2, 'Confirm Password is required');
    }else{
        showSuccess(password2);
    }
});

