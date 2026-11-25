import { useNavigate, Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Página não encontrada.</p>
      <button className="button" onClick={() => navigate("/")}>
        Voltar para a página inicial
      </button>
      <p className="not-found-meta">
        <Link to="/">Ir ao feed</Link>
      </p>
    </section>
  );
}
