import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/beta.jpg";

function Cadastro() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Aplica imagem de fundo no body ao entrar na página
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.margin = 0;
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";

    return () => {
      // Limpa os estilos ao sair da página
      document.body.removeAttribute("style");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Novo Usuário:</label>
          <input
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Nova Senha:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p className="error-message">{message}</p>}
      <hr style={{ margin: "20px 0" }} />
      <button onClick={() => navigate("/")}>Voltar ao Login</button>
    </div>
  );
}

export default Cadastro;
