import React from 'react';

const UpdatePossessionForm = ({ libelle, dateFin, setDateFin, newLibelle, setNewLibelle, handleSubmit }) => {
  return (
    <div className="custom-container mt-5 px-3 container-fluid d-flex flex-column justify-content-center" style={{width: "70vh", height:"70vh"} }>
      <h2> <i class="fa-solid fa-folder-open"></i> Mettre à jour la possession: <br /> <br /> <span className="text-danger"> <i className="fas fa-tag"></i>  {libelle} </span> <br /> <br /> </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5 gap-3">
          <label>Nouveau nom du libellé</label>
          <input 
            type="text" 
            value={newLibelle} 
            onChange={(e) => setNewLibelle(e.target.value)} 
            className="form-control" 
          />
          <label>Date Fin</label>
          <input 
            type="date" 
            value={dateFin} 
            onChange={(e) => setDateFin(e.target.value)} 
            className="form-control" 
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default UpdatePossessionForm;
