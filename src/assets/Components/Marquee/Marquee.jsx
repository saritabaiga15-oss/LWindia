import React from "react";
import styles from "./Marquee.module.css";

const Marquee = () => {
  const text =
    "LOVEWORLD INDIA • 24X7 BROADCASTING • SPREADING THE GOSPEL ACROSS INDIA AND BEYOND • HEALING STREAMS LIVE HEALING SERVICES • ";

  return (
    <section className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </section>
  );
};

export default Marquee;