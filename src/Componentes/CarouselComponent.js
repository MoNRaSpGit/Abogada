import React from "react";
import { Carousel } from "react-bootstrap";
import "../Css/carousel.css";

// ✅ Importando imágenes
import carusel1 from "../Img/carusel1.jpg";
import carusel2 from "../Img/carusel2.jpg";
import carusel3 from "../Img/carusel3.jpg";

const carouselItems = [
    { id: 1, name: "Justicia y Transparencia", image: carusel1 },
    { id: 2, name: "Defendiendo tus Derechos", image: carusel2 },
    { id: 3, name: "Experiencia y Compromiso", image: carusel3 },
];

const CarouselComponent = () => {
    return (
        <section className="carousel-container">
            <Carousel>
                {carouselItems.map((item) => (
                    <Carousel.Item key={item.id}>
                        <div className="carousel-slide">
                            <img src={item.image} alt={item.name} className="carousel-image" />
                            <div className="carousel-overlay">
                                <h3 className="carousel-name">{item.name}</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default CarouselComponent;
