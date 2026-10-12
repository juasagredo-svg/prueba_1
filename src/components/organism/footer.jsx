import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const ruta = useLocation().pathname;

  return (
    <>
      {(ruta === '/register' || ruta === '/login') ? null : (
        <footer className="info1">
          <div className="info-interior">
            <div className="info-marca">
              <p className="info-logo">SpaceMovie</p>
              <p>Reseñas, sinopsis y valoraciones de estrenos y clásicos del cine.</p>
            </div>

            <nav className="info-enlaces" aria-label="Enlaces del sitio">
              <p className="info-titulo-columna">Explorar</p>
              <Link to="/">Inicio</Link>
              <Link to="/register">Registrar</Link>
              <Link to="/login">Iniciar sesión</Link>
            </nav>

            <div className="info-contacto">
              <p className="info-titulo-columna">Contacto</p>
              <p>contacto@spacemovie.cl</p>
              <p>+56 9 1234 5678</p>
            </div>

            <div className="info-redes">
              <p className="info-titulo-columna">Síguenos</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          <p className="info-copy">© 2026 SpaceMovie. Proyecto académico DSY1104.</p>
        </footer>
      )}
    </>
  );
}

export default Footer;