import React, { useState, useEffect } from "react";
import PossessionList from "../dumbComponent/PossessionList";

function PossessionListPage() {
  const [possessions, setPossessions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://patrimoine-economique-backend-rzko.onrender.com/possession", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);    
      const data = await response.json();
      setPossessions(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };


  useEffect(() => {

    fetchData();
  }, []);

  return <PossessionList possessions={possessions} refetchPossessions={fetchData}/>;
}

export default PossessionListPage;
