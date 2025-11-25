import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Explorar.css';
import ProductCard from '../components/ProductCard'
import ProductGrid from '../components/ProductGrid'

export default function Explorar() {
    
  return (
    <div className="page-explorar">
    <h1>Explorar</h1>
    <div className="contenedor-busqueda">
        <div className="barra_buscador">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="¿Qué estás buscando?"></input>
        </div>
        <i className="ri-filter-3-line filtro-icono"></i>
    </div>

    <section className="categorias">
        <div className="categorias-header">
            <h2>Categorías</h2>
            <a href="#" className="ver-todas">Ver todas</a>
        </div>

        <div className="categorias-grid">
            <Link to="/categoria/salsas" className="categoria">
                <p>Categoría 1</p>
                <div className="categoria-imagen"></div>
            </Link>
            <Link to="/categoria/salsas" className="categoria">
                <p>Categoría 2</p>
                <div className="categoria-imagen"></div>
            </Link>
            <Link to="/categoria/salsas" className="categoria">
                <p>Categoría 3</p>
                <div className="categoria-imagen"></div>
            </Link>
            <Link to="/categoria/salsas" className="categoria">
                <p>Categoría 4</p>
                <div className="categoria-imagen"></div>
            </Link>
        </div>
    </section>

    <main>  
        <section className="productos">
        <div className="productos-header">
            <h2>Productos destacados</h2>
            <a href="#" className="ver-todos">Ver todos</a>
        </div>

        <ProductGrid />
        </section>
    </main>

    <aside>
        <img className = "mini-logo" src = "/imagenes/minilogo.png" width = "70"/>
        <p className = "hecho-en-nl">A través de este programa gratuito impulsamos a emprendedores y empresas locales, otorgándoles el sello distintivo de "Hecho en Nuevo León" que certifica la calidad y el origen de sus productos. Este reconocimiento permite a los negocios acceder a nuevas oportunidades de comercialización y fortalecer su presencia en el mercado.</p>
    </aside>
    </div>
  );
}
