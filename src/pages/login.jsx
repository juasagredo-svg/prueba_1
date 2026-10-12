import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';
import { validarLogin } from '../data/login';

function Login() {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorClave, setErrorClave] = useState('');

    function handleSubmit(evento) {
        evento.preventDefault();

        const { valido, errores } = validarLogin(correo, clave);

        setErrorCorreo(errores.correo || '');
        setErrorClave(errores.clave || '');

        if (valido) {
            alert('¡Inicio de sesión exitoso!');
        }
    }

    return (
        <main>
            <section className="contenedor-formulario">
                <h2>Iniciar Sesión</h2>

                <form id="formularioInicio" onSubmit={handleSubmit} noValidate>
                    <div className="grupo-campo">
                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            placeholder="ejemplo@correo.com"
                            autoComplete="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                        {errorCorreo && (
                            <small className="mensaje-error" id="errorCorreo" role="alert">
                                {errorCorreo}
                            </small>
                        )}
                    </div>

                    <div className="grupo-campo">
                        <label htmlFor="clave">Contraseña:</label>
                        <input
                            type="password"
                            id="clave"
                            name="clave"
                            placeholder="Tu contraseña"
                            autoComplete="current-password"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            required
                        />
                        {errorClave && (
                            <small className="mensaje-error" id="errorClave" role="alert">
                                {errorClave}
                            </small>
                        )}
                    </div>

                    <button type="submit">Entrar</button>
                </form>

                <p>
                    ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;