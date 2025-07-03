// src/components/Footer.jsx

import logo from '../assets/logo.png';
import { Mail, Phone, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ marginTop: "2rem", background: "#6094b8", paddingTop: "2rem", paddingBottom: "1rem" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        {/* Bloc 1 - Logo & Slogan */}
        <div style={{ flex: 1 }}>
          <img src={logo} alt="Logo JS Bouchard Ébénisterie" style={{ width: 60, height: 60, marginBottom: 8 }} />
          <div style={{ fontSize: "1rem", color: "#888" }}>Ébénisterie sur mesure</div>
        </div>
        {/* Bloc 2 - Contact */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontWeight: "bold", marginBottom: 8 }}>Contact</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Mail size={18} style={{ marginRight: 4 }} />
            <a href="mailto:js_bouchard@hotmail.com" style={{ color: "#222", textDecoration: "none" }}>
              js_bouchard@hotmail.com
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 8 }}>
            <Phone size={18} style={{ marginRight: 4 }} />
            <a href="tel:5152977921" style={{ color: "#222", textDecoration: "none" }}>
              515-297-7921
            </a>
          </div>
        </div>
        {/* Bloc 3 - Réseaux sociaux */}
        <div style={{ flex: 1, textAlign: "right" }}>
          <div style={{ fontWeight: "bold", marginBottom: 8 }}>Suivez-moi</div>
          <a
            href="https://www.facebook.com/profile.php?id=61559830014070&locale=fr_CA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", color: "#1877f3", textDecoration: "none" }}
          >
            <Facebook size={18} style={{ marginRight: 6 }} />
            Facebook
          </a>
        </div>
      </div>
      {/* Mention légale tout en bas */}
      <div style={{
        marginTop: "2rem",
        borderTop: "1px solid #e0e0e0",
        paddingTop: "1rem",
        textAlign: "center",
        color: "#888",
        fontSize: "0.95rem"
      }}>
        © 2025 JS Bouchard Ébénisterie — Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
