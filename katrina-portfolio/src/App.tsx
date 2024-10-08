import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
