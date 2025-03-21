import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MangaDetailsPage from "./pages/MangaDetailsPage";
import BrowsePage from "./pages/BrowsePage";
import ReaderPage from "./pages/ReaderPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manga/:id" element={<MangaDetailsPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/manga/:mangaId/chapter/:chapterNumber" element={<ReaderPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;