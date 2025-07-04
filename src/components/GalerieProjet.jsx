// src/components/GalerieProjet.jsx

import CarteProjet from "./CarteProjet.jsx";

const projets = [
  {
    titre: "Cuisine en chêne massif",
    imageUrl: "/placeholder1.png", 
    description: "Cuisine sur mesure avec ilot central en chêne."
  },
  {
    titre: "Table à manger contemporaine",
    imageUrl: "/placeholder2.png",
    description: "Grande table de style contemporain, bois massif huilé."
  },
  {
    titre: "Buffet vitré restauré",
    imageUrl: "/placeholder3.png",
    description: "Restauration d’un buffet ancien pour lui redonner son éclat d’origine."
  }
  // Ajoute plus de projets ici
];

function GalerieProjet() {
  // À l’avenir : gérer l’état pour le popup ici
  const handleClick = (projet) => {
    alert("Popup à venir pour : " + projet.titre);
    // Ici, tu affichera le vrai popup plus tard
  };

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 32
    }}>
      {projets.map((projet, idx) => (
        <CarteProjet
          key={idx}
          titre={projet.titre}
          imageUrl={projet.imageUrl}
          description={projet.description}
          onClick={() => handleClick(projet)}
        />
      ))}
    </div>
  );
}

export default GalerieProjet;
