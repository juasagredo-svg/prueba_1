import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
function Header() {
    const ruta = useLocation().pathname;

    return (
        <>
            {(ruta === '/register' || ruta === '/login') ? (
                <header>
                    <Link to="/prueba_1/">
                        <h1>SpaceMovie</h1>
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to="/login">Iniciar Sesion</Link></li>
                            <li><Link to="/register">Registrarse</Link></li>
                        </ul>
                    </nav>
                </header>
            ) : (
                <header className="cabezal">
                    <div className="cabezal-interior">
                        <Link to="/prueba_1/" className="tituloPagina">SpaceMovie</Link>
                        <nav className="barra" aria-label="Navegación principal">
                            <Link to="/login">Iniciar sesión</Link>
                            <Link to="/register">Registrar</Link>
                        </nav>
                    </div>
                </header>
            )}

            
        </>
    );
}

export default Header;