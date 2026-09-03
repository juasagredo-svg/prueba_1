document.getElementById('formularioInicio').addEventListener('submit', function(evento) {
  evento.preventDefault();
  
  let esValido = true;
  const correo = document.getElementById('correo');
  const clave = document.getElementById('clave');
  
  const errorCorreo = document.getElementById('errorCorreo');
  const errorClave = document.getElementById('errorClave');

  // Limpia mensajes anteriores
  errorCorreo.textContent = '';
  errorClave.textContent = '';

  // Valida correo
  const patronCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!correo.value.trim()) {
    errorCorreo.textContent = 'El correo electrónico es obligatorio.';
    esValido = false;
  } else if (!patronCorreo.test(correo.value.trim())) {
    errorCorreo.textContent = 'Ingrese un correo electronico valido.';
    esValido = false;
  }

  // Valida contraseña
  if (!clave.value) {
    errorClave.textContent = 'Por favor ingrese su contraseña.';
    esValido = false;
  }

  if (esValido) {
    alert('¡Inicio de sesion exitoso!');
  }
});