// src/pages/Realisations.jsx

import GalerieProjet from "../components/GalerieProjet";
import { Link } from "react-router-dom";
import Container from "../components/Container";

function Realisations() {
  return (
    <Container>
      <main style={{ padding: "3em 0" }}>
        <div style={{ marginBottom: 16, textAlign: "center" }}>
          <Link to="/" style={{ color: "#7495b7", fontSize: "1em", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Nos <span style={{ color: "#7495b7" }}>réalisations</span>
        </h1>
        <p style={{ 
          marginBottom: 32, 
          color: "#444", 
          textAlign: "center", 
          maxWidth: "800px", 
          marginLeft: "auto", 
          marginRight: "auto",
          fontSize: "1.1em",
          lineHeight: "1.6"
        }}>
          Découvrez notre portfolio de créations uniques, allant des meubles sur mesure aux projets de cuisine complète et à la restauration d'antiquités.
        </p>
        <GalerieProjet />
      </main>
    </Container>
  );
}

export default Realisations;
