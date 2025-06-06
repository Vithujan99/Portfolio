import React, { useEffect, useState } from "react";
import "./MProjekte.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MProjekte = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWaiting = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Animate project holders as they scroll into view
    const projekt = document.querySelectorAll(".M-projekt-holder");
    projekt.forEach((projekt) => {
      gsap.fromTo(
        projekt,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projekt,
            start: "top 80%", // Start animation when the top of the container is 80% of the viewport
            end: "top 40%", // End animation when the bottom of the container is 40% of the viewport
            scrub: true, // Smooth animation as the user scrolls
            toggleActions: "play reverse play reverse", // Play and reverse animations
          },
        }
      );
    });

    // Play video when it enters the center of the screen
    const videos = document.querySelectorAll(".M-projekt-video");
    videos.forEach((video) => {
      ScrollTrigger.create({
        trigger: video,
        start: "top 70%", // Trigger when the top of the video is at 70% of the viewport
        end: "bottom 30%", // Trigger until the bottom of the video leaves 30% of the viewport
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="M-projekte">
      <div className="M-projekte-container">
        <h3>Projekte</h3>
        <div className="M-projekte-holder">
          <div className="M-projekt-holder">
            <a
              className="M-projekt-info-holder"
              href="https://rewe-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="M-projekt-name">Rewe Filiale</p>
              <div className="M-projekt-tools-holder">
                <p>React</p>
                <p>Contentful</p>
              </div>
            </a>
            <div className="M-video-container">
              <video
                className="M-projekt-video"
                src="videos/projekt-1.mp4"
                loop
                muted
                autoPlay
                poster="thumbnails/projekt-1.webp"
                id="next-video"
                onWaiting={handleWaiting}
                onCanPlay={handleCanPlay}
                onLoadedData={handleLoadedData}
              />
              {isLoading && <div className="M-spinner"></div>}
            </div>
          </div>
          {/* Repeat for other projects */}
          <div className="M-projekt-holder">
            <a
              className="M-projekt-info-holder"
              href="https://animation-page-ivory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="M-projekt-name">Animation</p>
              <div className="M-projekt-tools-holder">
                <p>Vite</p>
                <p>React</p>
                <p>Gsap</p>
                <p>Tailwind</p>
                <p>Tutorial</p>
              </div>
            </a>
            <div className="M-video-container">
              <video
                className="M-projekt-video"
                src="videos/projekt-2.mp4"
                loop
                muted
                autoPlay
                poster="thumbnails/projekt-2.webp"
                id="next-video"
                onWaiting={handleWaiting}
                onCanPlay={handleCanPlay}
                onLoadedData={handleLoadedData}
              />
              {isLoading && <div className="M-spinner"></div>}
            </div>
          </div>

          <div className="M-projekt-holder">
            <a
              className="M-projekt-info-holder"
              href="https://github.com/Vithujan99/rustica-pizzeria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="M-projekt-name">Rustica</p>
              <div className="M-projekt-tools-holder">
                <p>React</p>
                <p>MongoDB</p>
                <p>Node.js</p>
                <p>Privat</p>
              </div>
            </a>
            <div className="M-video-container">
              <video
                className="M-projekt-video"
                src="videos/projekt-3.mp4"
                loop
                muted
                poster="thumbnails/projekt-3.webp"
                id="next-video"
                onWaiting={handleWaiting}
                onCanPlay={handleCanPlay}
                onLoadedData={handleLoadedData}
              />
              {isLoading && <div className="M-spinner"></div>}
            </div>
          </div>

          <div className="M-projekt-holder">
            <a
              className="projekt-holder"
              href="https://github.com/Vithujan99/UniSplitterProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="projekt-name">Splitter</p>
              <div className="projekt-tools-holder">
                <p>Java</p>
                <p>Spring Boot</p>
                <p>Docker</p>
                <p>PostgreSQL</p>
                <p>Studium-Projekt</p>
              </div>
            </a>
            <div className="M-video-container">
              <video
                className="M-projekt-video"
                src="videos/projekt-4.mp4"
                loop
                muted
                poster="thumbnails/projekt-4.webp"
                id="next-video"
                onWaiting={handleWaiting}
                onCanPlay={handleCanPlay}
                onLoadedData={handleLoadedData}
              />
              {isLoading && <div className="M-spinner"></div>}
            </div>
          </div>

          <div className="M-projekt-holder">
            <a
              className="M-projekt-info-holder"
              href="https://pauls-awesome-site-1cc3d9.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="M-projekt-name">Webflow</p>
            </a>
            <div className="M-video-container">
              <video
                className="M-projekt-video"
                src="videos/projekt-5.mp4"
                loop
                muted
                poster="thumbnails/projekt-5.webp"
                id="next-video"
                onWaiting={handleWaiting}
                onCanPlay={handleCanPlay}
                onLoadedData={handleLoadedData}
              />
              {isLoading && <div className="M-spinner"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MProjekte;
