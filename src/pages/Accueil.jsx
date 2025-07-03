// src/pages/Accueil.jsx

import { Heart, Users, Palette, BadgeCheck, Home, Building, RefreshCw, MapPin } from "lucide-react";

function Accueil() {
  return (
    <main>
      {/* Section Hero */}
      <section id="hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Bloc gauche : Textes */}
        <div>
          <h1 style={{ marginBottom: "0.5em" }}>JS Bouchard Ébénisterie</h1>
          <h2 style={{ marginBottom: "0.5em" }}>
            Créations <span style={{ color: "#7495b7" }}>uniques</span> en bois massif
          </h2>
          <p style={{ marginBottom: "1.5em" }}>
            Spécialisée dans les meubles sur mesure haut de gamme, la restauration d'antiquités et les projets de cuisine et salle de bain complets.
          </p>
          <div style={{ display: "flex", gap: "1em" }}>
            <button style={{ background: "#7495b7", color: "white", padding: "0.75em 1.5em", borderRadius: "0.5em", border: "none" }}>
              Demander un devis
            </button>
            <button style={{ border: "2px solid #7495b7", color: "#7495b7", padding: "0.75em 1.5em", borderRadius: "0.5em", background: "none" }}>
              En savoir plus
            </button>
          </div>
        </div>
        {/* Bloc droit : Placeholder pour image ou bannière */}
        <div style={{
          width: "400px", height: "350px", background: "#966341", borderRadius: "1.5em", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <span style={{ color: "white", opacity: 0.8 }}>Galerie photo à venir</span>
        </div>
      </section>

      {/* 1. Section Ce qui nous différencie */}
      <section id="differencie" style={{ margin: "4em 0" }}>
        <h2>
          Ce qui nous <span style={{ color: "#7495b7" }}>différencie</span>
        </h2>
        <p>
          Notre approche unique combine passion authentique, expertise artisanale et service personnalisé pour créer des pièces exceptionnelles qui reflètent votre vision.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2em" }}>
          {/* Carte 1 */}
          <div style={{ textAlign: "center", width: "210px" }}>
            <div style={{ background: "#f2f7fa", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em" }}>
              <Heart size={38} color="#7495b7" style={{ marginTop: 10 }} />
            </div>
            <h3>Passion authentique</h3>
            <p>
              Une passion pour le travail du bois qui a commencé dès le jeune âge, alimentée par l’art, la littérature et la beauté naturelle du bois.
            </p>
          </div>
          {/* Carte 2 */}
          <div style={{ textAlign: "center", width: "210px" }}>
            <div style={{ background: "#e1ecf3", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em" }}>
              <Users size={38} color="#45779e" style={{ marginTop: 10 }} />
            </div>
            <h3>Service centré client</h3>
            <p>
              Approche hautement personnalisée : je prends le temps d’écouter attentivement pour comprendre exactement ce que chaque client souhaite.
            </p>
          </div>
          {/* Carte 3 */}
          <div style={{ textAlign: "center", width: "210px" }}>
            <div style={{ background: "#f2f7fa", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em" }}>
              <Palette size={38} color="#7495b7" style={{ marginTop: 10 }} />
            </div>
            <h3>Créativité sur mesure</h3>
            <p>
              Designs adaptés aux besoins de chaque client, inspirés autant par les styles traditionnels que contemporains.
            </p>
          </div>
          {/* Carte 4 */}
          <div style={{ textAlign: "center", width: "210px" }}>
            <div style={{ background: "#e1ecf3", borderRadius: "1em", width: 60, height: 60, margin: "0 auto 1em" }}>
              <BadgeCheck size={38} color="#45779e" style={{ marginTop: 10 }} />
            </div>
            <h3>Formation d’excellence</h3>
            <p>
              Formé à l’École d’ébénisterie d’art de Montréal pour transformer ma passion en savoir-faire professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Section Valeurs & Philosophie */}
      <section id="valeurs" style={{ margin: "4em 0", display: "flex", alignItems: "center", gap: "2em" }}>
        {/* Bloc image/atelier - met une image ou une couleur temporaire */}
        <div style={{
          width: "450px",
          height: "300px",
          background: "linear-gradient(120deg, #dce6ee 0%, #eaf2fa 100%)",
          borderRadius: "1.5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#b0bdc9"
        }}>
          <span>Atelier de travail</span>
        </div>
        {/* Texte valeurs */}
        <div>
          <h2>
            Valeurs &amp; Philosophie
          </h2>
          <p><b>Service centré sur le client</b> avec une approche hautement personnalisée. Je prends le temps d’écouter attentivement pour comprendre exactement ce que chaque client envisage.</p>
          <p>
            Ma passion pour le bois est née dès l’enfance, en construisant des objets et des cabanes dans les arbres. Inspiré par l’art, la littérature et la beauté naturelle du bois, je me suis formé à l’École d’ébénisterie d’art de Montréal pour transformer ma passion en métier.
          </p>
        </div>
      </section>

      {/* 3. Section À propos de l’entreprise */}
      <section id="a-propos" style={{ margin: "4em 0", display: "flex", alignItems: "center", gap: "2em" }}>
        <div style={{ flex: 2 }}>
          <h2>
            À propos de <span style={{ color: "#7495b7" }}>JS Bouchard Ébénisterie</span>
          </h2>
          <p>
            JS Bouchard Ébénisterie se spécialise dans la fabrication de mobilier sur mesure haut de gamme, incluant des meubles et objets en bois massif, la restauration de meubles anciens ou endommagés, ainsi que la réalisation de cuisines, salles de bain et aménagements divers. Notre style varie selon les besoins : il puise autant dans la tradition que dans la modernité, avec un souci du détail et de la satisfaction du client.
          </p>
          <p>
            Chaque pièce est conçue pour s’harmoniser parfaitement avec votre espace et refléter votre personnalité. Notre engagement : vous offrir un accompagnement personnalisé du premier contact jusqu’à l’installation finale.
          </p>
        </div>
        <div style={{
          flex: 1,
          width: "400px",
          height: "280px",
          background: "#966341",
          borderRadius: "1.5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffe",
          fontSize: "1.1em"
        }}>
          Portrait du fondateur
        </div>
      </section>

      {/* 4. Portrait du propriétaire (Jean-Sébastien) */}
      <section id="portrait" style={{ margin: "4em 0", display: "flex", alignItems: "center", gap: "2em" }}>
        {/* Tu pourras remplacer la couleur par une vraie photo */}
        <div style={{
          width: "400px",
          height: "280px",
          background: "linear-gradient(120deg, #dce6ee 0%, #eaf2fa 100%)",
          borderRadius: "1.5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#b0bdc9"
        }}>
          Portrait de Jean-Sébastien
        </div>
        <div>
          <h2>À propos du fondateur</h2>
          <p>
            Depuis mon plus jeune âge, j’ai toujours aimé fabriquer des objets en bois ou des cabanes dans les arbres. Les années ont passé, mais la passion est restée intacte : j’ai simplement décidé d’en faire un métier. Mon inspiration ? L’art, la littérature, l’anatomie, mais aussi la beauté brute et chaleureuse du bois. Après avoir perfectionné mon savoir-faire à l’École d’ébénisterie d’art de Montréal, j’ai à cœur de mettre ma créativité et mon exigence au service de chaque projet, pour transformer une idée en œuvre unique et durable.
          </p>
        </div>
      </section>

      {/* 5. Section Nos services */}
      <section id="services" style={{ margin: "4em 0" }}>
        <h2>
          Nos <span style={{ color: "#7495b7" }}>services</span>
        </h2>
        <p>
          Des cuisines sur mesure aux éléments décoratifs, nous offrons une gamme complète de services d’ébénisterie pour les particuliers et les professionnels.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2em" }}>
          {/* Service 1 */}
          <div style={{ textAlign: "center", width: "320px", background: "#f8fafd", borderRadius: "1em", padding: "1.5em" }}>
            <Home size={38} color="#7495b7" style={{ marginBottom: 12 }} />
            <h3>Pour les particuliers</h3>
            <p>
              Meubles sur mesure pour s’harmoniser avec le style personnel et l’espace de vie de chacun : mobilier, armoires de cuisine, salle de bain, rangements, éléments décoratifs.
            </p>
          </div>
          {/* Service 2 */}
          <div style={{ textAlign: "center", width: "320px", background: "#f8fafd", borderRadius: "1em", padding: "1.5em" }}>
            <Building size={38} color="#7495b7" style={{ marginBottom: 12 }} />
            <h3>Pour les professionnels</h3>
            <p>
              Mobilier de bureau, éléments décoratifs et installations uniques pour commerces, bureaux ou espaces professionnels. Chaque projet est pensé pour optimiser l’esthétique et la fonctionnalité.
            </p>
          </div>
          {/* Service 3 */}
          <div style={{ textAlign: "center", width: "320px", background: "#f8fafd", borderRadius: "1em", padding: "1.5em" }}>
            <RefreshCw size={38} color="#7495b7" style={{ marginBottom: 12 }} />
            <h3>Restauration</h3>
            <p>
              Restauration de meubles anciens ou endommagés avec respect des techniques traditionnelles. Redonnez vie à vos pièces de valeur.
            </p>
          </div>
        </div>
        <div style={{ marginTop: "2em", textAlign: "center", color: "#444" }}>
          <b>Également disponible :</b> cuisines sur mesure, armoires de salle de bain, restauration de meubles avec des techniques respectueuses du patrimoine.
        </div>
      </section>

      {/* 6. Zone de service */}
      <section id="zone-service" style={{
        margin: "4em 0",
        background: "#966341",
        borderRadius: "1.5em",
        color: "white",
        textAlign: "center",
        padding: "2.5em 1em 2em 1em",
        fontSize: "1.1em"
      }}>
        <MapPin size={32} style={{ marginBottom: 8 }} />
        <h3 style={{ marginBottom: 8 }}>Zone de service</h3>
        Repentigny et les villes environnantes : <br />
        <b>Laval, Mascouche, Terrebonne, L’Assomption</b>
      </section>
    </main>
  );
}

export default Accueil;
