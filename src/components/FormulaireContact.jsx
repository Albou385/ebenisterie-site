// src/components/FormulaireContact.jsx

function FormulaireContact() {
  return (
    <form
      action="https://formspree.io/f/XXXXX" // Remplace XXXXX par ton ID Formspree
      method="POST"
      style={{
        background: "#faf8f3",
        borderRadius: "1.2em",
        padding: "2em",
        width: "100%",       // <-- full width dispo dans le parent flex
        minWidth: 0,         // <-- important pour flexbox responsive
        boxSizing: "border-box",
        flex: 1,             // <-- prend tout l’espace dispo dans le flex parent
      }}
    >
      <h2 style={{ marginBottom: 18 }}>Demande de devis</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Nom</label>
        <input type="text" name="nom" required style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Email</label>
        <input type="email" name="email" required style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Téléphone</label>
        <input type="text" name="telephone" style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Type de projet</label>
        <input type="text" name="sujet" style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label>Description du projet</label>
        <textarea name="description" rows={4} style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "0.9em",
          background: "#d3d8de",
          color: "#222",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
          fontSize: "1.1em"
        }}
      >
        Envoyer ma demande
      </button>
      <div style={{ color: "#aaa", marginTop: 10, textAlign: "center" }}>
        (Formulaire interactif en développement)
      </div>
    </form>
  );
}

export default FormulaireContact;
