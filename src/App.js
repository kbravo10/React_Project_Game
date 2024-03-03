import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Game from "./components/Game";
import "./css/main.css";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
