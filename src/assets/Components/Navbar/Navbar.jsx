import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../LWI.png";

const Navbar = ({ activePage = "home", onNavigate }) => {
  const handleHomeClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate("home");
    }
  };

  const handleHealingStreamsClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate("healing-streams");
    }
  };

  const handleWatchLive = () => {
    if (onNavigate) {
      onNavigate("healing-streams");
    } else {
      window.location.href = "#healing-streams";
    }
  };

  return (
    <header className={styles.navbar}>
      {/* LOGO */}
      <a href="#home" className={styles.logoSection} onClick={handleHomeClick}>
        <img src={logo} alt="LoveWorld India" className={styles.logo} />
      </a>

      {/* NAVIGATION */}
      <nav className={styles.navLinks} aria-label="Main navigation">
        <a
          href="#home"
          className={activePage === "home" ? styles.active : styles.navLink}
          onClick={handleHomeClick}
        >
          HOME
        </a>

        {/* HEALING STREAMS LINK */}
        <a
          href="#healing-streams"
          className={activePage === "healing-streams" ? styles.active : styles.navLink}
          onClick={handleHealingStreamsClick}
        >
          HEALING STREAMS
        </a>

        {/* WATCH DROPDOWN */}
        <div className={styles.dropdown}>
          <button type="button" className={styles.dropdownButton}>
            WATCH
          </button>

          <div className={styles.dropdownMenu}>
            <a href="#healing-streams" onClick={handleHealingStreamsClick}>
              Healing Streams Live
            </a>
            <a href="#programmes" onClick={handleHomeClick}>
              Watch Programmes
            </a>
            <a href="#broadcasting-schedule">
              Broadcasting Schedule
            </a>
          </div>
        </div>

        {/* ABOUT DROPDOWN */}
        <div className={styles.dropdown}>
          <button type="button" className={styles.dropdownButton}>
            ABOUT
          </button>

          <div className={styles.dropdownMenu}>
            <a href="#about-us">About Us</a>
            <a href="#social-media">Social Media</a>
          </div>
        </div>

        {/* GIVING DROPDOWN */}
        <div className={styles.dropdown}>
          <button type="button" className={styles.dropdownButton}>
            GIVING
          </button>

          <div className={styles.dropdownMenu}>
            <a href="#partner-with-us">Partner With Us</a>
          </div>
        </div>

        {/* BLOG */}
        <a href="#blog" className={styles.navLink}>
          BLOG
        </a>
      </nav>

      {/* RIGHT SIDE */}
      <div className={styles.navRight}>
        {/* LIVE */}
        <div className={styles.live}>
          <span className={styles.liveDot} aria-hidden="true"></span>
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