import './App.css'
import { Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar.jsx'
import BottomBar from './components/NavBarMovil.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Explorar from './pages/Explorar.jsx'
import Emprendedores from './pages/emprendedores.jsx'
import PerfilEmprendedor from './pages/PerfilEmprendedor.jsx'
import Productos from './pages/Productos.jsx'
import CategoryDetail from './pages/CategoryDetail.jsx'
import Categorias from './pages/Categorias.jsx'

import './css/Style.css';
import './css/Explorar.css';
import './css/CategoryDetail.css';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categoria/:slug" element={<CategoryDetail />} />
        <Route path="/emprendedores" element={<Emprendedores />} />
        <Route path="/perfil" element={<PerfilEmprendedor />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/guardados" element={<Home />} />
      </Routes>

      <Footer />
      <BottomBar />
    </>
  )
}

export default App