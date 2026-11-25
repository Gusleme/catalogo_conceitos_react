import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link nav-brand">
        Catálogo React
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Feed</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
      </div>
    </nav>
  );
}
