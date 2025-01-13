import React, { useEffect, useRef } from "react";
import "./Projekte.css";
import gsap from "gsap";

const Projekte = () => {
  const projektHolderRef = useRef(null);
  const hoverProjekteBgRef = useRef(null);
  const VideoRef = useRef(null);

  useEffect(() => {
    const projekteHolder = projektHolderRef.current;
    const hoverProjekteBg = hoverProjekteBgRef.current;
    const video = VideoRef.current;

    const handleMouseEnter = (event) => {
      const projektHolder = event.currentTarget;
      const videoIndex = projektHolder.dataset.index;

      video.src = `videos/hero-${videoIndex}.mp4`;
      video.play();

      gsap.to(hoverProjekteBg, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(video, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(hoverProjekteBg, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(video, {
        opacity: 0,
        x: -100,
        duration: 0.3,
        ease: "power1.inOut",
      });
    };

    const projektHolders = projekteHolder.querySelectorAll(".projekt-holder");
    projektHolders.forEach((holder, index) => {
      holder.dataset.index = index + 1;
      holder.addEventListener("mouseenter", handleMouseEnter);
      holder.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      projektHolders.forEach((holder) => {
        holder.removeEventListener("mouseenter", handleMouseEnter);
        holder.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div id="projekte">
      <div className="projekte-right">
        <h3>Projekte</h3>
        <div className="projekte-holder" ref={projektHolderRef}>
          <a className="projekt-holder">
            <p className="projekt-name">Rewe Filiale</p>
            <div className="projekt-tools-holder">
              <p>React</p>
              <p>Contentful</p>
            </div>
          </a>
          <a className="projekt-holder">
            <p className="projekt-name">Bitcoin</p>
            <div className="projekt-tools-holder">
              <p>Vite</p>
              <p>React</p>
              <p>gsap</p>
            </div>
          </a>
          <a className="projekt-holder">
            <p className="projekt-name">Rustica</p>
            <div className="projekt-tools-holder">
              <p>React</p>
              <p>MongoDB</p>
              <p>Node.js</p>
            </div>
          </a>
          <a className="projekt-holder">
            <p className="projekt-name">Webflow</p>
          </a>
        </div>
      </div>
      <div id="hover-projekte-bg" ref={hoverProjekteBgRef}></div>

      <video
        className="projekt-video"
        ref={VideoRef}
        src=""
        loop
        muted
        id="next-video"
      />
    </div>
  );
};

export default Projekte;