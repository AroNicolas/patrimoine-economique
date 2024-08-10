import { useState, useEffect } from "react";
import Patrimoine from "../../models/Patrimoine.js";
import Flux from "../../models/possessions/Flux.js";
import jsonData from "../../data/data.json"
import Possession from "../../models/possessions/Possession.js";

const App = () => {
  const [date, setDate] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [possessions, setPossessions] = useState([]);

  useEffect(() => {
    const patrimoineData = jsonData.find(item => item.model === 'Patrimoine').data;
    const possessionsList = patrimoineData.possessions.map(item => {
      if (item.tauxAmortissement !== null) {
        return new Possession(item.possesseur.nom, item.libelle, item.valeur, new Date(item.dateDebut), item.dateFin ? new Date(item.dateFin) : null, item.tauxAmortissement);
      } else {
        return new Flux(item.possesseur.nom, item.libelle, item.valeurConstante, new Date(item.dateDebut), item.dateFin ? new Date(item.dateFin) : null, item.tauxAmortissement, item.jour);
      }
    });
    setPossessions(possessionsList);
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const calculateTotalValue = () => {
    const selectedDate = new Date(date);
    const patrimoine = new Patrimoine('John Doe', possessions);
    const value = patrimoine.getValeur(selectedDate);
    setTotalValue(value);
  };

  return (
    <div className="container text-center" style={{ color: 'blue', marginTop: '50px' }}>
      <h1>Calcul de Patrimoine Économique</h1>
      <div className="form-group">
        <label htmlFor="dateInput">Sélectionnez une date :</label>
        <input type="date" className="form-control" id="dateInput" value={date} onChange={handleDateChange} />
      </div>
      <button className="btn btn-primary mt-3" onClick={calculateTotalValue}>Valider</button>

      <table className="table table-bordered table-striped mt-5">
        <thead>
          <tr>
            <th>Libellé</th>
            <th>Valeur Initiale</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Amortissement (%)</th>
            <th>Valeur Actuelle (Ar)</th>
          </tr>
        </thead>
        <tbody>
          {possessions.map((possession, index) => (
            <tr key={index}>
              <td>{possession.libelle}</td>
              <td>{possession.valeur}</td>
              <td>{possession.dateDebut.toDateString()}</td>
              <td>{possession.dateFin ? possession.dateFin.toDateString() : 'Null'}</td>
              <td>{possession.tauxAmortissement || 'Null'}</td>
              <td>{possession.getValeur(new Date()).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-5">Valeur Totale à la date sélectionnée : {totalValue.toFixed(2)} Ar</h2>
    </div>
  );
};

export default App;

