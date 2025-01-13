import React, { useEffect } from "react";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { x: "-100%" },
      { x: "0%", duration: 1, ease: "power2.out" }
    );
  }, []);
  return (
    <div className="navbar">
      <button onClick={() => scrollToSection("about")} className="navbar-link">
        About
      </button>
      <button
        onClick={() => scrollToSection("projekte")}
        className="navbar-link"
      >
        Projekte
      </button>
      <button
        onClick={() => scrollToSection("kontakt")}
        className="navbar-link"
      >
        Kontakt
      </button>
    </div>
  );
};

export default Navbar;
