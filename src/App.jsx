import React from "react";
import "./App.css";
import Hero from "./About/About";
import Kontakt from "./Kontakt/Kontakt";
import Navbar from "./Navbar/Navbar";
import Projekte from "./Projekte/Projekte";
import MProjekte from "./Projekte/MProjekte";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile(1300);

  return (
    <div>
      <Navbar />
      <Hero />
      {isMobile ? <MProjekte /> : <Projekte />}
      <Kontakt />
    </div>
  );
}

export default App;
