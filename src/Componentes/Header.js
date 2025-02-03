import React from "react";
import "../Css/header.css";

const Header = () => {
    return (
        <header className="header-bar">
            <div className="logo-container">
                <span className="logo-initials">DRA</span>
                <div className="logo-divider"></div>
                <div className="logo-text">
                    <span className="logo-name">Carla González</span>
                    <span className="logo-subtext">— Abogada —</span>
                </div>
            </div>
            <nav className="nav-links">
                <a href="#services">Servicios</a>
                <a href="#trabajos">Trabajos Realizados</a>
                <a href="#footer">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;
