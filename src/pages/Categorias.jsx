import React from "react";
import { Link } from "react-router-dom";
import "../css/Categorias.css";

export default function Categorias() {

  const categorias = [
    { nombre: "Salsas", slug: "salsas" },
    { nombre: "Postres", slug: "postres" },
    { nombre: "Snacks", slug: "snacks" },
    { nombre: "Bebidas", slug: "bebidas" },
    { nombre: "Panadería", slug: "panaderia" },
  ];

  return (
    <div className="page-categorias">
      <h1>Categorías</h1>

      <div className="categorias-lista">
        {categorias.map((c) => (
          <Link
            key={c.slug}
            to={`/categoria/${c.slug}`}
            className="categoria-item"
          >
            <div className="categoria-box"></div>
            <p>{c.nombre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}