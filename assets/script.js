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


// 5
// function to check if email is valid
const isValidEmail = (email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//6
// function to check required is valid
const checkRequired = (inputArray)=>{
       inputArray.forEach(function(input){
           if (input.value === '') {
               console.log('hello')
               showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} required*`);
           }else{
               showSuccess(input);
           }
       });
}
////////////////////////////////////////////////////////
// 2
// submit button
form.addEventListener('submit', (e) => {
    // stop page for reloading
    e.preventDefault();

    checkRequired([username, email, password, password2]);

});

