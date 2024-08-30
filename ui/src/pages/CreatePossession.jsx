import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PossessionForm from "../components/PossessionForm";

function CreatePossessionPage() {
  const [libelle, setLibelle] = useState("");
  const [newPossession, setNewPossession] = useState({})
  const [valeur, setValeur] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [tauxAmortissement, setTauxAmortissement] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/possession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ libelle, valeur, dateDebut, tauxAmortissement }),
    });
    const data = await response.json();
    console.log(data); 
    setNewPossession(data.valeur)
    navigate("/possession");
  };

  return (
    <PossessionForm
      libelle={libelle}
      valeur={valeur}
      dateDebut={dateDebut}
      tauxAmortissement={tauxAmortissement}
      onLibelleChange={(e) => setLibelle(e.target.value)}
      onValeurChange={(e) => setValeur(e.target.value)}
      onDateDebutChange={(e) => setDateDebut(e.target.value)}
      onTauxChange={(e) => setTauxAmortissement(e.target.value)}
      onSubmit={handleSubmit}
    />
  );
}

export default CreatePossessionPage;
