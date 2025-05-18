import React from "react";
import "../Css/footer.css";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; 

const Footer = () => {
    return (
        <footer id="footer" className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">Estudio Jurídico</div>
                
                <div className="footer-info">
                    <p><FaMapMarkerAlt className="footer-icon" /> 25 de mayo 218</p>
                    <p><FaPhone className="footer-icon" /> 099793490</p>
                    <p><FaEnvelope className="footer-icon" /> anaclanu@gmail.com</p>
                    <p><FaWhatsapp className="footer-icon" /> 099793490</p>
                </div>
            </div>

            {/* 🔹 Línea divisoria elegante */}
            <div className="footer-divider"></div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Estudio Jurídico. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
