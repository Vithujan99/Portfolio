import "./App.css";
import Hero from "./About/About";
import Kontakt from "./Kontakt/Kontakt";
import Navbar from "./Navbar/Navbar";
import Projekte from "./Projekte/Projekte";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projekte />
      <Kontakt />
    </div>
  );
}

export default App;
