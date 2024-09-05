import React from "react";
import { Link } from "react-router-dom";


function PossessionList({ possessions, refetchPossessions }) {

  const closePossession = async (libelle) => {
    try {
      const response = await fetch(`http://localhost:3000/possession/${libelle}/close`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      refetchPossessions();
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="p-4"> <i class="fa-solid fa-table-list"></i> Liste des Possessions</h2>
      <div className="table-responsive">
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Libellé</th>
            <th>Valeur Initiale</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Taux</th>
            <th>Valeur Actuelle</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {possessions.map((possession, index) => (
            <tr key={index}>
              <td>{possession.libelle}</td>
              <td>
                {possession.valeur 
                  ? `${possession.valeur.toLocaleString()} Ar` 
                  : `${possession.valeurConstante.toLocaleString()} Ar`}
                </td>
              <td>
                {possession.dateDebut
                  ? new Date(possession.dateDebut).toLocaleDateString()
                  : "___"}
              </td>
              <td>
                {possession.dateFin
                  ? new Date(possession.dateFin).toLocaleDateString()
                  : "___"}
              </td>
              <td>
                {possession.tauxAmortissement !== null
                  ? possession.tauxAmortissement+" %"
                  : "___"}
              </td>
              <td>{`${Number(possession.valeurActuelle).toLocaleString()} Ar`}</td>
              <td>
                <Link
                  to={`/possession/${possession.libelle}/update`}
                  className="btn btn-primary"
                >
                  <i class="fa-solid fa-pen"></i>
                </Link>
                <button className="btn btn-danger ms-2"
                  onClick={() => closePossession(possession.libelle)}
                >
                  <i class="fa-solid fa-ban"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Link to="/possession/create" className="btn btn-primary">
        Créer une Possession
      </Link>
    </div>
  );
}

export default PossessionList;
