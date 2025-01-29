import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Abogado.css"; // Asegúrate de que este archivo exista

const Abogado = () => {
    const carouselItems = [
        { id: 1, name: "Justicia y Transparencia", bgColor: "#1a1a2e" },
        { id: 2, name: "Defendiendo tus Derechos", bgColor: "#2b2b2b" },
        { id: 3, name: "Experiencia y Compromiso", bgColor: "#3a3a3a" },
    ];

    return (
        <div className="abogado">

            {/* Encabezado */}            
            <header className="header-bar d-flex justify-content-between align-items-center p-3">
                <div className="logo-container">
                    <span className="logo-initials">DRA</span>
                    <div className="logo-divider"></div> {/* Línea separadora */}
                    <div className="logo-text">
                        <span className="logo-name">Carla Gonzales</span>
                        <span className="logo-subtext">— Abogada —</span>
                    </div>
                </div>
                <nav className="nav-links">
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#services">Servicios</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </header>




            {/* Carrusel con colores en lugar de imágenes */}
            <div className="container my-4 text-center">
                <h2 className="section-title">Defendemos tus derechos</h2>
                <Carousel className="custom-carousel">
                    {carouselItems.map((item) => (
                        <Carousel.Item key={item.id}>
                            <div
                                className="carousel-placeholder"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <h3 className="carousel-name">{item.name}</h3>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* Sección de Servicios */}

            <div className="container my-5">
                <h2 className="section-title">Nuestros Servicios</h2>
                <div className="row">
                    {/* Tarjetas nuevas + las anteriores */}
                    {[
                        { title: "Derecho Penal", desc: "Defensa en procesos judiciales penales." },
                        { title: "Derecho Civil", desc: "Asesoría en contratos, herencias y más." },
                        { title: "Derecho Laboral", desc: "Protección de derechos laborales y asesoría." },
                        { title: "Derecho Corporativo", desc: "Soluciones legales para empresas y startups." },
                        { title: "Propiedad Intelectual", desc: "Registro de marcas, patentes y derechos de autor." },
                        { title: "Derecho Familiar", desc: "Divorcios, adopciones y custodia de menores." },
                        { title: "Testamentos y Sucesiones", desc: "Planificación y ejecución de herencias." },
                        { title: "Litigios y Mediación", desc: "Resolución de conflictos legales." },
                        { title: "Asesoría Financiera", desc: "Gestión legal en inversiones y negocios." },

                    ].map((service, index) => (
                        <div key={index} className="col-md-4">
                            <div className="service-card">
                                <h5>{service.title}</h5>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Footer */}

            <footer id="footer" className="footer-container">
                <div className="footer-content">
                    {/* Logo y Nombre */}
                    <div className="footer-logo">Estudio Jurídico</div>

                    {/* Información de Contacto */}
                    <div className="footer-info">
                        <p>📍 Dirección: Maestra Maria Olimpia Pintos 86, Ciudad</p>
                        <p>📞 Teléfono: (000) 123-4567</p>
                        <p>✉️ Email: contacto@estudiojuridico.com</p>
                    </div>

                    {/* Mapa de Ubicación */}
                    <div className="footer-map">
                        <iframe
                            title="Ubicación del Estudio Jurídico"
                            width="100%"
                            height="150"
                            style={{ border: 0, borderRadius: "10px" }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26245.86590939421!2d-55.9751122!3d-34.9056184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32a4b4a85c5c5%3A0xe2c635b47f67c37e!2sMaestra%20Maria%20Olimpia%20Pintos%2086!5e0!3m2!1ses-419!2suy!4v1706659345678!5m2!1ses-419!2suy"
                        ></iframe>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Estudio Jurídico. Todos los derechos reservados.
                </div>
            </footer>


        </div>
    );
};

export default Abogado;
