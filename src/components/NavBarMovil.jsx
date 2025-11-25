import "../css/NavBarMovil.css";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="barra-inferior" role="navigation" aria-label="Barra inferior">
      <Link to="/" className="boton" aria-label="Inicio"><i className="ri-home-4-line"></i></Link>
      <Link to="/explorar" className="boton" aria-label="Explorar"><i className="ri-search-line"></i></Link>
      <Link to="/emprendedores" className="boton" aria-label="Emprendedores"><i className="ri-user-line" /></Link>
      <Link to="/guardados" className="boton" aria-label="Guardados"><i className="ri-bookmark-line" /></Link>
    </div>
  );
}
