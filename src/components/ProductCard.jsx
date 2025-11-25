import '../css/ProductCard.css';

export default function ProductCard({ producto }) {
  return (
    <div className="product-card">
      <div className="product-image"></div>
      <h3 className="titulo">{producto.nombre}</h3>
      <p className="precio">${producto.precio}</p>
      <p className="descripcion">{producto.descripcion}</p>
      <button className="ver-mas">Ver más</button>
    </div>
  );
}