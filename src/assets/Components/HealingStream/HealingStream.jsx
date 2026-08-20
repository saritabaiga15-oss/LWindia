import React, { useEffect, useState } from "react";
import "./HealingStream.css";

/* =========================================================
   IMPORT HEALING IMAGES
========================================================= */
import photo1 from "../HealingImage/Photo1.jpeg";
import photo2 from "../HealingImage/Photo2.jpeg";
import photo3 from "../HealingImage/photo4.png";
import photo4 from "../HealingImage/photo6.jpeg";

const photos = [photo1, photo2, photo3, photo4];

const HealingStream = () => {
  /* =======================================================
     IMAGE SLIDER STATE
  ======================================================= */
  const [currentPhoto, setCurrentPhoto] = useState(0);

  /* =======================================================
     SEE MORE OVERLAY STATE
  ======================================================= */
  const [showMore, setShowMore] = useState(false);

  /* =======================================================
     AUTO IMAGE ROTATION (Every 3.5s)
  ======================================================= */
  useEffect(() => {
    if (photos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     PREVENT BACKGROUND SCROLL WHEN MODAL IS OPEN
  ======================================================= */
  useEffect(() => {
    if (showMore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMore]);

  return (
    <>
      {/* =====================================================
          HEALING STREAM SECTION
      ===================================================== */}
      <section className="healingStream">
        <div className="healingHeader">
          <h2>HEALING STREAMS LIVE HEALING SERVICES WITH PASTOR CHRIS</h2>
        </div>

        <div className="healingContent">
          {/* IMAGE SLIDER */}
          <div className="healingImage">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Healing Streams ${index + 1}`}
                className={
                  currentPhoto === index
                    ? "healingPhoto active"
                    : "healingPhoto"
                }
              />
            ))}

            {/* SLIDER DOTS */}
            <div className="sliderDots">
              {photos.map((_, index) => (
                <span
                  key={index}
                  className={
                    currentPhoto === index ? "dot activeDot" : "dot"
                  }
                  onClick={() => setCurrentPhoto(index)}
                  title={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="healingText">
            <div className="articleText">
              <p>
                This July, the world, again, stands expectant for another
                extraordinary outpouring of miracles, signs, wonders, and the
                transforming power of the Gospel of Jesus Christ.
              </p>

              <p>
                It promises to be a mighty wave of faith, prayer, and
                expectation, rising across the nations as billions prepare for
                the Healing Streams Live Healing Services, with Pastor Chris
                Oyakhilome, scheduled for Friday, July 24 to Sunday, July 26,
                2026, at 2:00 PM daily.
              </p>

              <p>
                Expected to reach billions of viewers across every continent,
                the three-day global broadcast will once again unite
                individuals, families, churches, communities, and nations in an
                unprecedented demonstration of the healing power of Jesus Christ.
                As the Healing Streams flow unhindered into homes, hospitals,
                correctional facilities, schools, workplaces, villages, and
                cities around the world, it is expected that countless people
                will experience freedom from sickness, pain, disease, emotional
                trauma, mental distress, fear, confusion, oppression, poverty,
                and more through the power of God's Word and Spirit.
              </p>

              <p>
                Registration is completely free and open to people of every
                nation, race, language, and background at healingstreams.org.
                During registration, participants seeking healing for themselves
                or loved ones are encouraged to indicate their specific healing
                needs...
              </p>
            </div>

            <button
              type="button"
              className="readmoreButton"
              onClick={() => setShowMore(true)}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL ARTICLE OVERLAY
      ===================================================== */}
      {showMore && (
        <div className="healingOverlay" onClick={() => setShowMore(false)}>
          <div
            className="healingOverlayBox"
            onClick={(e) => e.stopPropagation()}
          >
            {/* TOP HEADER */}
            <header className="articleTopBar">
              <div className="articleTitle">
                <span className="heart yellowHeart">♥</span>
                <span className="heart whiteHeart">♥</span>
                <h1>HEALING STREAMS LIVE HEALING SERVICES</h1>
              </div>

              {/* CLOSE X */}
              <button
                type="button"
                className="articleClose"
                onClick={() => setShowMore(false)}
                aria-label="Close article"
              >
                ×
              </button>
            </header>

            {/* YELLOW LINE */}
            <div className="articleTopLine"></div>

            {/* ARTICLE SCROLL AREA */}
            <main className="articleScroll">
              <article className="articleContent">
                <h2 className="articleInnerTitle">
                  Global Anticipation as Healing Streams Live Healing Services hold this month
                </h2>
                <div className="articleHeadingUnderline"></div>

                <p>
                  This July, the world, again, stands expectant for another
                  extraordinary outpouring of miracles, signs, wonders, and the
                  transforming power of the Gospel of Jesus Christ.
                </p>

                <p>
                  It promises to be a mighty wave of faith, prayer, and
                  expectation, rising across the nations as billions prepare for
                  the Healing Streams Live Healing Services, with Pastor Chris
                  Oyakhilome, scheduled for Friday, July 24 to Sunday, July 26,
                  2026, at 2:00 PM daily.
                </p>

                <p>
                  Expected to reach billions of viewers across every continent,
                  the three-day global broadcast will once again unite
                  individuals, families, churches, communities, and nations in
                  an unprecedented demonstration of the healing power of Jesus
                  Christ.
                </p>

                <p>
                  As the Healing Streams flow unhindered into homes, hospitals,
                  correctional facilities, schools, workplaces, villages, and
                  cities around the world, it is expected that countless people
                  will experience freedom from sickness, pain, disease, emotional
                  trauma, mental distress, fear, confusion, oppression, poverty,
                  and more through the power of God's Word and Spirit.
                </p>

                <p>
                  Registration is completely free and open to people of every
                  nation, race, language, and background at healingstreams.org.
                  During registration, participants seeking healing for
                  themselves or loved ones are encouraged to indicate their
                  specific healing needs.
                </p>

                <h2>An Invitation to the World</h2>

                <p>
                  As July 24 draws nearer, organizers are extending a global
                  invitation to individuals, families, churches, healthcare
                  professionals, community organizations, and leaders across
                  every nation to participate in what promises to be another
                  historic edition of the Healing Streams Live Healing Services.
                </p>

                <p>
                  Whether attending from a Healing Center or joining online from
                  anywhere in the world, participants are encouraged to come with
                  faith, invite others, and expect a divine encounter.
                </p>

                {/* MEDIA CONTACT */}
                <div className="mediaContact">
                  <h3>Media Contact:</h3>
                  <p className="contactBrand">
                    Healing Streams Communications
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@healingstreams.tv">
                      info@healingstreams.tv
                    </a>
                  </p>

                  <h4>Phone Numbers</h4>
                  <div className="phoneList">
                    <p>+27 799 675 852 (South Africa)</p>
                    <p>+234 (1) 888 5066 (Nigeria)</p>
                    <p>+1 832 724 9390 (USA)</p>
                    <p>+1 289 622 1634 (Canada)</p>
                    <p>+44 (0) 333 188 0710 (UK)</p>
                    <p>+91 96500 96633 (Asia)</p>
                    <p>+91 77949 93762 (India)</p>
                  </div>

                  <p className="websiteLink">
                    Website:{" "}
                    <a
                      href="https://healingstreams.tv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://healingstreams.tv
                    </a>
                  </p>
                </div>
              </article>
            </main>

            {/* BOTTOM FOOTER */}
            <footer className="articleFooter">
              <div className="footerBrand">
                <span>LOVEWORLD INDIA</span>
                <span className="footerDash">—</span>
                <strong>healingstreams.org</strong>
              </div>

              <button
                type="button"
                className="closeButton"
                onClick={() => setShowMore(false)}
              >
                CLOSE ×
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default HealingStream;