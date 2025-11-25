import React from 'react';
import '../css/Productos.css';

export default function Productos() {
  return (
    <div className="page">
      <h1>Productos / Servicios</h1>

      <div className="container">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="producto-card" key={i}>
            <div className="producto-content">
              <div className="producto-imagen"></div>
              <div className="producto-info">
                <h2 className="producto-titulo">Nombre del producto o servicio</h2>
                <p className="producto-descripcion-label">Descripción:</p>
                <p className="producto-descripcion-texto">Lorem ipsum dolor sit amet consectetur adipiscing elit pretium vivamus pellentesque.</p>
                <p className="producto-precio">$ Precio</p>
              </div>
            </div>
            <a href="#" className="ver-mas">Ver más</a>
          </div>
        ))}
      </div>

      <aside>
        <img className="mini-logo" src="/imagenes/minilogo.png" alt="mini logo" width="70" />
        <p className="hecho-en-nl">A través de este programa gratuito impulsamos a emprendedores y empresas locales, otorgándoles el sello distintivo de "Hecho en Nuevo León" que certifica la calidad y el origen de sus productos. Este reconocimiento permite a los negocios acceder a nuevas oportunidades de comercialización y fortalecer su presencia en el mercado.</p>
      </aside>
    </div>
  );
}
