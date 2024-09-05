import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ValueGetter({ dateSelected, setDateSelected, handleGetValeur, valuePatrimoine }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const endValue = valuePatrimoine;
    const startTime = performance.now();
  
    function update() {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = endValue * progress;
      setAnimatedValue(currentValue);
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    update();
  }, [valuePatrimoine]);
  

  return (
    <div className="range d-flex flex-column p-3 gap-4 justify-content-around">
      <div className="range d-flex flex-row align-items-center justify-content-center">
        <DatePicker
          placeholderText="Insérer date (MM/JJ/AAAA):"
          selected={dateSelected}
          onChange={setDateSelected}
        />
        <button className="btn btn-primary ms-2" onClick={() => handleGetValeur(dateSelected)}>
          Calculer
        </button>
      </div>
      <div className="d-flex flex-column">
        <p className="fs-6">La valeur du patrimoine est : </p>
        <p className="fw-bold fs-3 text-primary"> {`${parseFloat(animatedValue.toFixed(2)).toLocaleString()} Ar`}</p>
      </div>
    </div>
  );
}

export default ValueGetter;
