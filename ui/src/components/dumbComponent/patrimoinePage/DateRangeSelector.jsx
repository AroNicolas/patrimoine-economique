import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const array = [];
for (let i = 1; i <= 31; i++) {
  array.push(i);
}

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
    <div className="range d-flex flex-column justify-content-around ">
      <div className="d-flex flex-row justify-content-between p-3 m-2">
        <p>Date de début (MM/JJ/AAAA) :</p>
        <DatePicker selected={dateDebut} onChange={setDateDebut} />
      </div>
      <div className="d-flex flex-row justify-content-between p-3 m-2">
        <p>Date fin (MM/JJ/AAAA) :</p>
        <DatePicker selected={dateFin} onChange={setDateFin} />
      </div>
      <div className="d-flex flex-row justify-content-between p-3 m-2">
        <p>Jour :</p>
        <select style={{width: "70px"}} value={jour} onChange={(e) => setJour(parseInt(e.target.value))}>
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
