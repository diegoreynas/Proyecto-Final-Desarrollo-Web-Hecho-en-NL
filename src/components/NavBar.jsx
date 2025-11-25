import "../css/NavBar.css";
import { Link } from "react-router-dom";

export default function NavbarDesktop() {
    return (
        <nav className="navbar">
            <Link to="/" className="brand" aria-label="Inicio"></Link>
            <button className="navbar-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
            <ul className="navbar-menu">
                <li className="navbar-item"><Link className="navbar-link" to="/">Inicio</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/explorar">Explorar</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/emprendedores">Emprendedores</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/guardados">Elementos Guardados</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/perfil">Perfil</Link></li>
            </ul>
        </nav>
    );
}
