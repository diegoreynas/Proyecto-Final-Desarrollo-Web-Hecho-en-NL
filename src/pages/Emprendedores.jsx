import { useState } from 'react'
import {Link} from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import '../css/Emprendedores.css'

function Emprendedores(){
    return (
        <div className='page-emprendedores'>
        <h1>Emprendedores</h1>
        <div class="contenedor-busqueda">
            <div class="barra_buscador">
                <i class="ri-search-line"></i>
                <input type="text" placeholder="¿Qué estás buscando?"></input>
            </div>
            <i class="ri-filter-3-line filtro-icono"></i>
        </div>

        <main class="emprendedores-main">
            <section class="emprendedores-section">
                <div class="section-header">
                    <h3>Destacados</h3>
                    <a href="#" class="ver-todos">Ver todos</a>
                </div>
                <div class="emprendedores-grid">
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 1</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 2</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 3</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 4</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 5</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 6</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 7</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 8</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                </div>
            </section>
            <section class="emprendedores-section">
                <div class="section-header">
                    <h3>Nuevos emprendedores</h3>
                    <a href="#" class="ver-todos">Ver todos</a>
                </div>
                <div class="emprendedores-grid">
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 1</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 2</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 3</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 4</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                </div>
            </section>
            <section class="emprendedores-section">
                <div class="section-header">
                    <h3>Rápido crecimiento</h3>
                    <a href="#" class="ver-todos">Ver todos</a>
                </div>
                <div class="emprendedores-grid">
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 1</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 2</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                    <div class="emprendedor-card">
                        <div class="emprendedor-avatar"></div>
                        <h4>Nombre Emprendedor 3</h4>
                        <p class="area-emprendimiento">Área emprendimiento</p>
                        <button class="btn-seguir">Seguir</button>
                        <a href="/perfil"><button class="btn-perfil">Ver Perfil</button></a>
                    </div>
                </div>
            </section>
        </main>

        <aside>
            <img class = "mini-logo" src = "/imagenes/minilogo.png" width = "70"/>
            <p class = "hecho-en-nl">A través de este programa gratuito impulsamos a emprendedores y empresas locales, otorgándoles el sello distintivo de "Hecho en Nuevo León" que certifica la calidad y el origen de sus productos. Este reconocimiento permite a los negocios acceder a nuevas oportunidades de comercialización y fortalecer su presencia en el mercado.</p>
        </aside>
        </div>
    )
}

export default Emprendedores