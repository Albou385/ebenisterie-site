// src/components/InfoContact.jsx

import { Mail, Phone, MapPin, Facebook } from "lucide-react";

function InfoContact() {
  return (
    <aside
      style={{
        flex: 1,
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        marginLeft: 0,
      }}
    >
      <h2 style={{ marginBottom: 18, textAlign: "center" }}>Informations de contact</h2>
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
            <a 
              href="https://www.google.com/maps/search/328+rue+Félix-Declos+Repentigny+QC" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: "#333", 
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.2s ease"
              }}
              onMouseOver={(e) => e.target.style.color = "#7495b7"}
              onMouseOut={(e) => e.target.style.color = "#333"}
            >
              328 rue Félix-Declos, local 104<br />
              (accès via 442 St-Paul)<br />
              Repentigny, QC
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Facebook size={28} color="#a3b4c3" />
          <div>
            <div style={{ fontWeight: 500 }}>Suivez-nous</div>
            <a 
              href="https://www.facebook.com/profile.php?id=61559830014070&locale=fr_CA" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: "#333", 
                textDecoration: "none",
                transition: "color 0.2s ease"
              }}
              onMouseOver={(e) => e.target.style.color = "#7495b7"}
              onMouseOut={(e) => e.target.style.color = "#333"}
            >
              Page Facebook
            </a>
          </div>
        </div>
      </div>
      {/* Carte Google Maps intégrée */}
      <div style={{
        width: "100%",
        height: 350,
        borderRadius: "1em",
        overflow: "hidden",
        border: "2px solid #e1e1e1",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5578339194!2d-73.4881392!3d45.76000969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e63948b45067%3A0xb443a814e0596e87!2s328%20Rue%20F%C3%A9lix%20Declos%2C%20Repentigny%2C%20QC%20J5Z%200E8!5e0!3m2!1sfr!2sca!4v1756436498529!5m2!1sfr!2sca" 
          width="100%"
          height="100%"
          style={{ 
            border: 0,
            borderRadius: "0.8em"
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation JS Bouchard Ébénisterie"
        />
      </div>
    </aside>
  );
}

export default InfoContact;
