import React, { useRef, useState, useEffect } from "react";
import "./Programm.css";

// Program image imports
import trumpetImg from "./ProgrammImage/Image1.png.jpeg";
import craftingFaithImg from "./ProgrammImage/Image2.png.jpeg";
import reflectionTimeImg from "./ProgrammImage/Image3.png.jpeg";
import longTimeAgoImg from "./ProgrammImage/Image4.png.jpeg";
import picImg from "./ProgrammImage/Pic.jpeg";
import pic1Img from "./ProgrammImage/pic1.jpeg";

const PROGRAMMES_DATA = [
  {
    id: "trumpet",
    title: "THE TRUMPET",
    subtitle: "The Trumpet (Info)",
    tag: "Flagship Broadcast",
    host: "Deacon Vijay Bansode",
    description: "An uplifting broadcast sounding the trumpet of truth, miracles, faith, and inspiration across nations.",
    schedule: "Every Sunday at 7:00 PM",
    image: trumpetImg,
    color: "#f5c242",
  },
  {
    id: "crafting-faith",
    title: "CRAFTING FAITH",
    subtitle: "Crafting Faith (Info)",
    tag: "Creative & Spiritual",
    host: "Loveworld India",
    description: "Explore the depths of God's Word with creative insights, heartfelt conversations, and practical faith building.",
    image: craftingFaithImg,
    color: "#d8b4fe",
  },
  {
    id: "reflection-time",
    title: "Reflection Time",
    subtitle: "with Abha",
    tag: "Youth & Inspiration",
    host: "Abha",
    description: "Deep, heartfelt reflections on everyday life, faith discoveries, and the transformative presence of the Holy Spirit.",
    schedule: "Wednesdays at 4:00 PM",
    image: reflectionTimeImg,
    color: "#a855f7",
  },
  {
    id: "long-time-ago",
    title: "LONG TIME AGO",
    subtitle: "Stories of Faith",
    tag: "History & Heroes",
    host: "Loveworld Kids & Teens",
    description: "Journey through time exploring biblical history, timeless testimonies, and the heroic men and women of God.",
    schedule: "Saturdays at 11:00 AM",
    image: longTimeAgoImg,
    color: "#60a5fa",
  },
];

const Programmes = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProg, setSelectedProg] = useState(null);

  // Smooth continuous auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const speed = 0.75; // Scroll speed in pixels per frame

    const step = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        // Seamless loop when reaching half of the duplicated list
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Manual scroll buttons
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Duplicate items for infinite seamless scroll
  const displayItems = [...PROGRAMMES_DATA, ...PROGRAMMES_DATA];

  return (
    <section className="programmesSection" id="programmes">
      {/* Ambient background glows */}
      <div className="progGlow progGlowLeft"></div>
      <div className="progGlow progGlowRight"></div>

      <div className="programmesContainer">
        {/* ================= SECTION HEADER ================= */}
        <div className="programmesHeader">
          <div className="headerLeft">
            <span className="sectionBadge">FEATURED BROADCASTS</span>
            <h2 className="sectionTitle">
              Our Inspiring <span className="goldGradient">Programmes</span>
            </h2>
            <p className="sectionSubtext">
              Tune into life-changing programs, powerful worship, youth insights, and dynamic ministry broadcasts.
            </p>
          </div>

          <div className="headerActions">
            <div className="carouselNav">
              <button
                className="navBtn"
                onClick={() => handleScroll("left")}
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                className="navBtn"
                onClick={() => handleScroll("right")}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>

            <a href="#all-programmes" className="exploreAllBtn">
              <span>EXPLORE ALL PROGRAMMES</span>
              <span className="btnArrow">→</span>
            </a>
          </div>
        </div>

        {/* ================= AUTO-SCROLL CAROUSEL ================= */}
        <div
          className="carouselTrackWrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="carouselTrack" ref={scrollRef}>
            {displayItems.map((prog, index) => (
              <div
                key={`${prog.id}-${index}`}
                className="programmeCard"
                onClick={() => setSelectedProg(prog)}
                style={{ "--accent-color": prog.color }}
              >
                <div className="cardContent">
                  <div className="cardTagWrapper">
                    <span className="cardTag">{prog.tag}</span>
                  </div>

                  <h3 className="cardTitle">
                    {prog.title}
                    {prog.subtitle && (
                      <span className="cardSubtitle">{prog.subtitle}</span>
                    )}
                  </h3>

                  <p className="cardDesc">{prog.description}</p>

                  <div className="cardFooter">
                    <button className="cardActionBtn">
                      <span>Learn More</span>
                      <span className="miniArrow">→</span>
                    </button>
                    <span className="autoscrollHint">● Live on Loveworld</span>
                  </div>
                </div>

                <div className="cardImageWrapper">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="cardImg"
                    loading="lazy"
                  />
                  <div className="imageGlow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM EXPLORE BAR ================= */}
        <div className="bottomExploreBar">
          <div className="autoscrollStatus">
            <span className="pulseDot"></span>
            <span>Auto-scrolling broadcasts • Hover to pause</span>
          </div>

          <a href="#all-programmes" className="bottomExploreLink">
            EXPLORE ALL PROGRAMMES <span className="goldArrow">→</span>
          </a>
        </div>
      </div>

      {/* ================= PROGRAM DETAIL MODAL ================= */}
      {selectedProg && (
        <div
          className="progModalBackdrop"
          onClick={() => setSelectedProg(null)}
        >
          <div
            className="progModalBox"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modalCloseBtn"
              onClick={() => setSelectedProg(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="modalGrid">
              <div className="modalImgCol">
                <img
                  src={selectedProg.image}
                  alt={selectedProg.title}
                  className="modalImage"
                />
              </div>

              <div className="modalInfoCol">
                <span className="modalTag">{selectedProg.tag}</span>
                <h3 className="modalTitle">{selectedProg.title}</h3>
                <h4 className="modalHost">Host: {selectedProg.host}</h4>
                <p className="modalDesc">{selectedProg.description}</p>

                <div className="modalSchedule">
                  <strong>Broadcast Time:</strong> {selectedProg.schedule}
                </div>

                <div className="modalBtnRow">
                  <a
                    href="https://healingstreams.tv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watchLiveBtn"
                  >
                    ▶ Watch Live Broadcast
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programmes;