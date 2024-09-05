import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function DateRangeSelector({
  dateDebut,
  setDateDebut,
  dateFin,
  setDateFin,
  jour,
  setJour,
  handleValidateRange,
}) {
  return (
    <div className="range d-flex flex-row justify-content-around ">
      <div>
        <p>Date de début (MM/JJ/AAAA) :</p>
        <DatePicker selected={dateDebut} onChange={setDateDebut} />
      </div>
      <div>
        <p>Date fin (MM/JJ/AAAA) :</p>
        <DatePicker selected={dateFin} onChange={setDateFin} />
      </div>
      <div>
        <p>Jour :</p>
        <select value={jour} onChange={(e) => setJour(parseInt(e.target.value))}>
          {array.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className="btn btn-primary btn-lg mt-4"
          onClick={handleValidateRange}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default DateRangeSelector;
