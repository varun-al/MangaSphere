import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MangaDetailsPage from "./pages/MangaDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manga/:id" element={<MangaDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;