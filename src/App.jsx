import "./App.css";
import Hero from "./About/About";
import Kontakt from "./Kontakt/Kontakt";
import Navbar from "./Navbar/Navbar";
import Projekte from "./Projekte/Projekte";
import MProjekte from "./Projekte/MProjekte";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
