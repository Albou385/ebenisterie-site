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
    <footer style={{ marginTop: 0, background: "#62b9fb", paddingTop: "2.5rem", paddingBottom: "2rem", color: "#fff" }}>
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
              background: "rgba(248,245,238,0.2)",
              borderRadius: "50%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              padding: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              transition: "all 0.2s ease"
            }}>
              <img src={logo} alt="Logo JS Bouchard Ébénisterie" style={{ width: 110, height: 110 }} />
            </div>
          </a>
        </div>
        {/* Bloc 2 - Contact */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ 
            fontWeight: "700", 
            marginBottom: "1.2rem", 
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
            marginBottom: "1rem",
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
            <a href="tel:5152977921" style={{ 
              color: "#fff", 
              textDecoration: "none",
              transition: "opacity 0.2s ease"
            }}>
              515-297-7921
            </a>
          </div>
        </div>
        {/* Bloc 3 - Réseaux sociaux */}
        <div style={{ flex: 1, textAlign: "right" }}>
          <div style={{ 
            fontWeight: "700", 
            marginBottom: "1.2rem", 
            color: "#fff", 
            fontSize: "1.2em",
            letterSpacing: "0.5px"
          }}>
            Suivez-moi
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
        marginTop: "2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.25)",
        paddingTop: "1.5rem",
        textAlign: "center",
        color: "#f8f5ee",
        fontSize: "1rem",
        opacity: 0.9
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
