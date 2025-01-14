import React, { useEffect, useRef, useState } from "react";
import "./Projekte.css";
import gsap from "gsap";

const Projekte = () => {
  const projektHolderRef = useRef(null);
  const hoverProjekteBgRef = useRef(null);
  const VideoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const projekteHolder = projektHolderRef.current;
    const hoverProjekteBg = hoverProjekteBgRef.current;
    const video = VideoRef.current;

    const handleMouseEnter = (event) => {
      const projektHolder = event.currentTarget;
      const videoIndex = projektHolder.dataset.index;

      setIsLoading(true); // Start loading

      video.poster = `thumbnails/hero-${videoIndex}.png`;
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

  const handleWaiting = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div id="projekte">
      <div className="projekte-container">
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
                <p>Gsap</p>
                <p>Tailwind</p>
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
        <div id="hover-projekte-bg" ref={hoverProjekteBgRef} />
        <video
          className="projekt-video"
          ref={VideoRef}
          src=""
          loop
          muted
          poster="thumbnails/hero-1.png"
          id="next-video"
          onWaiting={handleWaiting}
          onCanPlay={handleCanPlay}
          onLoadedData={handleLoadedData}
        />
        <div className="video-container">
          {isLoading && <div className="spinner"></div>}
        </div>
      </div>
    </div>
  );
};

export default Projekte;
