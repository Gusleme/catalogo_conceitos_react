import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchPostById } from "../data/api";
import "./Detalhes.css";

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchPostById(id)
      .then((data) => {
        if (!cancelled) {
          setPost(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="detalhes loading">
        <p className="loading-message">Carregando detalhes do post...</p>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="detalhes error">
        <p className="error-message">{error || "Post não encontrado."}</p>
        <button className="back-button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </section>
    );
  }

  return (
    <section className="detalhes">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Voltar ao feed
      </button>
      <article className="detalhes-card">
        <span className="post-id">#{post.id}</span>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </article>
      <p className="detalhes-meta">
        <Link to="/">Voltar ao feed</Link>
      </p>
    </section>
  );
}
