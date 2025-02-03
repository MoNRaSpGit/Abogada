import React, { useState } from "react";
import "../Css/header.css";
import { FaUserCircle } from "react-icons/fa"; // Icono de usuario

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const scrollToTrabajos = () => {
        const trabajosSection = document.getElementById("trabajos");
        if (trabajosSection) {
            const offset = -250; // 🔹 Ajustá este valor según lo que necesites
            const top = trabajosSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setMenuOpen(false); // Cierra el menú después de hacer scroll
    };

    return (
        <>
            <header className="header-bar">
                <div className="logo-container" onClick={toggleModal}>
                    <span className="logo-initials">DRA</span>
                    <div className="logo-divider"></div>
                    <div className="logo-text">
                        <span className="logo-name">Carla González</span>
                        <span className="logo-subtext">— Abogada —</span>
                    </div>
                </div>

                {/* Botón hamburguesa en móviles */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    ☰
                </div>

                {/* Menú de navegación */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToTrabajos(); }}>Trabajos Realizados</a>
                    <a href="#footer" onClick={() => setMenuOpen(false)}>Contacto</a>
                </nav>
            </header>

            {/* 🔹 Modal de presentación */}
            {showModal && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={toggleModal}>✖</button>
                        <FaUserCircle className="user-icon" />
                        <h2>Carla González</h2>
                        <p>
                            Hola, soy Carla González, abogada especializada en derecho penal, civil y corporativo.
                            Me dedico a brindar asesoría legal y defender los derechos de mis clientes con compromiso y ética profesional.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
