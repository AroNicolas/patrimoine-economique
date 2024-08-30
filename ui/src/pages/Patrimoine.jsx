import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ChartComponent from "../components/pagePatrimoine/ChartComponent";
import DateRangeSelector from "../components/pagePatrimoine/DateRangeSelector";
import ValueGetter from "../components/pagePatrimoine/ValueGetter";

function PatrimoinePage() {
  const [dateDebut, setDateDebut] = useState(null);
  const [dateFin, setDateFin] = useState(null);
  const [jour, setJour] = useState(1);
  const [chartData, setChartData] = useState([]);
  const [valuePatrimoine, setValuePatrimoine] = useState(0);
  const [dateSelected, setDateSelected ] = useState(null)

  

  const handleValidateRange = async () => {
    const response = await fetch("http://localhost:3000/patrimoine/range", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "month", dateDebut, dateFin, jour}),
    });
    const data = await response.json();
    setChartData(data.valeur);
  };

  const handleGetValeur = async (date) => {
    const response = await fetch(`http://localhost:3000/patrimoine/${date.toISOString()}`);
    const data = await response.json();
    setValuePatrimoine(data.valeur);
  };

  return (
    <div className="container">   
      <div class="row py-3">
        <div className="col-md-8">
          <h4>Graphique</h4>
          <DateRangeSelector 
            dateDebut={dateDebut} 
            setDateDebut={setDateDebut} 
            dateFin={dateFin} 
            setDateFin={setDateFin} 
            jour={jour} 
            setJour={setJour} 
            handleValidateRange={handleValidateRange} 
          />
          {chartData && <ChartComponent data={chartData} x={parseInt(jour)}/>}
        </div>

        <div className="col-md-4">
          <h4>Calcul de la valeur totale du Patrimoine</h4>
          <ValueGetter 
            dateSelected = {dateSelected}
            setDateSelected = {setDateSelected}
            handleGetValeur={handleGetValeur} 
            valuePatrimoine = {valuePatrimoine}
          />
        </div>
      </div> 
    </div>
  );
}

export default PatrimoinePage;
