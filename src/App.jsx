import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import EpisodesPages from "./Pages/Episodes/EpisodesPages";
import CharactersPages from "./Pages/Characters/CharactersPages";
import CharacterDetail from "./Pages/CharacterDetail/CharacterDetail";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PlacesPages from "./Pages/Places/PlacesPage";
import MainHomePage from "./Pages/MainHome/MainHomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  // useEffect(() => {
  //   const navEntries = performance.getEntriesByType("navigation");
  //   if (navEntries[0]?.type === "reload") {
  //     window.location.replace("/MainHome");
  //   }
  // }, []);

  return (
    <Router>
      <Header />
      <div id="contentBody">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/MainHome" replace />} /> */}

          <Route path="/Places" element={<PlacesPages />} />

          <Route path="/MainHome" element={<MainHomePage />} />
          <Route path="/Characters" element={<CharactersPages />} />
          <Route path="/Characters/:id" element={<CharacterDetail />} />
          <Route path="/Episodes" element={<EpisodesPages />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
