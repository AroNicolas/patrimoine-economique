import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ChartComponent from "../dumbComponent/patrimoinePage/ChartComponent";
import DateRangeSelector from "../dumbComponent/patrimoinePage/DateRangeSelector";
import ValueGetter from "../dumbComponent/patrimoinePage/ValueGetter";

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
    <div className="py-3">   
        <div className="custom-container m-5 p-3">
          <h4> <i class="fa-solid fa-hand-holding-dollar"></i> Calculer la valeur totale du Patrimoine</h4>
          <ValueGetter 
            dateSelected = {dateSelected}
            setDateSelected = {setDateSelected}
            handleGetValeur={handleGetValeur} 
            valuePatrimoine = {valuePatrimoine}
          />
        </div>

        <div className="custom-container m-5 p-3">
          <h4> <i class="fa-solid fa-chart-line"></i> Graphique</h4>
          <div className="row">
            <div className="col-md-6">
            <DateRangeSelector 
              dateDebut={dateDebut} 
              setDateDebut={setDateDebut} 
              dateFin={dateFin} 
              setDateFin={setDateFin} 
              jour={jour} 
              setJour={setJour} 
              handleValidateRange={handleValidateRange} 
            />
            </div>
            <div className="col-md-6 mt-4">
            {chartData && <ChartComponent data={chartData} x={parseInt(jour)}/>}
            </div>
          </div>
        </div>
    </div>
  );
}

export default PatrimoinePage;
