import { useEffect } from "react";
import gsap from "gsap";
import "./About.css";
import { ReactTyped } from "react-typed";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-left h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.75 }
    );
    gsap.fromTo(
      ".about-right h2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.75 }
    );
  }, []);
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-left">
          <h1>
            Vithujan <br /> Mohanathas
          </h1>
        </div>
        <div className="about-right">
          <h2>
            <ReactTyped
              strings={[
                "Webentwickler",
                "Frontend-Entwickler",
                "Backend-Entwickler",
                "UI/UX-Enthusiast",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
