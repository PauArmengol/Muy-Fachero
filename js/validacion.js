//Validacion de formulario
const btnEnviar = document.getElementById('btn-enviar');

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

submitBtn.addEventListener('click', validate);
