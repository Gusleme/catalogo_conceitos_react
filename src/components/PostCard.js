import { Link } from "react-router-dom";
import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/detalhes/${post.id}`} className="post-card-link">
        <span className="post-id">#{post.id}</span>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{post.body}</p>
      </Link>
    </article>
  );
}
