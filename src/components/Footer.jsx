// src/components/Footer.jsx

import logo from '../assets/logo.png';
import { Mail, Phone, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ marginTop: "2rem", background: "#62b9fb", paddingTop: "2rem", paddingBottom: "1rem", color: "#fff" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        {/* Bloc 1 - Logo */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            background: "rgba(248,245,238,0.2)",
            borderRadius: "50%",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            padding: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 0
          }}>
            <img src={logo} alt="Logo JS Bouchard Ébénisterie" style={{ width: 120, height: 120}} />
          </div>
        </div>
        {/* Bloc 2 - Contact */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontWeight: "bold", marginBottom: 8, color: "#fff" }}>Contact</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#fff" }}>
            <Mail size={18} style={{ marginRight: 4 }} />
            <a href="mailto:js_bouchard@hotmail.com" style={{ color: "#fff", textDecoration: "none" }}>
              js_bouchard@hotmail.com
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 8, color: "#fff" }}>
            <Phone size={18} style={{ marginRight: 4 }} />
            <a href="tel:5152977921" style={{ color: "#fff", textDecoration: "none" }}>
              515-297-7921
            </a>
          </div>
        </div>
        {/* Bloc 3 - Réseaux sociaux */}
        <div style={{ flex: 1, textAlign: "right" }}>
          <div style={{ fontWeight: "bold", marginBottom: 8, color: "#fff" }}>Suivez-nous</div>
          <a
            href="https://www.facebook.com/profile.php?id=61559830014070&locale=fr_CA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", color: "#fff", textDecoration: "none" }}
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
        color: "#f8f5ee",
        fontSize: "0.95rem"
      }}>
        © 2025 JS Bouchard Ébénisterie — Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
