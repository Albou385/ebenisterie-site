// src/components/GalerieProjet.jsx

import CarteProjet from "./CarteProjet.jsx";
import { useState } from "react";
import tabouret from '../assets/Tabouret Per Manum.jpg';
import serieLimitee from '../assets/Série limitée.jpg';
import horloge from '../assets/Horloge Esto Memor.jpg';
import horloge2 from '../assets/Horloge Esto Memor2.jpg';

const projets = [
  {
    titre: "Tabouret Per Manum",
    images: [tabouret],
    description: "Tabouret sculpté dans un seul bloc de noyer massif, aux formes organiques et arrondies.\nLe siège légèrement creusé repose sur trois appuis sculpturaux, donnant à la pièce un aspect à la fois solide et fluide.\nLa finition lisse met en valeur les veines naturelles du bois et souligne le caractère unique de chaque réalisation."
  },
  {
    titre: "Ensemble de plateaux en bois massif",
    images: [serieLimitee],
    description: "Trois plateaux empilables en noyer avec une bande centrale en érable clair.\nChaque plateau est muni de barres en laiton brossé et présente des assemblages à queues droites apparents aux coins.\nLes découpes en façade facilitent la prise en main et créent un design harmonieux et fonctionnel."
  },
  {
    titre: "Horloge Esto Memor",
    images: [horloge, horloge2],
    description: "Horloge de style traditionnel réalisée en noyer massif, avec un caisson vitré laissant apparaître le balancier et le mécanisme.\nLe cadran circulaire, orné de chiffres romains et d'un motif de rose rouge tenue par une main stylisée, apporte une touche distinctive.\nLa finition soignée met en valeur les veines naturelles du bois, soulignant à la fois l'élégance et la robustesse de la pièce."
  }
];

function GalerieProjet() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (projet) => {
    setProjetSelectionne(projet);
  };

  const fermerModal = () => {
    setProjetSelectionne(null);
    setImageIndex(0);
  };

  const imageSuivante = () => {
    if (projetSelectionne && imageIndex < projetSelectionne.images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const imagePrecedente = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "2rem auto 0 auto",
        padding: "0 1rem"
      }}>
                 {projets.map((projet, idx) => (
           <CarteProjet
             key={idx}
             titre={projet.titre}
             imageUrl={projet.images[0]}
             description={projet.description}
             onClick={() => handleClick(projet)}
           />
         ))}
      </div>

             {/* Modal pour afficher les détails du projet */}
       {projetSelectionne && (
         <div style={{
           position: "fixed",
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           background: "rgba(0, 0, 0, 0.9)",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           zIndex: 1000,
           padding: "1rem"
         }}
         onClick={fermerModal}
         >
           <div style={{
             background: "white",
             borderRadius: "1.5rem",
             padding: "2.5rem",
             maxWidth: "900px",
             width: "100%",
             maxHeight: "90vh",
             overflow: "auto",
             position: "relative"
           }}
           onClick={(e) => e.stopPropagation()}
           >
             {/* Bouton fermer */}
             <button
               onClick={fermerModal}
               style={{
                 position: "absolute",
                 top: "1.5rem",
                 right: "1.5rem",
                 background: "none",
                 border: "none",
                 fontSize: "2rem",
                 cursor: "pointer",
                 color: "#666",
                 width: "2.5rem",
                 height: "2.5rem",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 borderRadius: "50%",
                 transition: "background 0.2s",
                 zIndex: 10
               }}
               onMouseEnter={(e) => e.target.style.background = "#f0f0f0"}
               onMouseLeave={(e) => e.target.style.background = "transparent"}
             >
               ×
             </button>

             {/* Titre */}
             <h2 style={{
               color: "#62b9fb",
               marginBottom: "2rem",
               fontSize: "2.2em",
               textAlign: "center"
             }}>
               {projetSelectionne.titre}
             </h2>

             {/* Galerie d'images avec navigation */}
             <div style={{
               position: "relative",
               width: "100%",
               height: "500px",
               borderRadius: "1rem",
               overflow: "hidden",
               marginBottom: "2rem",
               background: "#f8f8f8"
             }}>
               {/* Image principale */}
               <img
                 src={projetSelectionne.images[imageIndex]}
                 alt={`${projetSelectionne.titre} - Image ${imageIndex + 1}`}
                 style={{
                   width: "100%",
                   height: "100%",
                   objectFit: "contain"
                 }}
               />

               {/* Boutons de navigation (seulement si plusieurs images) */}
               {projetSelectionne.images.length > 1 && (
                 <>
                                        {/* Bouton précédent */}
                     <div
                       onClick={imagePrecedente}
                       style={{
                         position: "absolute",
                         left: "1rem",
                         top: "50%",
                         transform: "translateY(-50%)",
                         background: "rgba(255,255,255,0.9)",
                         border: "none",
                         borderRadius: "50%",
                         width: "3rem",
                         height: "3rem",
                         cursor: "pointer",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center",
                         fontSize: "1.5rem",
                         color: "#333",
                         boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                         transition: "all 0.2s",
                         opacity: imageIndex === 0 ? 0.5 : 1,
                         userSelect: "none"
                       }}
                       onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,1)"}
                       onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.9)"}
                     >
                       ‹
                     </div>

                                        {/* Bouton suivant */}
                     <div
                       onClick={imageSuivante}
                       style={{
                         position: "absolute",
                         right: "1rem",
                         top: "50%",
                         transform: "translateY(-50%)",
                         background: "rgba(255,255,255,0.9)",
                         border: "none",
                         borderRadius: "50%",
                         width: "3rem",
                         height: "3rem",
                         cursor: "pointer",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center",
                         fontSize: "1.5rem",
                         color: "#333",
                         boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                         transition: "all 0.2s",
                         opacity: imageIndex === projetSelectionne.images.length - 1 ? 0.5 : 1,
                         userSelect: "none"
                       }}
                       onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,1)"}
                       onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.9)"}
                     >
                       ›
                     </div>

                   {/* Indicateurs de position */}
                   <div style={{
                     position: "absolute",
                     bottom: "1rem",
                     left: "50%",
                     transform: "translateX(-50%)",
                     display: "flex",
                     gap: "0.5rem"
                   }}>
                     {projetSelectionne.images.map((_, idx) => (
                       <div
                         key={idx}
                         style={{
                           width: "0.8rem",
                           height: "0.8rem",
                           borderRadius: "50%",
                           background: idx === imageIndex ? "#62b9fb" : "rgba(255,255,255,0.6)",
                           transition: "background 0.2s"
                         }}
                       />
                     ))}
                   </div>
                 </>
               )}
             </div>

                           {/* Description */}
              <p style={{
                color: "#444",
                lineHeight: "1.7",
                fontSize: "1.2em",
                textAlign: "justify",
                whiteSpace: "pre-line"
              }}>
                {projetSelectionne.description}
              </p>
           </div>
         </div>
       )}
    </>
  );
}

export default GalerieProjet;
