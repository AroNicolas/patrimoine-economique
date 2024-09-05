import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PatrimoinePage from "./components/smartComponent/Patrimoine";
import PossessionListPage from "./components/smartComponent/ListPossession";
import CreatePossessionPage from "./components/smartComponent/CreatePossession";
import UpdatePossessionPage from "./components/smartComponent/UpdatePossession";
import "./App.css";

function App() {
  return (
    <Router>
    <header className="p-3 bg-primary vw-100 m-0">
      <div className="d-flex justify-content-between align-items-center w-100">
        <h1 className="text-light fs-3">Patrimoine Economique</h1>       
        <div className="d-flex container-fluid justify-content-end">
          <Link to="/patrimoine" className="btn btn-outline-light me-2">
            Valeur du Patrimoine
          </Link>
          <Link to="/possession" className="btn btn-outline-light">
            Afficher les Possessions
          </Link>
        </div>
      </div>
    </header>


      <Routes>
        <Route path="/" element={<PossessionListPage />} />
        <Route path="/patrimoine" element={<PatrimoinePage />} />
        <Route path="/possession" element={<PossessionListPage />} />
        <Route path="/possession/create" element={<CreatePossessionPage />} />
        <Route
          path="/possession/:libelle/update"
          element={<UpdatePossessionPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;