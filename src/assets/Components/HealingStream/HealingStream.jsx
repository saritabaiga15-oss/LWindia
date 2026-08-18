import React, { useEffect, useState } from "react";
import "./HealingStream.css";

import photo1 from "../HealingImage/Photo1.jpeg";
import photo2 from "../HealingImage/Photo2.jpeg";
import photo3 from "../HealingImage/Photo3.jpeg";
import photo4 from "../HealingImage/Photo4.jpeg";
import photo5 from "../HealingImage/Photo5.jpeg";

const HealingStream = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Auto change photo every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="healingStream">

      {/* ================= HEADER ================= */}
      <div className="healingHeader">
        <h2>
          HEALING STREAMS LIVE HEALING SERVICES WITH PASTOR CHRIS
        </h2>
      </div>


      {/* ================= CONTENT ================= */}
      <div className="healingContent">

        {/* ================= IMAGE SLIDER ================= */}
        <div className="healingImage">

          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Healing Streams ${index + 1}`}
              className={`healingPhoto ${
                currentPhoto === index ? "active" : ""
              }`}
            />
          ))}

          {/* Dots */}
          <div className="sliderDots">
            {photos.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  currentPhoto === index ? "activeDot" : ""
                }`}
                onClick={() => setCurrentPhoto(index)}
              ></span>
            ))}
          </div>

        </div>


        {/* ================= TEXT ================= */}
        <div className="healingText">

          <p>
            Global Anticipation as Healing Streams Live Healing Services
            hold this month.

            This July, the world, again, stands expectant for another
            extraordinary outpouring of miracles, signs, wonders, and the
            transforming power of the Gospel of Jesus Christ.

            It promises to be a mighty wave of faith, prayer, and
            expectation, rising across the nations as billions prepare
            for the Healing Streams Live Healing Services.

            Expected to reach billions of viewers across every continent,
            the three-day global broadcast will once again unite
            individuals, families, churches, communities and nations in
            an unprecedented demonstration of the healing power of Jesus
            Christ.

            The Healing Streams flow unhindered into homes, hospitals,
            correctional facilities, schools, workplaces, villages, and
            cities around the world.
          </p>

          {/* READ MORE BUTTON */}
          <button
            type="button"
            className="readmoreButton"
          >
            See More
          </button>

        </div>

      </div>

    </section>
  );
};

export default HealingStream;