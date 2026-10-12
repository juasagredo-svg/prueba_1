import React from 'react'
import '../styles/estilos.css'
import { Link } from 'react-router-dom';
function home() {
  return (
    <>
     <div className="container">
        <div className="movie-cards">
            <div className="card">
                <Link to="/sinopsis/1">
                    <img src="./images/COYOTE-VS.-ACME-–-ComediaAventura-copia.webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">coyote vs Acme</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 82/100 | 2025 | 1.30hr
                        </h3>
                        <p className="short-desc">Después de décadas fallando en atrapar al Correcaminos, el Coyote decide
                            hacer lo impensado: demandar a ACME</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/2">
                    <img src="./images/OIP (1).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">el padrino</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 90/100 | 1972 | 2.55hr
                        </h3>
                        <p className="short-desc">Tras un atentado contra la vida del patriarca de la familia Corleone, su
                            hijo menor, Michael, se ve arrastrado al mundo del crimen organizado que había jurado evitar
                        </p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/3">
                    <img src="./images/descargar (1).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">spider-man brand new day</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 88/100 | 2026 | 2.25hr
                        </h3>
                        <p className="short-desc">Han transcurrido cuatro años desde lo ocurrido en la anterior entrega, y
                            Peter es ahora un hombre adulto que vive en completa soledad.</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/4">
                    <img src="./images/descargar (3).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">interestellar</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 87/100 | 2014 | 2.49hr
                        </h3>
                        <p className="short-desc">La historia gira en torno a un grupo de intrépidos exploradores que se
                            adentran por uno de esos agujeros y viajan a través del mismo</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/5">
                    <img src="./images/descargar (4).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">venom</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 66/100 | 2018 | 1.52hr
                        </h3>
                        <p className="short-desc">Eddie Brock, un periodista en decadencia Durante una investigación entra
                            en contacto con un simbionte alienígena que se fusiona con su cuerpo.</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/6">
                    <img src="./images/OIP (2).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">spider-man into the spider-verse</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 81/100 | 2018 | 1.53hr
                        </h3>
                        <p className="short-desc">En un universo paralelo donde Peter Parker ha muerto, el adolescente Miles
                            Morales se convierte en el nuevo Spider-Man</p>

                    </div>
                </Link>
            </div>

            <div className="card">
                <Link to="/sinopsis/7">
                    <img src="./images/La-hora-de-la-desaparicion.webp" alt="poster1"/>

                    <div className="content">
                        <h1 className="name">la hora de la desaparicion</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 74/100 | 2025 | 2.8hr
                        </h3>
                        <p className="short-desc">En una pequeña ciudad, todos los alumnos de una misma clase excepto uno
                            desaparecen misteriosamente la misma noche y a la misma hora</p>

                    </div>
                </Link>
            </div>

            <div className="card">
                <Link to="/sinopsis/8">
                    <img src="./images/OIP (3).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">superman(2025)</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 60/100 | 2025 | 2.9hr
                        </h3>
                        <p className="short-desc">En un mundo cínico que ha perdido la fe en la bondad, Superman lucha por
                            reconciliar su herencia kryptoniana con los valores humanos que moldearon su carácter en
                            Smallville.</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/9">
                    <img src="./images/descargar (5).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">dune </h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 80/100 | 2021 | 2.35hr
                        </h3>
                        <p className="short-desc">En el año 10191, el planeta desértico Arrakis es el único lugar donde se
                            encuentra la especia melange, la sustancia más valiosa del universo</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/10">
                    <img src="./images/descargar.webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">demon slayer castillo infinito</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 84/100 | 2025 | 2.35hr
                        </h3>
                        <p className="short-desc">El Cuerpo de Exterminio de Demonios se adentra en el laberíntico y oscuro
                            Castillo Infinito, dominio de Muzan Kibutsuji, para librar la batalla definitiva</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/11">
                    <img src="./images/OIP (4).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">la odisea</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 90/100 | 2025 | 2.53hr
                        </h3>
                        <p className="short-desc">Tras la Guerra de Troya, el legendario rey de Ítaca, Odiseo (Ulises),
                            emprende
                            un viaje épico para regresar a su hogar junto a su esposa Penélope y su hijo Telémaco</p>

                    </div>
                </Link>

            </div>
            <div className="card">
                <Link to="/sinopsis/12">
                    <img src="./images/descargar (2).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">oppenheimer</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 93/100 | 2023 | 3hr
                        </h3>
                        <p className="short-desc">la película narra la vida de J. Robert Oppenheimer, físico teórico y
                            director del Proyecto Manhattan, responsable del desarrollo de la bomba atómica durante la
                            Segunda Guerra Mundial</p>

                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/sinopsis/13">
                    <img src="./images/OIP (5).webp" alt="poster1"/>
                    <div className="content">
                        <h1 className="name">Black Clover: La espada del rey mago</h1>
                        <h3 className="info">
                            <i className="fa-solid-fa-star"></i> | 70/100 | 2023 | 1.53hr
                        </h3>
                        <p className="short-desc">antiguos Reyes Magos regresan para vengarse y destruir el reino trebol.
                        </p>

                    </div>
                </Link>
            </div>

        </div>
    </div>
    </>
  )
}
export default home 