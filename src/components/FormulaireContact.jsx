// src/components/FormulaireContact.jsx

function FormulaireContact() {
  return (
    <form
      action="https://formsubmit.co/alexandre385@hotmail.com"
      method="POST"
      encType="multipart/form-data"
      style={{
        background: "#faf8f3",
        borderRadius: "1.2em",
        padding: "2em",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        flex: 1,
        border: "3px solid #7495b7",
        boxShadow: "0 4px 8px rgba(116, 149, 183, 0.2)",
      }}
    >
      <h2 style={{ marginBottom: 18, color: "#7495b7", textAlign: "center" }}>Demande de devis</h2>
      
      {/* Champ caché pour configurer FormSubmit */}
      <input type="hidden" name="_subject" value="Nouvelle demande de devis - JS Bouchard Ébénisterie" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_next" value="http://localhost:5175/merci" />
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off"
       style={{position: "absolute", left: "-9999px", top: "-9999px"}} />

      
      <div style={{ marginBottom: 16 }}>
        <label>Nom *</label>
        <input type="text" name="nom" required style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Email *</label>
        <input type="email" name="email" required style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Téléphone *</label>
        <input type="tel" name="telephone" required style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Description du projet *</label>
        <textarea name="description" rows={4} required style={{ width: "100%", padding: 10, borderRadius: 7, border: "1px solid #e1e1e1", marginTop: 5 }} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label>Fichier joint (optionnel)</label>
        <input 
          type="file" 
          name="attachment" 
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
          style={{ 
            width: "100%", 
            padding: 10, 
            borderRadius: 7, 
            border: "1px solid #e1e1e1", 
            marginTop: 5,
            background: "white"
          }} 
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "0.9em",
          background: "#62b9fb",
          color: "white",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
          fontSize: "1.1em",
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => e.target.style.background = "#5a7a9a"}
        onMouseOut={(e) => e.target.style.background = "#62b9fb"}
      >
        Envoyer ma demande
      </button>
    </form>
  );
}

export default FormulaireContact;
