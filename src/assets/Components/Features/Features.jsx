import React from "react";
import styles from "./Features.module.css";

import image1 from "../../Img/Image.jpeg";
import image3 from "../../Img/Image2.jpeg";
import image2 from "../../Img/Image1.jpeg";


const messages = [
  {
    image: image1,
    title: "Message Of The Year",
  },
  {
    image: image2,
    title: "Impact India",
  },
  {
    image: image3,
    title: "Message of the Month",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>

      <div className={styles.header}>
        <h2>FEATURES &amp; MESSAGE</h2>
        <span></span>
      </div>

      <div className={styles.slider}>
        <div className={styles.track}>
          {messages.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} />

              <div className={styles.overlay}></div>

              <div className={styles.cardTitle}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Features;