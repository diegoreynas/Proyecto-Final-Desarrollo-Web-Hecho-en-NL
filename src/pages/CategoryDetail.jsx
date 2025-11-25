import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import "../css/CategoryDetail.css";

export default function CategoryDetail() {
  const { slug } = useParams();

  // Capitalizar el nombre para mostrarlo bonito
  const nombreCategoria = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="page-category">

      <h1>Categoría {nombreCategoria}</h1>
      <p className="subtitulo">
        Productos destacados de la categoría {nombreCategoria}
      </p>

      <div className="contenido-category">

        {/* GRID REAL QUE YA EXISTE */}
        <ProductGrid categoria={slug} />

        {/* SIDEBAR */}
        <aside className="sidebar">
          <img src="/imagenes/minilogo.png" width="70" />
          <p>
            A través de este programa gratuito impulsamos a emprendedores
            y empresas locales, otorgándoles el sello distintivo de
            "Hecho en Nuevo León", que certifica la calidad y el origen de
            sus productos. Este reconocimiento permite a los negocios acceder
            a nuevas oportunidades de comercialización y fortalecer su
            presencia en el mercado.
          </p>
        </aside>

      </div>
    </div>
  );
}