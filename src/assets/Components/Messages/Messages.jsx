
import React from "react";
import "./Messages.css";

import yearImage from "../HealingImage/Photo1.jpeg";

const Messages = () => {
  return (
    <section className="messages">

      <div className="yearSection">

        <div className="yearText">
          <span className="smallLabel">
            YEAR MESSAGE
          </span>

          <h2>
            The Year Of
            <br />
            <span>Manifestation</span>
          </h2>

          <p>
            Step into a realm of infinite possibilities.
            2026 marks a new season of unprecedented
            manifestation and divine possibilities in every
            aspect of your journey.
          </p>

          <button type="button">
            EXPLORE KEY POINTS
          </button>
        </div>

        <div className="yearImageWrapper">
          <img
            src={yearImage}
            alt="The Year of Manifestation"
          />
        </div>

      </div>

      <div className="monthSection">

        <div className="monthImageWrapper">
          <img
            src={yearImage}
            alt="Month of Progression"
          />
        </div>

        <div className="monthText">

          <span className="smallLabel">
            AUGUST 2026
          </span>

          <h3>
            The Month of
            <br />
            <strong>PROGRESSION</strong>
          </h3>

          <p>
            August is a month of progression, advancement,
            growth and greater accomplishment. This is a
            season to move forward with faith and confidence
            in God's Word and purpose.
          </p>

          <p>
            Embrace new opportunities, develop your gifts,
            and continue making progress in every area of
            your life.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Messages;
