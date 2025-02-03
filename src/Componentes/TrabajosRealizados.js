import React, { useState } from "react";
import "../Css/trabajos.css";
import backgroundImg from "../Img/carusel1.jpg";

const trabajos = [
    {
        id: 1,
        title: "Defensa Penal Exitosa",
        description: "Nuestra estrategia logró la absolución de nuestro cliente en un caso de alto impacto."
    },
    {
        id: 2,
        title: "Asesoría Corporativa",
        description: "Brindamos soluciones legales efectivas que impulsaron el crecimiento de varias startups."
    },
    {
        id: 3,
        title: "Caso de Derecho Laboral",
        description: "Protegimos los derechos de los empleados, asegurando compensaciones justas y equitativas."
    }
];

const TrabajosRealizados = ({ isVisible }) => {
    const [expandedId, setExpandedId] = useState(null);

    const handleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };


    const scrollToTrabajos = () => {
        const trabajosSection = document.getElementById("trabajos");
        if (trabajosSection) {
            const offset = -150; // 🔹 Ajustá este valor (+ o -) según lo que necesites
            const top = trabajosSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };
    

    return (
        <>
            <div className="trabajos-separator"></div>

            <section
                id="trabajos"
                className={`trabajos-container ${isVisible ? "visible" : ""}`}
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <h2 className="section-title">C A S O&nbsp;&nbsp;&nbsp;D E&nbsp;&nbsp;&nbsp;É X I T O</h2>


                <div className="trabajos-grid">
                    {trabajos.map((trabajo, index) => (
                        <div
                            key={trabajo.id}
                            className={`trabajo-card ${expandedId === trabajo.id ? "expanded" : ""}`}
                            onClick={() => handleExpand(trabajo.id)}
                        >
                            <div className="trabajo-overlay">
                                <h5>{trabajo.title}</h5>
                                <p className="trabajo-desc">{trabajo.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="trabajos-separator"></div>
        </>
    );
};

export default TrabajosRealizados;
