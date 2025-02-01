import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../Css/servicios.css";

// Imágenes de prueba (usar imágenes reales en producción)
import ejemplo1 from "../Img/carusel1.jpg";
import ejemplo2 from "../Img/carusel2.jpg";
import ejemplo3 from "../Img/carusel3.jpg";

const servicios = [
    { title: "Derecho Penal", desc: "Defensa en procesos judiciales penales.", img: ejemplo1 },
    { title: "Derecho Civil", desc: "Asesoría en contratos, herencias y más.", img: ejemplo2 },
    { title: "Derecho Laboral", desc: "Protección de derechos laborales y asesoría.", img: ejemplo3 },
    { title: "Propiedad Intelectual", desc: "Registro de marcas, patentes y derechos de autor.", img: ejemplo1 },
    { title: "Derecho Corporativo", desc: "Soluciones legales para empresas y startups.", img: ejemplo2 },
    { title: "Derecho Familiar", desc: "Divorcios, adopciones y custodia de menores.", img: ejemplo3 },
];

const Servicios = ({ isVisible }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    // 🔹 Función para abrir el modal con el servicio seleccionado
    const handleShow = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    return (
        <section id="services" className={`container servicios-container ${isVisible ? "visible" : ""}`}>
            <h2 className="section-title">S E R V I C I O S</h2>
            <div className="service-grid">
                {servicios.map((service, index) => (
                    <div key={index} className="service-card"
                        style={{ backgroundImage: `url(${service.img})` }}
                        onClick={() => handleShow(service)}
                    >
                        <div className="service-overlay">
                            <h5>{service.title}</h5>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔹 Modal de Bootstrap */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedService?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedService?.desc}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Servicios;
