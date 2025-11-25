import React from 'react';
import '../css/Style.css';

export default function Home() {
  return (
    <div className="page-home">

      <section className="carrusel">
        <h1>Inicio</h1>

        <div className="slider-container">
          <img className="slider-item" src="/imagenes/dulcesfinosvictoria.png" />
          <img className="slider-item" src="/imagenes/abellamiamiel.png" />
          <img className="slider-item" src="/imagenes/somossabores.png" />
        </div>
      </section>

      <nav>
        <h2>Filtrar por categoría</h2>

        <div className="categorias">
          <button className="categoria-item">Canastas</button>
          <button className="categoria-item">Dulces</button>
          <button className="categoria-item">Licores</button>
          <button className="categoria-item">Salsas y condimentos</button>
          <button className="categoria-item">Sazonadores</button>
        </div>
      </nav>

      <main>
        <h2>Destacados</h2>

        <img className="destacado-item" src="/imagenes/canasta1.png" width="330" />
        <p className="descripcion-1">Canasta 1.</p>

        <img className="destacado-item" src="/imagenes/canasta2.png" width="330" />
        <p className="descripcion-2">Canasta 2.</p>
      </main>

      <aside>
        <img className="mini-logo" src="/imagenes/minilogo.png" width="100" />
        <p className="hecho-en-nl">
          A través de este programa gratuito impulsamos a emprendedores y empresas locales,
          otorgándoles el sello distintivo de "Hecho en Nuevo León"…
        </p>
      </aside>

    </div>
  );
}