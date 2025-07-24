// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hauteurs et tailles adaptées pour garder tout centré et contenu
  const headerHeight = scrolled ? 84 : 120;
  const logoSize = scrolled ? 60 : 90;
  const logoPadding = scrolled ? 8 : 16;
  const fontSizeTitle = scrolled ? "1.5rem" : "2.2rem";
  const fontSizeSlogan = scrolled ? "1rem" : "1.15rem";
  const navPadding = scrolled ? "1rem 2rem" : "2rem 2rem";

  return (
    <header style={{
      width: "100vw",
      minWidth: "100vw",
      boxSizing: "border-box",
      background: "#62b9fb",
      borderBottom: "1px solid #eaeaea",
      margin: 0,
      left: 0,
      right: 0,
      position: "sticky",
      top: 0,
      zIndex: 100,
      padding: 0,
      transition: 'all .22s cubic-bezier(.4,0,.2,1)',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
      height: headerHeight,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: '100%',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: navPadding,
        height: '100%',
        boxSizing: 'border-box',
        transition: 'padding 0.22s cubic-bezier(.4,0,.2,1)'
      }}>
        {/* Logo + Nom + Slogan */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", userSelect: 'none', height: '100%' }}>
          <div style={{
            background: "rgba(248,245,238,0.2)",
            borderRadius: "50%",
            boxShadow: "0 2px 18px rgba(0,0,0,0.13)",
            padding: scrolled ? 4 : 8, // padding réduit
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "1.2rem",
            marginTop: 4,
            marginBottom: 4,
            transition: "box-shadow 0.2s, background 0.2s, padding 0.22s cubic-bezier(.4,0,.2,1)",
            height: logoSize + 2 * (scrolled ? 4 : 8),
            minWidth: logoSize + 2 * (scrolled ? 4 : 8),
            boxSizing: 'border-box',
          }}>
            <img
              src={logo}
              alt="Logo JS Bouchard Ébénisterie"
              style={{ width: logoSize, height: logoSize, display: "block", transition: 'width 0.22s, height 0.22s' }}
            />
          </div>
          <div style={{ userSelect: 'text', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontWeight: "bold", fontSize: fontSizeTitle, color: "#222", lineHeight: 1, transition: 'font-size 0.22s' }}>
              JS Bouchard Ébénisterie
            </div>
            <div style={{ fontSize: fontSizeSlogan, color: "#222", transition: 'font-size 0.22s' }}>
              Ébénisterie sur mesure
            </div>
          </div>
        </Link>
        {/* Menu de navigation */}
        <nav style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <ul style={{
            display: "flex",
            listStyle: "none",
            gap: "2rem",
            margin: 0,
            padding: 0,
            fontSize: "1.1rem",
            alignItems: 'center',
            height: '100%'
          }}>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  position: "relative",
                  textDecoration: "none",
                  padding: "0.2em 0.3em",
                  transition: "color 0.18s",
                  display: 'flex', alignItems: 'center', height: '100%'
                }}
                to="/"
                onMouseEnter={e => e.currentTarget.style.setProperty('--underline-width', '100%')}
                onMouseLeave={e => e.currentTarget.style.setProperty('--underline-width', '0%')}
              >
                Accueil
                <span style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  width: '100%',
                  height: 2,
                  background: '#fff',
                  borderRadius: 2,
                  transform: 'scaleX(var(--underline-width, 0))',
                  transformOrigin: 'left',
                  transition: 'transform 0.22s cubic-bezier(.4,0,.2,1)',
                  content: '""',
                  display: 'block',
                  pointerEvents: 'none'
                }} />
              </Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <a
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  position: "relative",
                  textDecoration: "none",
                  padding: "0.2em 0.3em",
                  transition: "color 0.18s",
                  display: 'flex', alignItems: 'center', height: '100%'
                }}
                href="#a-propos"
                onMouseEnter={e => e.currentTarget.style.setProperty('--underline-width', '100%')}
                onMouseLeave={e => e.currentTarget.style.setProperty('--underline-width', '0%')}
              >
                À propos
                <span style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  width: '100%',
                  height: 2,
                  background: '#fff',
                  borderRadius: 2,
                  transform: 'scaleX(var(--underline-width, 0))',
                  transformOrigin: 'left',
                  transition: 'transform 0.22s cubic-bezier(.4,0,.2,1)',
                  content: '""',
                  display: 'block',
                  pointerEvents: 'none'
                }} />
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  position: "relative",
                  textDecoration: "none",
                  padding: "0.2em 0.3em",
                  transition: "color 0.18s",
                  display: 'flex', alignItems: 'center', height: '100%'
                }}
                to="/realisations"
                onMouseEnter={e => e.currentTarget.style.setProperty('--underline-width', '100%')}
                onMouseLeave={e => e.currentTarget.style.setProperty('--underline-width', '0%')}
              >
                Réalisations
                <span style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  width: '100%',
                  height: 2,
                  background: '#fff',
                  borderRadius: 2,
                  transform: 'scaleX(var(--underline-width, 0))',
                  transformOrigin: 'left',
                  transition: 'transform 0.22s cubic-bezier(.4,0,.2,1)',
                  content: '""',
                  display: 'block',
                  pointerEvents: 'none'
                }} />
              </Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link
                to="/contact"
                style={{
                  background: "#f8f5ee",
                  color: "#62b9fb",
                  borderRadius: 24,
                  padding: "0.1em 1.3em", // padding vertical réduit
                  fontWeight: 700,
                  boxShadow: location.pathname === "/contact" ? "0 2px 8px rgba(98,185,251,0.18)" : "none",
                  border: location.pathname === "/contact" ? "2px solid #62b9fb" : "none",
                  transition: "all 0.18s",
                  outline: "none",
                  textDecoration: "none",
                  position: "relative",
                  display: 'flex', alignItems: 'center', height: '100%'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(98,185,251,0.18)";
                  e.currentTarget.style.background = "#e0e6ed";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = location.pathname === "/contact" ? "0 2px 8px rgba(98,185,251,0.18)" : "none";
                  e.currentTarget.style.background = "#f8f5ee";
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
