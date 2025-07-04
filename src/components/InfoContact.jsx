// src/components/InfoContact.jsx

import { Mail, Phone, MapPin, Facebook } from "lucide-react";

function InfoContact() {
  return (
    <aside
      style={{
        flex: 1,            // <-- occupe 50% de la largeur parent flex
        width: "100%",
        minWidth: 0,        // <-- essentiel pour le flexbox responsive
        boxSizing: "border-box",
        marginLeft: 0,      // <-- pas de marge fixe
      }}
    >
      <h2 style={{ marginBottom: 18 }}>Informations de contact</h2>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <Mail size={28} color="#a3b4c3" />
          <div>
            <div style={{ fontWeight: 500 }}>Email</div>
            <a href="mailto:js_bouchard@hotmail.com" style={{ color: "#333", textDecoration: "none" }}>
              js_bouchard@hotmail.com
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <Phone size={28} color="#a3b4c3" />
          <div>
            <div style={{ fontWeight: 500 }}>Téléphone</div>
            <a href="tel:5142977921" style={{ color: "#333", textDecoration: "none" }}>
              514-297-7921
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <MapPin size={28} color="#a3b4c3" />
          <div>
            <div style={{ fontWeight: 500 }}>Adresse</div>
            328 rue Félix-Declos<br />
            (accès via 442 St-Paul)<br />
            Repentigny, QC
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Facebook size={28} color="#a3b4c3" />
          <div>
            <div style={{ fontWeight: 500 }}>Suivez-nous</div>
            <a href="https://www.facebook.com/votre-page" target="_blank" rel="noopener noreferrer" style={{ color: "#333", textDecoration: "none" }}>
              Page Facebook
            </a>
          </div>
        </div>
      </div>
      {/* Carte Google Maps en placeholder */}
      <div style={{
        width: "100%",
        height: 260,
        background: "linear-gradient(120deg, #dce6ee 0%, #eaf2fa 100%)",
        borderRadius: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#a3b4c3",
        fontSize: "1.1em"
      }}>
        <MapPin size={36} />
        <span style={{ marginLeft: 10 }}>Carte Google Maps à intégrer</span>
      </div>
    </aside>
  );
}

export default InfoContact;
