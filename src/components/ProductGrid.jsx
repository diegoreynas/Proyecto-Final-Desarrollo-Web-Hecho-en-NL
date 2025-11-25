import React from "react";
import ProductCard from "./ProductCard";
import "../css/Explorar.css";

export default function ProductGrid() {
  const productos = [
    {id: 1, nombre: "Producto 1", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 2, nombre: "Producto 2", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 3, nombre: "Producto 3", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 4, nombre: "Producto 4", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 5, nombre: "Producto 5", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 6, nombre: "Producto 6", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 7, nombre: "Producto 7", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 8, nombre: "Producto 8", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 9, nombre: "Producto 9", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 10, nombre: "Producto 10", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 11, nombre: "Producto 11", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
    {id: 12, nombre: "Producto 12", precio: 500, descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla hac mus at mattis facilisi sem integer, consequat interdum quis vel pretium laoreet.'},
  ];

  return (
    <div className="productos-grid"> {/* */}
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}
