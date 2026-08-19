import React from "react";
import "./Messages.css";
import image1 from "../../Img/Image.jpeg"; // 2026 Year of Manifestation poster
import image3 from "../../Img/Image2.jpeg"; // August Month of Progression poster

const MANIFESTATION_POINTS = [
  {
    number: "01",
    title: "The Manifestation of the Truth",
    scripture: "2 Cor 12:7 • 2 Cor 4:2",
    description:
      "Walking in the uncompromised illumination and revelation of God's Word across all nations.",
  },
  {
    number: "02",
    title: "The Manifestation of the Sons of God",
    scripture: "Romans 8:19 (NIV)",
    description:
      "Creation eagerly awaits the revelation of God's children displaying divine glory and dominion.",
  },
  {
    number: "03",
    title: "The Manifestation of our Lord Jesus Christ",
    scripture: "1 Cor 1:4–7 (Douay Bible)",
    description:
      "A season of supernatural witness and extraordinary demonstration of Christ's power.",
  },
];

const PROGRESSION_POINTS = [
  {
    icon: "📈",
    title: "Continuous Advancement",
    desc: "Experiencing series of upward and forward movements in health, career, finances, and spirit.",
  },
  {
    icon: "🔥",
    title: "Edifying Faith in the Holy Ghost",
    desc: "Rising higher like an edifice by praying continually in the Holy Spirit (Jude 1:20 AMPC).",
  },
  {
    icon: "👑",
    title: "The Seed of Abraham",
    desc: "Walking in unstoppable prosperity and divine favor that continually increases.",
  },
];

const Messages = () => {
  return (
    <section className="messages" id="messages">
      {/* Background ambient glows */}
      <div className="glowEffect glowTop"></div>
      <div className="glowEffect glowBottom"></div>

      <div className="messagesContainer">
        {/* ================= SECTION HEADER ================= */}
        <div className="messagesHeader">
          <span className="sectionBadge">PROPHETIC THEME & TIMELY WORD</span>
          <h2 className="sectionMainTitle">
            Divine Messages for <span className="goldGradient">2026</span>
          </h2>
          <p className="sectionSubtitle">
            Align your spirit with timely prophetic revelations delivered by Rev. (Dr.) Chris Oyakhilome DSc. DSc. D.D.
          </p>
        </div>

        {/* ================= YEAR OF MANIFESTATION ================= */}
        <div className="yearCard">
          <div className="yearContentCol">
            <div className="badgeRow">
              <span className="themeYearBadge">PROPHETIC THEME 2026</span>
              <span className="liveBadge">● JioTV Ch: 4080</span>
            </div>

            <h3 className="yearTitle">
              The Year Of <span className="highlightText">MANIFESTATION</span>
            </h3>

            <p className="proclamationSubtext">
              As proclaimed by <strong>Rev. (Dr.) Chris Oyakhilome</strong>, 2026 is designated as the Year of Manifestation to walk in divine fullness.
            </p>

            {/* Systematic Bullet Points */}
            <div className="systematicPointsList">
              {MANIFESTATION_POINTS.map((point) => (
                <div className="pointCard" key={point.number}>
                  <div className="pointNumber">{point.number}</div>
                  <div className="pointContent">
                    <div className="pointHeaderRow">
                      <h4 className="pointTitle">{point.title}</h4>
                      <span className="scriptureTag">{point.scripture}</span>
                    </div>
                    <p className="pointDesc">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Channel and Broadcast pill bar */}
            <div className="broadcastPillBar">
              <div className="broadcastPill">
                <span className="pillIcon">📺</span>
                <span><strong>JioTV:</strong> Ch 4080</span>
              </div>
              <div className="broadcastPill">
                <span className="pillIcon">🌐</span>
                <span><strong>Web:</strong> lbntv.org | lwindia.org</span>
              </div>
              <div className="broadcastPill">
                <span className="pillIcon">🏠</span>
                <span>1 Billion Homes Project</span>
              </div>
            </div>
          </div>

          <div className="yearPosterCol">
            <div className="posterFrame">
              <img
                src={image1}
                alt="2026 The Year of Manifestation"
                className="posterImg"
              />
              <div className="posterGlow"></div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="messageDivider">
          <div className="dividerLine"></div>
          <span className="dividerIcon">✦</span>
          <div className="dividerLine"></div>
        </div>

        {/* ================= MONTH OF PROGRESSION ================= */}
        <div className="monthCard">
          <div className="monthPosterCol">
            <div className="posterFrame">
              <img
                src={image3}
                alt="August - The Month of Progression"
                className="posterImg"
              />
              <div className="posterGlow"></div>
            </div>
          </div>

          <div className="monthContentCol">
            <div className="badgeRow">
              <span className="monthThemeBadge">MONTHLY WORD • AUGUST 2026</span>
            </div>

            <h3 className="monthTitle">
              The Month of <span className="highlightText">PROGRESSION</span>
            </h3>

            <p className="monthTagline">
              “A Series of Advancement in Every Area of Your Life”
            </p>

            {/* Scripture Highlight Box */}
            <div className="scriptureBox">
              <div className="scriptureQuoteIcon">“</div>
              <p className="scriptureText">
                But you, beloved, build yourselves up [founded] on your most holy faith [make progress, rise like an edifice higher and higher], praying in the Holy Spirit.
              </p>
              <span className="scriptureRef">— Jude 1:20 AMPC</span>
            </div>

            {/* Systematic Progression Pillars */}
            <div className="progressionGrid">
              {PROGRESSION_POINTS.map((item, idx) => (
                <div className="progressionItem" key={idx}>
                  <span className="itemIcon">{item.icon}</span>
                  <div className="itemTextWrap">
                    <h5 className="itemTitle">{item.title}</h5>
                    <p className="itemDesc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="declarationBox">
              <span className="sparkle">✨</span>
              <span><strong>Declaration:</strong> “God is causing it to happen for you, and by the power of the Holy Ghost, you will make amazing progress.”</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
