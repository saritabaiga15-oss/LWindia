import React from "react";
import "./HealingStream.css";
import photo1 from "../HealingImage/Photo1.jpeg";


const HealingStream = () => {
  return (
    <section className="healingStream">
      <div className="healingHeader">
        <h2>HEALING STREAMS LIVE HEALING SERVICES WITH PASTOR CHRIS</h2>
      </div>

      <div className="healingContent">

        <div className="healingImage">
          <img
            src="/src/assets/Components/HealingImage/image.png"
            alt="Healing Streams"
          />
        </div>

        <div className="healingText">
          <p>
            Global Anticipation as Healing Streams Live Healing Services
            hold this month.
          </p>

          <p>
            This July, the world, again, stands expectant for another
            extraordinary outpouring of miracles, signs, wonders, and the
            transforming power of the Gospel of Jesus Christ.
          </p>

          <p>
            It promises to be a mighty wave of faith, prayer, and
            expectation, rising across the nations as billions prepare
            for the Healing Streams Live Healing Services.
          </p>

          <p>
            Expected to reach billions of viewers across every continent,
            the three-day global broadcast will once again unite
            individuals, families, churches, communities and nations in
            an unprecedented demonstration of the healing power of Jesus
            Christ.
          </p>

          <p>
            The Healing Streams flow unhindered into homes, hospitals,
            correctional facilities, schools, workplaces, villages, and
            cities around the world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HealingStream;