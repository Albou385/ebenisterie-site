// src/pages/Contact.jsx

import FormContact from "../components/FormulaireContact";
import InfoContact from "../components/InfoContact";
import Container from "../components/Container";

function Contact() {
  return (
    <Container>
      <main
        style={{
          width: "100%",
          minHeight: "80vh",
          padding: "3em 0",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "2.7em", color: "#7495b7" }}>Contactez-nous</h1>
        <p
          style={{
            fontSize: "1.25em",
            color: "#444",
            margin: "1.5em 0 2.5em 0",
          }}
        >
          Prêt à donner vie à votre projet d’ébénisterie ? Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "3em",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Les deux blocs prennent la même largeur, responsive */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <FormContact />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <InfoContact />
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Contact;
