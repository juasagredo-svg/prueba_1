import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';
import peliculas from '../data/movies';


const PATRONES_PROHIBIDOS = [
  /@/,
  /https?:\/\/\S+/i,
  /www\.\S+/i,
  /\b(instagram|facebook|tiktok|whatsapp|wsp|telegram|twitter|youtube)\b/i,
  /\b(sígueme|sigueme|síguenos|siguenos|promo|descuento|compra ahora|link en bio)\b/i
];

function contieneContenidoProhibido(texto) {
  return PATRONES_PROHIBIDOS.some(patron => patron.test(texto));
}

 function Sinopsis() {
  const { id } = useParams();
  const pelicula = peliculas.find(p => p.id === Number(id)) || peliculas[0];

  const [reseñas, setReseñas] = useState(pelicula.reseñas);
  const [autor, setAutor] = useState('');
  const [texto, setTexto] = useState('');
  const [errorAutor, setErrorAutor] = useState('');
  const [errorTexto, setErrorTexto] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setErrorAutor('');
    setErrorTexto('');

    const valorAutor = autor.trim();
    const valorTexto = texto.trim();
    let valido = true;

    if (valorAutor.length < 2) {
      setErrorAutor('Ingresa un nombre de al menos 2 caracteres.');
      valido = false;
    }

    if (valorTexto.length < 15) {
      setErrorTexto('Cuéntanos un poco más (mínimo 15 caracteres).');
      valido = false;
    } else if (contieneContenidoProhibido(valorTexto)) {
      setErrorTexto('No se permiten menciones (@), enlaces ni contenido publicitario.');
      valido = false;
    }

    if (!valido) return;

    setReseñas([...reseñas, { autor: valorAutor, texto: valorTexto }]);
    setAutor('');
    setTexto('');
  }

  return (
    <main className="cuerpo">
      <section className="ficha">
        <div className="poster">
          <h1 className="tituloPeli">{pelicula.titulo}</h1>
          <img
            className="poster-img"
            src={pelicula.poster}
            alt={`Cartel de la película ${pelicula.titulo}`}
          />
        </div>

        <div className="sinopsis">
          <h2 className="sub-titulo">Sinopsis de la película</h2>
          <p className="fecha">Fecha de estreno: <span>{pelicula.fechaEstreno}</span></p>
          <p className="tiempo">Duración: <span>{pelicula.duracion}</span></p>
          <p className="genero">Género: <span>{pelicula.genero}</span></p>
          <h3 className="titulo-resumen">Resumen</h3>
          <p className="resumen">{pelicula.resumen}</p>
        </div>

        <div className="aprobacion">
          <div className="puntaje publico">
            <img
              className="miniatura"
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%23C9A24B'/%3E%3Cpath d='M14 25l7 7 13-14' fill='none' stroke='%2315130F' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
              alt="Ícono de aprobación del público"
            />
            <div className="puntaje-texto">
              <span className="valor">{pelicula.aprobacionPublico}%</span>
              <h2 className="publico">Público general</h2>
            </div>
          </div>
          <div className="puntaje profesional">
            <img
              className="miniatura"
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%237A2331'/%3E%3Cpath d='M24 12l3.2 6.7 7.3 1-5.3 5.2 1.3 7.3L24 28.8l-6.5 3.4 1.3-7.3-5.3-5.2 7.3-1z' fill='%23EDE6D8'/%3E%3C/svg%3E"
              alt="Ícono de aprobación de la crítica"
            />
            <div className="puntaje-texto">
              <span className="valor">{pelicula.aprobacionCritica}%</span>
              <h2 className="profesional">Crítica especializada</h2>
            </div>
          </div>
        </div>

        <div className="reseñas">
          {reseñas.map((r, i) => (
            <div className="reseña" key={i}>
              <p className="reseña-texto">"{r.texto}"</p>
              <p className="reseña-autor">— {r.autor}</p>
            </div>
          ))}
        </div>

        <div className="formulario-reseña">
          <h3 className="titulo-resumen">Deja tu reseña</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="campo">
              <label htmlFor="reseña-autor-input">Tu nombre</label>
              <input
                id="reseña-autor-input"
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                autoComplete="name"
                required
              />
              {errorAutor && <p className="error" role="alert">{errorAutor}</p>}
            </div>
            <div className="campo">
              <label htmlFor="reseña-texto-input">Tu opinión</label>
              <textarea
                id="reseña-texto-input"
                rows="3"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                required
              />
              <p className="ayuda">No se permiten menciones (@), enlaces ni contenido publicitario.</p>
              {errorTexto && <p className="error" role="alert">{errorTexto}</p>}
            </div>
            <button type="submit" className="boton-reseña">Publicar reseña</button>
          </form>
        </div>
      </section>
    </main>
  );
}
export default Sinopsis