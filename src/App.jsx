import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import EpisodesPages from "./Pages/Episodes/EpisodesPages";
import CharactersPages from "./Pages/Characters/CharactersPages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <h1>...</h1>
      <div id="contentBody">
        <Routes>
          <Route path="/Episodes" element={<EpisodesPages />} />
          <Route path="/Characters" element={<CharactersPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
