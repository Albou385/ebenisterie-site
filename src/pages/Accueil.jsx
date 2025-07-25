// src/pages/Accueil.jsx

import { Heart, Users, Palette, BadgeCheck, Home, Building, RefreshCw, MapPin } from "lucide-react";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import boisMassif from '../assets/bois_massif_background.jpg';
import logo from '../assets/logo.png';
import JSphoto from '../assets/JS_photo.jpg';

function Accueil() {
  const navigate = useNavigate();
  const diffRef = useRef(null);

  // Scroll avec offset pour le bouton 'En savoir plus'
  const handleScrollToDiff = () => {
    const section = document.getElementById("differencie");
    const header = document.querySelector('header');
    if (section) {
      const headerHeight = header ? header.offsetHeight : 0;
      const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Deux couleurs très douces et chaleureuses, très discrètes
  const bgA = { background: '#f8f5ee' };
  const bgB = { background: '#f3ede7' };
  const sectionMargin = '2.5em 0'; // marges réduites

  return (
    <main>
      {/* Section Hero */}
      <div style={{ ...bgA, width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <Container>
          <section id="hero" className="hero-section" style={{ display: 'flex', alignItems: 'center', gap: '2em', margin: sectionMargin, minHeight: '320px', borderRadius: '1.2em' }}>
            <div style={{ flex: '0 1 60%' }}>
              <h1 style={{ marginBottom: "0.5em", color: "#62b9fb", fontWeight: 700, fontSize: "3em" }}>JS Bouchard Ébénisterie</h1>
              <h2 style={{ marginBottom: "0.5em", color: "#62b9fb", fontWeight: 600, fontSize: "2.2em" }}>
                Créations uniques en bois massif
              </h2>
              <p style={{ marginBottom: "1.5em", fontSize: "1.15em", textAlign: 'justify' }}>
              Mobilier sur mesure haut de gamme, entre tradition artisanale et design contemporain. JS Bouchard Ébénisterie donne vie à vos projets en bois massif, du meuble unique à la cuisine complète.
              </p>
              <div style={{ display: "flex", gap: "1em", color: "#62b9fb" }}>
                <button
                  className="hero-btn"
                  onClick={() => navigate("/contact")}
                >
                  Demander un devis
                </button>
                <button
                  className="hero-btn secondary"
                  onClick={handleScrollToDiff}
                >
                  En savoir plus
                </button>
              </div>
            </div>
            <div style={{ flex: '0 0 260px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img
                src={boisMassif}
                alt="Bois massif ébénisterie"
                style={{ width: '480px', height: '390px', objectFit: 'cover', borderRadius: '0.7em', display: 'block' }}
              />
            </div>
          </section>
        </Container>
      </div>

      {/* 1. Section Ce qui nous différencie */}
      <div style={{ ...bgB, width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <Container>
          <section id="differencie" style={{ 
            borderRadius: '1.2em', 
            padding: '2em 0', 
            margin: '0',
            ...bgB,
            textAlign: 'center'
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: 12, color: "#62b9fb" }}>
              Ce qui nous <span style={{ color: "#7495b7" }}>différencie</span>
            </h2>
            <p style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 2.5em auto', fontSize: '1.15em' }}>
              Notre approche unique combine passion authentique, expertise artisanale et service personnalisé<br />
              pour créer des pièces exceptionnelles qui reflètent votre vision.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: 'nowrap', width: '100%', gap: 8 }}>
              {/* Carte 1 */}
              <div className="diff-card" style={{
                textAlign: "center",
                width: "240px",
                background: "#fff",
                borderRadius: "1em",
                boxShadow: "0 2px 12px rgba(98,185,251,0.06)",
                padding: "2em 1.2em 1.2em 1.2em",
                transition: "transform 0.18s, box-shadow 0.18s"
              }}>
                <div className="diff-icon" style={{
                  background: "#f2f7fa",
                  borderRadius: "1em",
                  width: 60,
                  height: 60,
                  margin: "0 auto 1em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.18s"
                }}>
                  <Heart size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8 }}>Passion authentique</h3>
                <p style={{ margin: 0 }}>
                  Une passion née dès le jeune âge, nourrie par l'art, la littérature et la beauté du bois.
                </p>
              </div>
              {/* Carte 2 */}
              <div className="diff-card" style={{
                textAlign: "center",
                width: "240px",
                background: "#fff",
                borderRadius: "1em",
                boxShadow: "0 2px 12px rgba(98,185,251,0.06)",
                padding: "2em 1.2em 1.2em 1.2em",
                transition: "transform 0.18s, box-shadow 0.18s"
              }}>
                <div className="diff-icon" style={{
                  background: "#f2f7fa",
                  borderRadius: "1em",
                  width: 60,
                  height: 60,
                  margin: "0 auto 1em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.18s"
                }}>
                  <Users size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8 }}>Service centré client</h3>
                <p style={{ margin: 0 }}>
                  Une approche hautement personnalisée basée sur l'écoute, pour comprendre précisément ce que chaque client souhaite.
                </p>
              </div>
              {/* Carte 3 */}
              <div className="diff-card" style={{
                textAlign: "center",
                width: "240px",
                background: "#fff",
                borderRadius: "1em",
                boxShadow: "0 2px 12px rgba(98,185,251,0.06)",
                padding: "2em 1.2em 1.2em 1.2em",
                transition: "transform 0.18s, box-shadow 0.18s"
              }}>
                <div className="diff-icon" style={{
                  background: "#f2f7fa",
                  borderRadius: "1em",
                  width: 60,
                  height: 60,
                  margin: "0 auto 1em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.18s"
                }}>
                  <Palette size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8 }}>Créativité sur mesure</h3>
                <p style={{ margin: 0 }}>
                  Des designs sur mesure, inspirés par les styles traditionnels comme contemporains.
                </p>
              </div>
              {/* Carte 4 */}
              <div className="diff-card" style={{
                textAlign: "center",
                width: "240px",
                background: "#fff",
                borderRadius: "1em",
                boxShadow: "0 2px 12px rgba(98,185,251,0.06)",
                padding: "2em 1.2em 1.2em 1.2em",
                transition: "transform 0.18s, box-shadow 0.18s"
              }}>
                <div className="diff-icon" style={{
                  background: "#f2f7fa",
                  borderRadius: "1em",
                  width: 60,
                  height: 60,
                  margin: "0 auto 1em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.18s"
                }}>
                  <BadgeCheck size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8, whiteSpace: 'nowrap' }}>Finition irréprochable</h3>
                <p style={{ margin: 0 }}>
                  Chaque détail compte. Du choix des matériaux à la touche finale, rien n'est laissé au hasard pour garantir une qualité durable.
                </p>
              </div>
            </div>
            <style>{`
              .diff-card:hover {
                transform: translateY(-10px) scale(1.03);
                box-shadow: 0 8px 24px rgba(98,185,251,0.13);
              }
              .diff-card:hover .diff-icon {
                background: #62b9fb;
              }
              .diff-card:hover .diff-svg {
                color: #62b9fb !important;
                stroke: #62b9fb !important;
              }
              .diff-icon svg {
                color: #7495b7;
                stroke: #7495b7;
                transition: color 0.18s, stroke 0.18s;
              }
            `}</style>
          </section>
        </Container>
      </div>

      {/* 3. Section À propos de l’entreprise */}
      <div style={{ ...bgA, width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <Container>
          <section id="a-propos" style={{ display: "flex", alignItems: "center", gap: "2em", borderRadius: '1.2em', padding: '2em 0', margin: sectionMargin }}>
            <div style={{ flex: 2 }}>
              <h2>
                À propos de <span style={{ color: "#7495b7" }}>JS Bouchard Ébénisterie</span>
              </h2>
              <p style={{ textAlign: 'justify', marginBottom: '0.5em' }}>
                JS Bouchard Ébénisterie se spécialise dans la fabrication de mobilier sur mesure haut de gamme, en bois massif. Qu’il s’agisse de meubles personnalisés, de restauration d’antiquités ou d’aménagements complets (cuisines, salles de bain, etc.), chaque projet reflète un savoir-faire artisanal rigoureux.
              </p>
              <p style={{ textAlign: 'justify', marginBottom: '0.5em' }}>
                Le style varie selon les besoins : entre tradition et modernité, toujours avec un souci du détail et de la satisfaction du client.
              </p>
              <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                Chaque pièce est pensée pour s’harmoniser à votre espace et refléter votre personnalité. Notre engagement : un accompagnement personnalisé, du premier contact à l’installation finale.
              </p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img src={logo} alt="Logo JS Bouchard Ébénisterie" style={{ width: '280px', height: '280px', objectFit: 'contain', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 12px rgba(98,185,251,0.10)' }} />
            </div>
          </section>
        </Container>
      </div>

      {/* 4. Portrait du propriétaire (Jean-Sébastien) */}
      <div style={{ ...bgB, width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <Container>
          <section id="portrait" style={{ display: "flex", alignItems: "center", gap: "2em", borderRadius: '1.2em', padding: '2em 0', margin: sectionMargin }}>
            <div style={{ width: "520px", height: "350px", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1.5em', overflow: 'hidden', background: '#eee' }}>
              <img src={JSphoto} alt="Portrait de Jean-Sébastien Bouchard" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div>
              <h2>À propos du fondateur</h2>
              <p style={{ textAlign: 'justify', marginBottom: '0.5em' }}>
                Depuis mon plus jeune âge, j’ai toujours aimé fabriquer des objets en bois ou construire des cabanes dans les arbres. Les années ont passé, mais la passion est restée intacte — j’ai simplement décidé d’en faire mon métier.
              </p>
              <p style={{ textAlign: 'justify', marginBottom: '0.5em' }}>
                Mon inspiration? L’art, la littérature, l’anatomie, mais surtout la beauté brute et chaleureuse du bois.
              </p>
              <p style={{ textAlign: 'justify', marginBottom: 0 }}>
                Après avoir perfectionné mon savoir-faire à l’École d’ébénisterie d’art de Montréal, j’ai à cœur de mettre ma créativité et mon exigence au service de chaque projet, pour transformer chaque idée en une œuvre unique et durable.
              </p>
            </div>
          </section>
        </Container>
      </div>

      {/* 5. Section Nos services */}
      <div style={{ ...bgA, width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <Container>
          <section id="services" style={{ borderRadius: '1.2em', padding: '2em 0', margin: '0 0 1.2em 0' }}>
            <h2 style={{ textAlign: 'center', color: '#62b9fb' }}>
              Nos <span style={{ color: "#7495b7" }}>services</span>
            </h2>
            <p style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 2.5em auto', fontSize: '1.15em' }}>
              Du mobilier sur mesure aux éléments décoratifs, nous proposons une gamme complète de services pour particuliers et professionnels.
            </p>
            <div style={{ display: "flex", justifyContent: "space-around", gap: 24, flexWrap: 'nowrap', width: '100%' }}>
              {/* Service 1 */}
              <div className="service-card diff-card" style={{ textAlign: "center", width: "320px", background: "#fff", borderRadius: "1em", boxShadow: "0 2px 12px rgba(98,185,251,0.06)", padding: "1.5em", margin: "0 0.5em", transition: "transform 0.18s, box-shadow 0.18s" }}>
                <div className="diff-icon" style={{ background: "#f2f7fa", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.18s" }}>
                  <Home size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8 }}>Pour les particuliers</h3>
                <p style={{ margin: 0 }}>
                  Meubles sur mesure conçus pour s’harmoniser avec votre style et votre espace de vie : cuisine, salle de bain, mobilier, rangements, objets décoratifs.
                </p>
              </div>
              {/* Service 2 */}
              <div className="service-card diff-card" style={{ textAlign: "center", width: "320px", background: "#fff", borderRadius: "1em", boxShadow: "0 2px 12px rgba(98,185,251,0.06)", padding: "1.5em", margin: "0 0.5em", transition: "transform 0.18s, box-shadow 0.18s" }}>
                <div className="diff-icon" style={{ background: "#f2f7fa", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.18s" }}>
                  <Building size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8 }}>Pour les professionnels</h3>
                <p style={{ margin: 0 }}>
                  Mobilier et installations uniques pour commerces, bureaux et espaces professionnels. Chaque projet vise à allier esthétisme et fonctionnalité.
                </p>
              </div>
              {/* Service 3 */}
              <div className="service-card diff-card" style={{ textAlign: "center", width: "320px", background: "#fff", borderRadius: "1em", boxShadow: "0 2px 12px rgba(98,185,251,0.06)", padding: "1.5em", margin: "0 0.5em", transition: "transform 0.18s, box-shadow 0.18s" }}>
                <div className="diff-icon" style={{ background: "#f2f7fa", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.18s" }}>
                  <RefreshCw size={38} color="#7495b7" className="diff-svg" style={{ transition: 'color 0.18s' }} />
                </div>
                <h3 style={{ color: '#62b9fb', marginBottom: 8 }}>Restauration</h3>
                <p style={{ margin: 0 }}>
                  Restauration de meubles anciens ou abîmés, avec un respect total des techniques traditionnelles. Redonnez vie à vos pièces de valeur.
                </p>
              </div>
            </div>
            <style>{`
              .service-card.diff-card:hover {
                transform: translateY(-10px) scale(1.03);
                box-shadow: 0 8px 24px rgba(98,185,251,0.13);
              }
              .service-card.diff-card:hover .diff-icon {
                background: #62b9fb;
              }
              .service-card.diff-card:hover .diff-svg {
                color: #62b9fb !important;
                stroke: #62b9fb !important;
              }
              .diff-icon svg {
                color: #7495b7;
                stroke: #7495b7;
                transition: color 0.18s, stroke 0.18s;
              }
            `}</style>
          </section>
        </Container>
      </div>

      {/* 6. Zone de service */}
      <div style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <Container>
          <section id="zone-service" style={{
            borderRadius: "1.5em",
            background: '#fff',
            border: '1.5px solid #e0e0e0',
            boxShadow: '0 2px 12px rgba(98,185,251,0.07)',
            color: '#222',
            textAlign: "center",
            padding: "2.5em 1em 2em 1em",
            fontSize: "1.1em",
            margin: sectionMargin,
            borderTop: 'none'
          }}>
            <MapPin size={32} style={{ marginBottom: 8, color: '#62b9fb' }} />
            <h3 style={{ marginBottom: 8, color: '#62b9fb' }}>Zone de service</h3>
            Repentigny et les villes environnantes : <br />
            <b>Laval, Mascouche, Terrebonne, L’Assomption</b>
          </section>
        </Container>
      </div>
    </main>
  );
}

export default Accueil;
