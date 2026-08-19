
import React from "react";
import "./Messages.css";
import image1 from "../../Img/Image.jpeg"; // Manifestation poster
import image3 from "../../Img/Image2.jpeg"; // Month of Progression image

const Messages = () => {
  return (
    <section className="messages" id="messages">
      {/* Ambient background glow effects */}
      <div className="glowEffect glowTop"></div>
      <div className="glowEffect glowBottom"></div>

      <div className="messagesContainer">
        
        {/* ================= YEAR OF MANIFESTATION ================= */}
        <div className="yearSection">
          
          <div className="yearText">
            <span className="smallLabel">
              DIVINE REVELATION
            </span>

            <h2 className="mainHeading">
              The Year Of
              <br />
              <span className="goldHighlight">Manifestation</span>
            </h2>

            <p className="mainDesc">
              Step into a realm of infinite possibilities. 2026 marks the dawn of
              unprecedented spiritual growth and divine manifestation in every
              aspect of your journey.
            </p>

            <div className="bulletPoints">
              <p>• As proclaimed by Rev. Dr. Chris Oyakhilome Dsc Dsc DD, 2026 is designated as the Year of Manifestation.</p>
              <p>• We will walk in the manifestation of the Truth.</p>
              <p>• We will witness the manifestation of the sons of God.</p>
              <p>• The Manifestation of our Lord Jesus Christ.</p>
            </div>

            <button className="ctaGoldBtn" type="button">
              EXPLORE KEY POINTS
            </button>
          </div>

          <div className="yearImageWrapper">
            <div className="posterCardGlow">
              <img
                src={image1}
                alt="The Year of Manifestation"
                className="posterImg"
              />
            </div>
          </div>

        </div>

        {/* ================= CENTER ARROW & DIVIDER ================= */}
        <div className="dividerSection">
          <span className="dividerArrow">→</span>
          <div className="dividerLine"></div>
        </div>

        {/* ================= MONTH OF PROGRESSION CARD ================= */}
        <div className="monthSection">

          <div className="monthImageWrapper">
            <div className="monthThumbnail">
              <img
                src={image3}
                alt="Month of Progression"
                className="monthImg"
              />
            </div>
          </div>

          <div className="monthText">
            <span className="monthBadge">
              AUGUST 2026
            </span>

            <h3 className="monthHeading">
              The Month of
              <br />
              <strong className="goldHighlight">PROGRESSION</strong>
            </h3>

            <p className="monthDesc">
              A Series of Advancement in Every Area of Your Life. Experience
              the upward trajectory of divine favor. This is the moment where
              previous efforts culminate into exponential growth.
            </p>

            <blockquote className="quoteCallout">
              <p>
                “And I began to prosper, and continue prospering until I have
                become very prosperous; because I am the seed of Abraham”
              </p>
            </blockquote>

            <p className="declarationText">
              “God is causing it to happen for you, and by the power of the Holy
              Ghost, you will make amazing progress.”
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Messages;
