//Validacion de formulario


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,16}$/ // 7 a 16 numeros.
}





const validarFormulario = () => {
  console.log(`se ejecuto`);
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
