//Validacion de formulario


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,16}$/ // 7 a 16 numeros.
}





const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if(expresiones.nombre.test(e.target.value)) {


      } else {
        document.getElementById(`grupo__nombre`).classList.add(`formulario__grupo-incorrecto`);
      }

    break;

    case "telefono": 

    break;

    case "email": 

    break;

    case "mensaje": 

    break;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener(`submit`, (e) => {
  e.preventDefault(); 
});











/*const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  if (usuario.value === "") {
    alert("Por favor, escribi tu nombre.");
    usuario.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribi tu email");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, chequea que tu email sea válido");
    emailAddress.focus();
    return false;
  }
  
  return true; 
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);   */
