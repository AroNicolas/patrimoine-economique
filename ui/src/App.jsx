import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PatrimoinePage from "./pages/Patrimoine";
import PossessionListPage from "./pages/ListPossession";
import CreatePossessionPage from "./pages/CreatePossession";
import UpdatePossessionPage from "./pages/UpdatePossession";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="p-2 bg-secondary">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-light">Patrimoine Economique</h1>
            <div className="d-flex flex-row justify-content-around py-2">
              <Link to="/patrimoine" className="btn btn-outline-light">
                Valeur du Patrimoine
              </Link>
              <Link to="/possession" className="btn btn-outline-light">
                Afficher les Possessions
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<PatrimoinePage />} />
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