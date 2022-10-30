//Validacion de formulario


const btnEnviar = document.getElementById('btn-enviar');

function validarFormulario() {
    btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        const nombreUsuario = document.getElementById(`nombre`);
        const emailUsuario = document.getElementById('email');
        const emailValido = email => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        const mensajeUsuario = document.getElementById('mensaje');
        if(nombreUsuario.value === "") {
          alert("Ingresa tu nombre");
        } else if(emailUsuario.value === "") {
          alert("Ingresa tu email"); 
        } else if(!emailValido(emailUsuario.value)) {
          alert("Ingresa un email valido");
        } else if(mensajeUsuario.value === "") {
          alert("Ingresa tu mensaje");
        } else {
          alert("Mensaje enviado");
        }
    });
};

btnEnviar.addEventListener('click', validarFormulario());


