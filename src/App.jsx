import "./App.css";
import Header from "./Components/Header/Header";
import EpisodesPages from "./Pages/Episodes/EpisodesPages";
import CharactersPages from "./Pages/Characters/CharactersPages";
import CharacterDetail from "./Pages/CharacterDetail/CharacterDetail";
import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries[0]?.type === "reload") {
      window.location.replace("/Characters");
    }
  }, []);
  return (
    <Router>
      <Header />
      <div id="contentBody">
        <Routes>
          <Route path="/Characters" element={<CharactersPages />} />
          <Route path="/Characters/:id" element={<CharacterDetail />} />
          <Route path="/Episodes" element={<EpisodesPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
