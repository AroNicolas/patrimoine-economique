import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ValueGetter({ dateSelected, setDateSelected, handleGetValeur, valuePatrimoine }) {
  return (
    <div className="range d-flex flex-column pe-3 justify-content-around">
      <div className="range d-flex flex-row justify-content-around">
      <DatePicker placeholderText="Insérer une date (MM/JJ/AAAA):" selected={dateSelected} onChange={setDateSelected} />
      <button className="btn btn-primary ms-2" onClick={() => handleGetValeur(dateSelected)}>
      Calculer
      </button>
      </div>
      <div className="d-flex flex-column">
        <p className="fs-2">La valeur du patrimoine est de : </p> <br />
        <p className="fw-bold fs-3"> {valuePatrimoine.toFixed(2)} Ar</p>
      </div>
    </div>
  );
}

export default ValueGetter;
