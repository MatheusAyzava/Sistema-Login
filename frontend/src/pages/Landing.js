import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import bgImage from "../assets/beta.jpg";

function Landing() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const navigate = useNavigate();

  useEffect(() => {
    // Aplica fundo ao body
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.margin = 0;

    return () => {
      // Limpa estilo quando sair da página
      document.body.removeAttribute("style");
    };
  }, []);

  return (
    <div className="landing-page" style={{ padding: "20px", color: "#fff" }}>
      <div className="navbar" style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "10px 20px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div className="left">
          <span id="username-display">Bem-vindo, {username}</span>
        </div>
        <div className="center">
          <input
            type="text"
            id="search-bar"
            placeholder="Pesquisar..."
            style={{ padding: "8px", borderRadius: "6px", border: "none" }}
          />
        </div>
        <div className="right">
          <button
            className="logout-btn"
            onClick={() => navigate("/")}
            style={{
              background: "#c0392b",
              color: "#fff",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Sair
          </button>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "60px" }}>
        <h2>Clientes</h2>
        <p>Confira os detalhes dos clientes e projetos abaixo.</p>
      </div>
    </div>
  );
}

export default Landing;
