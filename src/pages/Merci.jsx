// src/pages/Merci.jsx

import { CheckCircle, Mail, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

function Merci() {
  const navigate = useNavigate();

  return (
    <Container>
      <main
        style={{
          width: "100%",
          minHeight: "80vh",
          padding: "4em 0",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Icône de succès */}
        <div style={{
          width: "120px",
          height: "120px",
          background: "#10b981",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          boxShadow: "0 8px 32px rgba(16, 185, 129, 0.3)"
        }}>
          <CheckCircle size={60} color="white" />
        </div>

        {/* Titre principal */}
        <h1 style={{ 
          fontSize: "2.5em", 
          color: "#1f2937", 
          marginBottom: "1rem",
          fontWeight: "700"
        }}>
          Merci pour votre demande !
        </h1>

        {/* Message de confirmation */}
        <p style={{
          fontSize: "1.25em",
          color: "#6b7280",
          marginBottom: "2rem",
          maxWidth: "600px",
          lineHeight: "1.6"
        }}>
          Votre demande de devis a été envoyée avec succès. 
          Notre équipe l'examinera attentivement et vous répondra dans les plus brefs délais.
        </p>

        {/* Informations importantes */}
        <div style={{
          background: "#f8fafc",
          borderRadius: "1rem",
          padding: "2rem",
          marginBottom: "3rem",
          maxWidth: "500px",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <Mail size={24} color="#3b82f6" />
            <span style={{ fontWeight: "600", color: "#1f2937" }}>
              Vérifiez votre boîte email
            </span>
          </div>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Un email de confirmation vous a été envoyé à l'adresse indiquée.
          </p>
        </div>

        <div style={{
          background: "#f8fafc",
          borderRadius: "1rem",
          padding: "2rem",
          marginBottom: "3rem",
          maxWidth: "500px",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <Clock size={24} color="#f59e0b" />
            <span style={{ fontWeight: "600", color: "#1f2937" }}>
              Délai de réponse
            </span>
          </div>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Nous vous répondrons généralement dans les 24-48 heures ouvrables.
          </p>
        </div>

        {/* Boutons d'action */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "0.9em 2em",
              background: "#7495b7",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: "600",
              fontSize: "1.1em",
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
            onMouseOver={(e) => e.target.style.background = "#5a7a9a"}
            onMouseOut={(e) => e.target.style.background = "#7495b7"}
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </button>
          
          <button
            onClick={() => navigate("/contact")}
            style={{
              padding: "0.9em 2em",
              background: "transparent",
              color: "#7495b7",
              border: "2px solid #7495b7",
              borderRadius: "0.5rem",
              fontWeight: "600",
              fontSize: "1.1em",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#7495b7";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#7495b7";
            }}
          >
            Nouvelle demande
          </button>
        </div>

        {/* Message de contact d'urgence */}
        <div style={{
          marginTop: "3rem",
          padding: "1.5rem",
          background: "#fef3c7",
          borderRadius: "0.5rem",
          border: "1px solid #fbbf24",
          maxWidth: "500px"
        }}>
          <p style={{ margin: 0, color: "#92400e", fontSize: "0.95em" }}>
            <strong>Besoin urgent ?</strong> Contactez-nous directement au 
            <a href="tel:5142977921" style={{ color: "#92400e", textDecoration: "none", fontWeight: "600" }}>
              {" "}514-297-7921
            </a>
          </p>
        </div>
      </main>
    </Container>
  );
}

export default Merci;
