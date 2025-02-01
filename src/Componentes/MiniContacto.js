import React, { useEffect, useState, useRef } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // 📌 Ahora sí funciona
import "../Css/mini-contacto.css";

const MiniContacto = () => {
    const [isVisible, setIsVisible] = useState(false);
    const miniRef = useRef(null);

    useEffect(() => {
        const currentRef = miniRef.current; // 📌 Guardamos el valor de la referencia en una variable
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // 📌 Se activará cuando el 30% del mini-contacto sea visible
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={miniRef} className={`mini-contacto ${isVisible ? "visible" : ""}`}>
            <div className="contact-item contact-left">
                <FaEnvelope className="contact-icon" /> {/* 📌 Icono de email */}
                <span className="contact-text">Contáctanos</span>
            </div>
            <div className="contact-item contact-center">
                <FaWhatsapp className="contact-icon whatsapp-icon" /> {/* 📌 Icono verde de WhatsApp */}
                <span className="contact-text">092-123456</span>
            </div>
            <div className="contact-item contact-right">
                <FaMapMarkerAlt className="contact-icon map-icon" /> {/* 📌 Icono de mapa */}
                <span className="contact-text">Dirección: Maestra Maria Olimpia Pintos 86</span>
            </div>
        </section>
    );
};

export default MiniContacto;
