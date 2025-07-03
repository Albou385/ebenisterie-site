// src/components/Header.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 2rem",
      borderBottom: "1px solid #eee"
    }}>
      {/* Logo + Nom + Slogan */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo JS Bouchard Ébénisterie"
          style={{ width: "60px", height: "60px", marginRight: "1rem" }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            JS Bouchard Ébénisterie
          </div>
          <div style={{ fontSize: "1rem", color: "#888" }}>
            Ébénisterie sur mesure
          </div>
        </div>
      </div>
      {/* Menu de navigation */}
      <nav>
        <ul style={{
          display: "flex",
          listStyle: "none",
          gap: "2rem",
          margin: 0,
          padding: 0,
          fontSize: "1.1rem"
        }}>
            <li><Link to="/">Accueil</Link></li>
            <li><a href="#a-propos">À propos</a></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
