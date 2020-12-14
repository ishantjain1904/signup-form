const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const messgae = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //using constraint api
    isValid = form.checkValidity();
    //style main message
    if(!isValid) {
        message.textContent = 'Please fill out all fields'
        messgae.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    //check password match
    if(password1El.value===password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green'; 
    } else {
        passwordsMatch = false;
        messgae.textContent = 'Make sure passwords match';
        messgae.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = red;
        password2El.style.borderColor = red;
        return;
    }
    //if form is valid and passwords match
    if(isValid && passwordsMatch) {
        message.textContent = 'Successfully registered';
        messgae.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    //do something with user data
}

function processFormData(e) {
    e.preventDefault();
    //validate form
    validateForm();
    //submit data if valid 
    if(!isValid && passwordsMatch) {
        storeFormData();
    }
}

//event listener
form.addEventListener('submit',processFormData);
