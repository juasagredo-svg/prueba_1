const PATRON_CORREO = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function validarLogin(correo, clave) {
  const errores = {};
  let valido = true;

  const correoLimpio = correo.trim();

  if (!correoLimpio) {
    errores.correo = 'El correo electrónico es obligatorio.';
    valido = false;
  } else if (!PATRON_CORREO.test(correoLimpio)) {
    errores.correo = 'Ingrese un correo electrónico válido.';
    valido = false;
  }

  if (!clave) {
    errores.clave = 'Por favor ingrese su contraseña.';
    valido = false;
  }

  return { valido, errores };
}