import React, { useEffect, useState } from "react";
import "./Navbar.css";
import gsap from "gsap";
import useIsMobile from "../hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile(1300);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    console.log(`Scroll to section ${id}`);
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

    // IntersectionObserver to track when sections come into view
    const sections = ["about", "projekte", "M-projekte", "kontakt"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    // Start observing each section
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="navbar">
      <button
        onClick={() => scrollToSection("about")}
        className={`navbar-link ${activeSection === "about" ? "active" : ""}`}
      >
        About
      </button>
      <button
        onClick={() => scrollToSection(isMobile ? "M-projekte" : "projekte")}
        className={`navbar-link ${
          activeSection === "projekte" || activeSection === "M-projekte"
            ? "active"
            : ""
        }`}
      >
        Projekte
      </button>
      <button
        onClick={() => scrollToSection("kontakt")}
        className={`navbar-link ${activeSection === "kontakt" ? "active" : ""}`}
      >
        Kontakt
      </button>
    </div>
  );
};

export default Navbar;
