import React from "react";
import styles from "./Features.module.css";

import image1 from "../../Img/Image.jpeg";
import image2 from "../../Img/Image1.jpeg";
import image3 from "../../Img/Image2.jpeg";

const messages = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];

const Features = () => {
  return (
    <section className={styles.features}>

      {/* HEADER */}
      <div className={styles.header}>
        <h2>FEATURED MESSAGE</h2>
        <span></span>
      </div>

      {/* SLIDER */}
      <div className={styles.slider}>
        <div className={styles.track}>
          {messages.map((item, index) => (
            <div className={styles.card} key={index}>

              <img
                src={item.image}
                alt={`Message ${index + 1}`}
                className={styles.image}
              />

              <div className={styles.overlay}></div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Features;