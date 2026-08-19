import React from "react";
import styles from "./Hero.module.css";

import image from "../../Images/image.png";
import image1 from "../../Images/Image1.jpeg";
import image2 from "../../Images/Image2.jpeg";
import image3 from "../../Images/Image3.jpeg";
import image4 from "../../Images/Image4.jpeg";

const Hero = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>

        {/* ================= LEFT CONTENT ================= */}

        <div className={styles.heroContent}>

          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            LOVEWORLD INDIA
          </div>

          <h1 className={styles.title}>
            <span>LOVEWORLD</span>
            <span className={styles.india}>INDIA</span>
          </h1>

          <div className={styles.tricolor}>
            <span className={styles.orange}></span>
            <span className={styles.white}></span>
            <span className={styles.green}></span>
          </div>

          <h2 className={styles.subtitle}>
            The Year Of{" "}
            <span className={styles.manifestation}>
              Manifestation
            </span>
          </h2>

          <div className={styles.buttons}>

            <button
              type="button"
              className={styles.watchButton}
              onClick={() => {
                window.location.hash = "healing-streams";
              }}
            >
              <span>WATCH LIVE</span>

              <span
                className={styles.playCircle}
                aria-hidden="true"
              >
                ▶
              </span>
            </button>

            <button
              type="button"
              className={styles.exploreButton}
              onClick={() => {
                const progEl = document.getElementById("programmes");
                if (progEl) progEl.scrollIntoView({ behavior: "smooth" });
              }}
            >
              EXPLORE PROGRAMMES
            </button>

          </div>
        </div>


        {/* ================= RIGHT IMAGE GALLERY ================= */}

        <div className={styles.gallery}>

          {/* ================= CENTER COLUMN ================= */}

          <div className={styles.galleryCenter}>
            <div className={styles.scrollTrackUp}>

              {/* First Set */}

              <div
                className={`${styles.imageBox} ${styles.topImage}`}
              >
                <img
                  src={image}
                  alt="Loveworld India"
                />
              </div>

              <div
                className={`${styles.imageBox} ${styles.largeImage}`}
              >
                <img
                  src={image1}
                  alt="Loveworld India studio"
                />
              </div>

              <div
                className={`${styles.imageBox} ${styles.bottomImage}`}
              >
                <img
                  src={image2}
                  alt="Loveworld India programme"
                />
              </div>


              {/* Duplicate Set */}

              <div
                className={`${styles.imageBox} ${styles.topImage}`}
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div
                className={`${styles.imageBox} ${styles.largeImage}`}
              >
                <img
                  src={image1}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div
                className={`${styles.imageBox} ${styles.bottomImage}`}
              >
                <img
                  src={image2}
                  alt=""
                  aria-hidden="true"
                />
              </div>

            </div>
          </div>


          {/* ================= RIGHT COLUMN ================= */}

          <div className={styles.galleryRight}>
            <div className={styles.scrollTrackDown}>

              {/* First Set */}

              <div
                className={`${styles.imageBox} ${styles.rightTop}`}
              >
                <img
                  src={image3}
                  alt="Loveworld India live studio"
                />
              </div>

              <div
                className={`${styles.imageBox} ${styles.rightBottom}`}
              >
                <img
                  src={image4}
                  alt="Loveworld India worship"
                />
              </div>


              {/* Duplicate Set */}

              <div
                className={`${styles.imageBox} ${styles.rightTop}`}
              >
                <img
                  src={image3}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div
                className={`${styles.imageBox} ${styles.rightBottom}`}
              >
                <img
                  src={image4}
                  alt=""
                  aria-hidden="true"
                />
              </div>

            </div>
          </div>

        </div>

      </section>


      

    </>
  );
};

export default Hero;