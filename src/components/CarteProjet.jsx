// src/components/CarteProjet.jsx

import { useState } from "react";

function CarteProjet({ titre, imageUrl, description, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        background: hover ? "#a17754" : "#966341",
        borderRadius: "1.5em",
        width: 350,
        height: 270,
        margin: 16,
        boxShadow: hover ? "0 8px 32px rgba(0,0,0,0.12)" : "0 4px 18px rgba(0,0,0,0.07)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transition: "background 0.2s"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {/* L'image si tu en as une, sinon placeholder */}
      <img
        src={imageUrl}
        alt={titre}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "1.5em",
          opacity: hover ? 0.28 : 0.13,
          transition: "opacity 0.2s"
        }}
      />
      {/* Overlay au hover */}
      {hover && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.15)",
          borderRadius: "1.5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}>
          <div style={{ fontWeight: 600, fontSize: "1.15em", marginBottom: 16 }}>
            {titre}
          </div>
          <button
            style={{
              background: "#fff",
              color: "#966341",
              border: "none",
              borderRadius: "0.5em",
              padding: "0.6em 1.2em",
              cursor: "pointer",
              fontWeight: 500
            }}
          >
            Aperçu
          </button>
        </div>
      )}
      {/* Texte visible hors hover */}
      {!hover && (
        <span style={{
          color: "white",
          opacity: 0.85,
          fontSize: "1em"
        }}>
          Galerie interactive à venir
        </span>
      )}
    </div>
  );
}

export default CarteProjet;
