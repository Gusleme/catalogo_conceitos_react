import { useState, useEffect } from "react";
import { fetchPosts } from "../data/api";
import PostCard from "../components/PostCard";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchPosts()
      .then((data) => {
        if (!cancelled) {
          setPosts(data);
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
  }, []);

  if (loading) {
    return (
      <section className="home loading">
        <p className="loading-message">Carregando feed de posts...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="home error">
        <p className="error-message">{error}</p>
      </section>
    );
  }

  return (
    <section className="home">
      <header className="home-header">
        <h1 className="home-title">Feed</h1>
        <p className="home-subtitle">Últimos posts da API pública JSONPlaceholder.</p>
      </header>
      <section className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
