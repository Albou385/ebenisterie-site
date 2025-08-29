// src/components/Footer.jsx

import logo from '../assets/logo.png';
import { Mail, Phone, Facebook } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll fluide vers le haut si déjà sur la page d'accueil
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  return (
    <footer style={{ marginTop: 0, background: "#62b9fb", paddingTop: "1.5rem", paddingBottom: "1.5rem", color: "#fff" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        {/* Bloc 1 - Logo interactif */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <a href="/" onClick={handleLogoClick} style={{ 
              cursor: 'pointer', 
              display: 'inline-block', 
              border: 'none', 
              background: 'none', 
              outline: 'none',
              transition: "transform 0.2s ease"
            }}>
            <div className="logo-container" style={{
              background: "rgba(0, 0, 0, 1)",
              borderRadius: "50%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.8rem",
              transition: "all 0.2s ease"
            }}>
              <img src={logo} alt="Logo JS Bouchard Ébénisterie" style={{ width: 120, height: 120 }} />
            </div>
          </a>
        </div>
        {/* Bloc 2 - Contact */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ 
            fontWeight: "700", 
            marginBottom: "1rem", 
            color: "#fff", 
            fontSize: "1.2em",
            letterSpacing: "0.5px"
          }}>
            Contact
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: 10, 
            color: "#fff",
            marginBottom: "0.8rem",
            fontSize: "1.05em"
          }}>
            <Mail size={20} style={{ marginRight: 6, opacity: 0.9 }} />
            <a href="mailto:js_bouchard@hotmail.com" style={{ 
              color: "#fff", 
              textDecoration: "none",
              transition: "opacity 0.2s ease"
            }}>
              js_bouchard@hotmail.com
            </a>
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: 10, 
            color: "#fff",
            fontSize: "1.05em"
          }}>
            <Phone size={20} style={{ marginRight: 6, opacity: 0.9 }} />
            <a href="tel:5142977921" style={{ 
              color: "#fff", 
              textDecoration: "none",
              transition: "opacity 0.2s ease"
            }}>
              514-297-7921
            </a>
          </div>
        </div>
        {/* Bloc 3 - Réseaux sociaux */}
        <div style={{ flex: 1, textAlign: "right" }}>
          <div style={{ 
            fontWeight: "700", 
            marginBottom: "1rem", 
            color: "#fff", 
            fontSize: "1.2em",
            letterSpacing: "0.5px"
          }}>
            Suivez-nous
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61559830014070&locale=fr_CA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "flex-end", 
              color: "#fff", 
              textDecoration: "none",
              fontSize: "1.05em",
              transition: "opacity 0.2s ease"
            }}
          >
            <Facebook size={20} style={{ marginRight: 8, opacity: 0.9 }} />
            Facebook
          </a>
        </div>
      </div>
      {/* Mention légale tout en bas */}
      <div style={{
        marginTop: "0.5rem",
        borderTop: "1px solid rgba(255,255,255,0.25)",
        paddingTop: "0.5rem",
        textAlign: "center",
        color: "#f8f5ee",
        fontSize: "1rem",
        opacity: 0.8
      }}>
        © 2025 JS Bouchard Ébénisterie — Tous droits réservés
      </div>
      <style>{`
        footer a:hover {
          opacity: 0.8;
        }
        footer a:hover .logo-container {
          transform: scale(1.05);
        }
        .logo-container:hover {
          transform: scale(1.05);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
