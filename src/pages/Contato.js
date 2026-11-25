import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contato.css";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState({ nome: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = { nome: "", email: "", mensagem: "" };
    let valid = true;

    if (form.nome.trim().length < 3) {
      next.nome = "O nome deve ter pelo menos 3 caracteres.";
      valid = false;
    }

    if (!form.email.includes("@") || !form.email.includes(".com")) {
      next.email = "Informe um e-mail válido contendo '@' e '.com'.";
      valid = false;
    }

    if (form.mensagem.trim().length < 10) {
      next.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const isDisabled =
    errors.nome !== "" || errors.email !== "" || errors.mensagem !== "";

  if (submitted) {
    return (
      <section className="contato success">
        <h2>Mensagem enviada!</h2>
        <p>Obrigado, {form.nome}. Sua mensagem foi recebida.</p>
        <Link to="/contato" className="button">Enviar outra mensagem</Link>
        <p className="contato-meta">
          <Link to="/">Voltar ao feed</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="contato">
      <h2 className="contato-title">Contato</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleChange("nome")}
            placeholder="Seu nome"
          />
          {errors.nome && <span className="error-text">{errors.nome}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="seu@email.com"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange("mensagem")}
            placeholder="Escreva sua mensagem"
            rows="5"
          />
          {errors.mensagem && (
            <span className="error-text">{errors.mensagem}</span>
          )}
        </div>

        <button
          type="submit"
          className="button button-primary"
          disabled={isDisabled}
        >
          Enviar
        </button>
        <p className="contato-hint">
          Preencha todos os campos corretamente para habilitar o envio.
        </p>
      </form>
      <p className="contato-meta">
        <Link to="/">Voltar ao feed</Link>
      </p>
    </section>
  );
}
