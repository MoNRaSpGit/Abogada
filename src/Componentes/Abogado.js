import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Importando los subcomponentes
import Header from "./Header";
import CarouselComponent from "../Componentes/CarouselComponent.js";
import MiniContacto from "../Componentes/MiniContacto.js";
import Servicios from "../Componentes/Servicios.js";
import TrabajosRealizados from "../Componentes/TrabajosRealizados.js";
import Footer from "../Componentes/Footer.js";

// ✅ Importando los CSS generales
import "../Css/general.css";

const Abogado = () => {
    const [serviciosVisible, setServiciosVisible] = useState(false);
    const [trabajosVisible, setTrabajosVisible] = useState(false);
    const [miniVisible, setMiniVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const servicesSection = document.getElementById("services");
            const trabajosSection = document.getElementById("trabajos");
            const miniContacto = document.querySelector(".mini-contacto");

            if (servicesSection) {
                const rect = servicesSection.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setServiciosVisible(true);
                }
            }

            if (trabajosSection) {
                const rect = trabajosSection.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setTrabajosVisible(true);
                }
            }

            if (miniContacto) {
                const rect = miniContacto.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setMiniVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="abogado">
            <Header />
            <CarouselComponent />
            <MiniContacto isVisible={miniVisible} />
            <Servicios isVisible={serviciosVisible} />
            <TrabajosRealizados isVisible={trabajosVisible} />
            <Footer />
        </div>
    );
};

export default Abogado;
