const form = document.getElementById("form");
const username = document.getElementById("username");
const titulo = document.getElementById("titulo");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error'); 
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const tituloValue = titulo.value.trim();
    const emailValue = email.value.trim();
    const mensajeValue = mensaje.value.trim();    

    if(usernameValue === '') {
        setError(username, 'Usuario es Requerido');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email es Requerido');
    } else if (!isValidEmail(emailValue )) {
        setError(email, 'Utilize un email valido');
    } else {
        setSuccess(email);
    }

    if(tituloValue === '') {
        setError(titulo,'Titulo es Requerido');
    } else if (tituloValue.lenght < 5) {
        setError(titulo, 'El Titulo debe contener al menos una palabra');
    } else {
        setSuccess(titulo);
    }

    if(mensajeValue === '') {
        setError(mensaje,'Mensaje es Requerido');
    } else if (mensajeValue.lenght < 10) {
        setError(mensaje, 'El Mensaje debe contener al menos 10 palabras');
    } else {
        setSuccess(mensaje);
    }
};