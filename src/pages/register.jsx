import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';
import { validarRegistro } from '../data/register';

function Register() {
  const navigate = useNavigate();

  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoRegistro, setCorreoRegistro] = useState('');
  const [claveRegistro, setClaveRegistro] = useState('');

  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorClave, setErrorClave] = useState('');

  function handleSubmit(evento) {
    evento.preventDefault();

    const { valido, errores } = validarRegistro(
      nombreCompleto,
      correoRegistro,
      claveRegistro
    );

    setErrorNombre(errores.nombre || '');
    setErrorCorreo(errores.correo || '');
    setErrorClave(errores.clave || '');

    if (valido) {
      alert('¡Registro exitoso! Redirigiendo al inicio de sesión...');
      navigate('../login');
    }
  }

  return (
    <main>
      <section className="contenedor-formulario">
        <h2>Crear Cuenta</h2>

        <form id="formularioRegistro" onSubmit={handleSubmit} noValidate>
          <div className="grupo-campo">
            <label htmlFor="nombreCompleto">Nombre Completo:</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              placeholder="Juan Pérez"
              autoComplete="name"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
              required
            />
            {errorNombre && (
              <small className="mensaje-error" id="errorNombre" role="alert">
                {errorNombre}
              </small>
            )}
          </div>

          <div className="grupo-campo">
            <label htmlFor="correoRegistro">Correo Electrónico:</label>
            <input
              type="email"
              id="correoRegistro"
              name="correoRegistro"
              placeholder="ejemplo@correo.com"
              autoComplete="email"
              value={correoRegistro}
              onChange={(e) => setCorreoRegistro(e.target.value)}
              required
            />
            {errorCorreo && (
              <small className="mensaje-error" id="errorCorreoRegistro" role="alert">
                {errorCorreo}
              </small>
            )}
          </div>

          <div className="grupo-campo">
            <label htmlFor="claveRegistro">Contraseña:</label>
            <input
              type="password"
              id="claveRegistro"
              name="claveRegistro"
              placeholder="Mínimo 6 caracteres"
              autoComplete="new-password"
              value={claveRegistro}
              onChange={(e) => setClaveRegistro(e.target.value)}
              required
            />
            {errorClave && (
              <small className="mensaje-error" id="errorClaveRegistro" role="alert">
                {errorClave}
              </small>
            )}
          </div>

          <button type="submit">Registrarse</button>
        </form>

        <p>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;