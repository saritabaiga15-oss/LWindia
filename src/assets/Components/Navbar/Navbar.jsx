import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../LWI.png";

const Navbar = () => {
  const handleWatchLive = () => {
    window.location.href = "#watch";
  };

  return (
    <header className={styles.navbar}>

      {/* LOGO */}
      <a href="#home" className={styles.logoSection}>
        <img
          src={logo}
          alt="LoveWorld India"
          className={styles.logo}
        />
      </a>

      {/* NAVIGATION */}
      <nav className={styles.navLinks} aria-label="Main navigation">

        <a href="#home" className={styles.active}>
          HOME
        </a>

        {/* WATCH DROPDOWN */}
        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownButton}
          >
            WATCH
          </button>

          <div className={styles.dropdownMenu}>
            <a href="#watch-programmes">
              Watch Programmes
            </a>

            <a href="#broadcasting-schedule">
              Broadcasting Schedule
            </a>
          </div>
        </div>

        {/* ABOUT DROPDOWN */}
        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownButton}
          >
            ABOUT
          </button>

          <div className={styles.dropdownMenu}>
            <a href="#about-us">
              About Us
            </a>

            <a href="#social-media">
              Social Media
            </a>
          </div>
        </div>

        {/* GIVING DROPDOWN */}
        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownButton}
          >
            GIVING
          </button>

          <div className={styles.dropdownMenu}>
            <a href="#partner-with-us">
              Partner With Us
            </a>
          </div>
        </div>

      </nav>

      {/* RIGHT SIDE */}
      <div className={styles.navRight}>

        {/* LIVE */}
        <div className={styles.live}>
          <span
            className={styles.liveDot}
            aria-hidden="true"
          ></span>

          <span>LIVE</span>
        </div>

        {/* WATCH LIVE */}
        <button
          type="button"
          className={styles.watchLive}
          onClick={handleWatchLive}
        >
          WATCH LIVE
        </button>

      </div>

    </header>
  );
};

export default Navbar;