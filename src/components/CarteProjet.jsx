// src/components/CarteProjet.jsx

import { useState } from "react";

function CarteProjet({ titre, imageUrl, description, onClick }) {
  const [hover, setHover] = useState(false);

  return (
         <div
       style={{
         background: "#fff",
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
         transition: "all 0.2s ease"
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
          opacity: hover ? 0.3 : 1,
          transition: "opacity 0.2s"
        }}
      />
      {/* Overlay au hover */}
      {hover && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.7)",
          borderRadius: "1.5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          transition: "all 0.3s ease"
        }}>
          <div style={{ 
            fontWeight: "600", 
            fontSize: "1.2em", 
            marginBottom: "1.5rem",
            textAlign: "center",
            padding: "0 1rem"
          }}>
            {titre}
          </div>
          <div style={{
            background: "rgba(255,255,255,0.9)",
            color: "#333",
            border: "none",
            borderRadius: "2rem",
            padding: "0.8em 1.5em",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1em",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}>
            Aperçu
          </div>
        </div>
      )}

    </div>
  );
}

export default CarteProjet;
