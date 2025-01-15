import { useEffect } from "react";
import "./About.css";
import { ReactTyped } from "react-typed";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
  useGSAP(() => {
    gsap.set(".about-white-name", {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    });
    gsap.from(".about-white-name", {
      clipPath: "polygon(0 0, 75% 0, 20% 100%, 0% 100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".about-white-name",
        start: "top 50%",
        end: "bottom 5%",
        scrub: true,
      },
    });
    gsap.set(".about-pink-name", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    });
    gsap.from(".about-pink-name", {
      clipPath: "polygon(76% 0, 100% 0, 100% 100%, 21% 100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".about-pink-name",
        start: "top 50%",
        end: "bottom 5%",
        scrub: true,
      },
    });
  });
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-white-name">
            Vithujan <br /> Mohanathas
          </h1>
          <h1 className="about-pink-name">
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
