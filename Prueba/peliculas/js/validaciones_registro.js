document.getElementById('formularioRegistro').addEventListener('submit', function(evento) {
  evento.preventDefault();
  
  let esValido = true;
  const nombre = document.getElementById('nombreCompleto');
  const correo = document.getElementById('correoRegistro');
  const clave = document.getElementById('claveRegistro');

  const errorNombre = document.getElementById('errorNombre');
  const errorCorreo = document.getElementById('errorCorreoRegistro');
  const errorClave = document.getElementById('errorClaveRegistro');

  // Limpia mensajes anteriores
  errorNombre.textContent = '';
  errorCorreo.textContent = '';
  errorClave.textContent = '';

  // Valida nombre
  if (!nombre.value.trim()) {
    errorNombre.textContent = 'El nombre completo es requerido.';
    esValido = false;
  }

  // Valida correo
  const patronCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!correo.value.trim()) {
    errorCorreo.textContent = 'El correo electronico es requerido.';
    esValido = false;
  } else if (!patronCorreo.test(correo.value.trim())) {
    errorCorreo.textContent = 'El formato del correo no es valido.';
    esValido = false;
  }

  // Valida contraseña
  if (clave.value.length < 6) {
    errorClave.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    esValido = false;
  }

  if (esValido) {
    alert('¡Registro exitoso! Redirigiendo al inicio de sesion...');
    window.location.href = 'index.html';
  }
});