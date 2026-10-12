const PATRON_CORREO = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function validarRegistro(nombreCompleto = '', correo = '', clave = '') {
  const errores = {};
  let valido = true;

  const nombreLimpio = nombreCompleto.trim();
  const correoLimpio = correo.trim();

  if (!nombreLimpio) {
    errores.nombre = 'El nombre completo es requerido.';
    valido = false;
  }

  if (!correoLimpio) {
    errores.correo = 'El correo electrónico es requerido.';
    valido = false;
  } else if (!PATRON_CORREO.test(correoLimpio)) {
    errores.correo = 'El formato del correo no es válido.';
    valido = false;
  }

  if (!clave) {
    errores.clave = 'La contraseña es requerida.';
    valido = false;
  } else if (clave.length < 6) {
    errores.clave = 'La contraseña debe tener al menos 6 caracteres.';
    valido = false;
  }

  return { valido, errores };
}