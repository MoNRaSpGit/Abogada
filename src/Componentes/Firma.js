import React from "react";
import "../Css/firma.css"; // Asegúrate de tener este archivo CSS
import firmaImagen from "../Img/imagenFirma.PNG"; // Asegúrate de que el nombre coincida

const Firma = () => {
    return (
        <div className="firma-page">
            <div className="firma-container">
                <div className="firma-texto">
                    <p className="nombre">Ana Claudia Nuñez</p>
                    <p className="titulo">Doctora en Derecho y Ciencias Sociales</p>
                    <p className="direccion">25 de mayo 218, Estudio</p>
                </div>
                <img src={firmaImagen} alt="Firma" className="firma-imagen" />
            </div>
        </div>
    );
};

export default Firma;
