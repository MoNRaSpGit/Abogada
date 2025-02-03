import React from "react";
import "../Css/Frases.css";

const frases = [
    { id: 1, text: "El derecho es el arte de dar a cada uno lo suyo.", author: "Ulpiano" },
    { id: 2, text: "La justicia es la reina de las virtudes republicanas y con ella se sostiene la igualdad y la libertad.", author: "Simón Bolívar" },
    { id: 3, text: "Las leyes son para proteger a los débiles de los fuertes.", author: "Oscar Wilde" }
];

const Frases = () => {
    return (
        <section className="frases-container">
            <h2 className="frases-title">I N S P I R A C I Ó N</h2>
            <div className="frases-grid">
                {frases.map((frase) => (
                    <div key={frase.id} className="frase-card">
                        <p className="frase-text">"{frase.text}"</p>
                        <p className="frase-author">- {frase.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Frases;
