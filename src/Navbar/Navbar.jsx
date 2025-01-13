import React, { useEffect, useState } from "react";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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

    // IntersectionObserver to track when sections come into view
    const sections = ["about", "projekte", "kontakt"]; // Sections to observe
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section when in view
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
        onClick={() => scrollToSection("projekte")}
        className={`navbar-link ${
          activeSection === "projekte" ? "active" : ""
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
