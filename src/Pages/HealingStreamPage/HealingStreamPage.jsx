import React, { useState, useEffect } from "react";
import "./HealingStreamPage.css";

// Healing Images
import photo1 from "../../assets/Components/HealingImage/Photo1.jpeg";
import photo2 from "../../assets/Components/HealingImage/Photo2.jpeg";
import photo3 from "../../assets/Components/HealingImage/photo4.png";
import photo4 from "../../assets/Components/HealingImage/photo6.jpeg";

const TESTIMONIES_DATA = [
  {
    image: photo1,
    name: "Global Healing Miracle",
    condition: "Spinal Paralysis Reversed",
    location: "Mumbai, India",
    story:
      "After 7 years in a wheelchair, divine strength surged through her body during the live broadcast ministration by Pastor Chris, and she stood up walking completely unaided!",
  },
  {
    image: photo2,
    name: "Instant Restoration",
    condition: "Severe Chronic Respiratory Ailment",
    location: "New Delhi, India",
    story:
      "Struggling with oxygen dependency for over 3 years, the power of God saturated the healing center, instantly clearing the lungs and restoring full healthy breathing.",
  },
  {
    image: photo3,
    name: "Divine Deliverance",
    condition: "Restored Sight & Hearing",
    location: "Hyderabad, India",
    story:
      "As Pastor Chris declared healing words across the airwaves, partial blindness and hearing loss disappeared in a single moment of supernatural grace.",
  },
  {
    image: photo4,
    name: "Miraculous Healing",
    condition: "Tumor Dissolved Completely",
    location: "Bengaluru, India",
    story:
      "Medical scans confirmed that an inoperable tumor had vanished completely following the global prayer session during the Healing Streams live service.",
  },
];

const SCHEDULE_DAYS = [
  {
    day: "Day 1",
    date: "Friday, July 24, 2026",
    time: "2:00 PM GMT+1 (6:30 PM IST)",
    title: "Faith Awakening & Global Worship",
    description:
      "A grand opening service with celestial worship, stirring testimonies, and an atmosphere saturated with the tangible presence of God.",
    highlights: ["Global Praise & Worship", "Live Testimonies Showcase", "Faith Preparation Ministration"],
  },
  {
    day: "Day 2",
    date: "Saturday, July 25, 2026",
    title: "The Miraculous Outpouring",
    time: "2:00 PM GMT+1 (6:30 PM IST)",
    description:
      "Intensive ministration of healing power to participants across hospitals, healing centers, homes, and global virtual stream hubs.",
    highlights: ["Live Ministration by Pastor Chris", "Instant Healing Deliverances", "Word of Knowledge Session"],
  },
  {
    day: "Day 3",
    date: "Sunday, July 26, 2026",
    title: "Global Benediction & Victory Celebration",
    time: "2:00 PM GMT+1 (6:30 PM IST)",
    description:
      "The climactic grand finale celebrating millions of miracles, prophetic blessings, and sealing of divine health into the lives of all attendees.",
    highlights: ["Special Apostolic Blessings", "Grand Miracle Celebration", "Global Communion & Impartation"],
  },
];

const FAQS_DATA = [
  {
    q: "How can I participate in Healing Streams Live Healing Services?",
    a: "Participation is completely free! You can join online from anywhere in the world at healingstreams.tv, through the Loveworld India website, on JioTV (Channel 4080), or at a designated physical Healing Center in your city.",
  },
  {
    q: "Is registration required and is there any fee?",
    a: "Registration is 100% free of charge. We encourage everyone seeking healing for themselves or loved ones to register so our global prayer network can intercede specifically for your condition.",
  },
  {
    q: "Can I set up a Healing Center in my home or workplace?",
    a: "Yes! You can register your home, hospital room, school, office, or community center as a Virtual or Physical Healing Center to invite friends, neighbors, and loved ones to receive their miracles.",
  },
  {
    q: "Can I submit a prayer request for someone else?",
    a: "Absolutely. In the registration form below, you can select 'Registering for a Loved One' and enter their details and specific healing needs.",
  },
];

const HealingStreamPage = ({ onNavigateHome }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedDay, setSelectedDay] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "India",
    city: "",
    healingNeed: "",
    participationType: "Online",
    registeringFor: "Self",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Photo auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % TESTIMONIES_DATA.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.healingNeed) {
      alert("Please fill in your Name, Email, and Healing Request details.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="healingStreamPage">
      {/* ================= TOP NAVIGATION BAR ================= */}
      <nav className="hsPageNav">
        <div className="hsNavContainer">
          <button className="backHomeBtn" onClick={onNavigateHome}>
            ← Back to Home
          </button>
          <div className="hsNavBadge">
            <span className="liveBlinker"></span>
            HEALING STREAMS LIVE SERVICES
          </div>
          <a href="#register-section" className="hsRegisterQuickBtn">
            Register for Healing →
          </a>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <header className="hsHeroSection">
        <div className="hsHeroGlowLeft"></div>
        <div className="hsHeroGlowRight"></div>

        <div className="hsHeroContent">
          <div className="hsThemeBadge">
            <span>✨ 3-DAY GLOBAL MIRACLE OUTPOURING</span>
          </div>

          <h1 className="hsMainTitle">
            HEALING STREAMS <br />
            <span className="hsGoldGradient">LIVE HEALING SERVICES</span>
          </h1>
          <h2 className="hsSubTitle">WITH PASTOR CHRIS OYAKHILOME</h2>

          <div className="hsDatesPill">
            <span className="calendarIcon">📅</span>
            <strong>Friday, July 24 – Sunday, July 26, 2026</strong>
            <span className="dividerDot">•</span>
            <span>2:00 PM GMT+1 Daily (6:30 PM IST)</span>
          </div>

          <p className="hsHeroDesc">
            Join billions around the world in an unprecedented demonstration of the healing power of Jesus Christ.
            Experience freedom from sickness, disease, pain, fear, and sorrow through the supernatural power of God’s Word and Spirit.
          </p>

          <div className="hsHeroActions">
            <a href="#register-section" className="hsPrimaryBtn">
              <span>REGISTER FOR FREE</span>
              <span className="btnArrow">→</span>
            </a>
            <a href="#live-stream" className="hsSecondaryBtn">
              <span>▶ WATCH LIVE BROADCAST</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hsStatsBar">
            <div className="statItem">
              <span className="statVal">3.5 Billion+</span>
              <span className="statLabel">Expected Viewers</span>
            </div>
            <div className="statDivider"></div>
            <div className="statItem">
              <span className="statVal">200+</span>
              <span className="statLabel">Nations Reached</span>
            </div>
            <div className="statDivider"></div>
            <div className="statItem">
              <span className="statVal">4,000+</span>
              <span className="statLabel">Languages Broadcast</span>
            </div>
            <div className="statDivider"></div>
            <div className="statItem">
              <span className="statVal">100% Free</span>
              <span className="statLabel">Open to All</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= LIVE STREAM PLAYER SECTION ================= */}
      <section className="hsPlayerSection" id="live-stream">
        <div className="hsContainer">
          <div className="playerHeader">
            <div className="playerStatus">
              <span className="redLiveDot"></span>
              <span>LIVE TRANSMISSION HUB</span>
            </div>
            <h2 className="playerTitle">Watch Live Broadcast</h2>
            <p className="playerSubtitle">
              Broadcasting 24/7 across television airwaves, digital streams, and mobile apps.
            </p>
          </div>

          <div className="playerCard">
            <div className="videoScreenWrapper">
              <img
                src={TESTIMONIES_DATA[activePhotoIdx].image}
                alt="Healing Streams Broadcast"
                className="streamScreenImg"
              />
              <div className="streamOverlayGradient"></div>

              <div className="liveBadgeOnScreen">
                <span className="pulseCircle"></span>
                <span>LIVE • HEALING STREAMS TV</span>
              </div>

              <div className="screenCenterContent">
                <a
                  href="https://healingstreams.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bigPlayBtn"
                  aria-label="Play stream"
                >
                  ▶
                </a>
                <span className="playBtnLabel">Click to Stream in High Definition</span>
              </div>

              <div className="playerBottomBar">
                <div className="channelPill">
                  <span>📺 JioTV Channel 4080</span>
                </div>
                <div className="streamUrlPill">
                  <span>🌐 streaming on healingstreams.tv & lwindia.org</span>
                </div>
              </div>
            </div>

            <div className="streamInfoRow">
              <div className="streamInfoLeft">
                <h4>Healing Streams Live Healing Services with Pastor Chris</h4>
                <p>Global multi-cast in over 4,000 languages with instant miracle reports.</p>
              </div>
              <div className="streamInfoRight">
                <a
                  href="https://healingstreams.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watchExternalBtn"
                >
                  Open Fullscreen Stream ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIES & PHOTO SHOWCASE ================= */}
      <section className="hsTestimoniesSection" id="testimonies">
        <div className="hsContainer">
          <div className="sectionHead">
            <span className="miniBadge">SUPERNATURAL ENCOUNTERS</span>
            <h2 className="sectionTitle">
              Miracles & <span className="hsGoldGradient">Living Testimonies</span>
            </h2>
            <p className="sectionSub">
              Witness the tangible power of God turning hopeless situations into glorious testimonies.
            </p>
          </div>

          <div className="testimoniesGrid">
            {TESTIMONIES_DATA.map((item, idx) => (
              <div
                className={`testimonyCard ${activePhotoIdx === idx ? "cardHighlighted" : ""}`}
                key={idx}
                onClick={() => setActivePhotoIdx(idx)}
              >
                <div className="testimonyImgWrap">
                  <img src={item.image} alt={item.name} className="testimonyImg" />
                  <span className="locationTag">{item.location}</span>
                </div>
                <div className="testimonyContent">
                  <span className="conditionBadge">{item.condition}</span>
                  <h4 className="testimonyName">{item.name}</h4>
                  <p className="testimonyStory">{item.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3-DAY BROADCAST SCHEDULE ================= */}
      <section className="hsScheduleSection" id="schedule">
        <div className="hsContainer">
          <div className="sectionHead">
            <span className="miniBadge">PROGRAMME ITINERARY</span>
            <h2 className="sectionTitle">
              3-Day Service <span className="hsGoldGradient">Schedule</span>
            </h2>
            <p className="sectionSub">
              Prepare your heart and home for three consecutive days of unprecedented spiritual transformation.
            </p>
          </div>

          <div className="scheduleTabs">
            {SCHEDULE_DAYS.map((dayItem, index) => (
              <button
                key={index}
                className={`scheduleTabBtn ${selectedDay === index ? "activeScheduleTab" : ""}`}
                onClick={() => setSelectedDay(index)}
              >
                <span className="tabDay">{dayItem.day}</span>
                <span className="tabDate">{dayItem.date}</span>
              </button>
            ))}
          </div>

          <div className="scheduleDetailCard">
            <div className="scheduleDetailHeader">
              <div className="dayBadge">{SCHEDULE_DAYS[selectedDay].day}</div>
              <div>
                <h3 className="scheduleMainHeading">{SCHEDULE_DAYS[selectedDay].title}</h3>
                <span className="scheduleTimePill">⏰ {SCHEDULE_DAYS[selectedDay].time}</span>
              </div>
            </div>

            <p className="scheduleMainDesc">{SCHEDULE_DAYS[selectedDay].description}</p>

            <div className="highlightsBox">
              <h5>Service Highlights:</h5>
              <div className="highlightsList">
                {SCHEDULE_DAYS[selectedDay].highlights.map((h, i) => (
                  <div className="highlightChip" key={i}>
                    <span className="goldCheck">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION & PRAYER REQUEST FORM ================= */}
      <section className="hsRegisterSection" id="register-section">
        <div className="hsContainer">
          <div className="registerGrid">
            {/* Left Info Panel */}
            <div className="registerInfoCol">
              <span className="miniBadge">100% FREE PARTICIPATION</span>
              <h2 className="registerHeading">
                Register for <span className="hsGoldGradient">Healing Streams</span>
              </h2>
              <p className="registerInfoDesc">
                Take your step of faith today. Register yourself or your loved ones for divine healing, deliverance, and a life-transforming encounter.
              </p>

              <div className="benefitList">
                <div className="benefitItem">
                  <div className="benefitIcon">🕊️</div>
                  <div>
                    <h6>Dedicated Prayer Intercession</h6>
                    <p>Our global ministers will pray over your specific healing request.</p>
                  </div>
                </div>
                <div className="benefitItem">
                  <div className="benefitIcon">📲</div>
                  <div>
                    <h6>Live Broadcast Reminders</h6>
                    <p>Get direct access links and alerts before each session begins.</p>
                  </div>
                </div>
                <div className="benefitItem">
                  <div className="benefitIcon">🏥</div>
                  <div>
                    <h6>Connect to a Healing Center</h6>
                    <p>Option to join physical centers or create your own virtual hub.</p>
                  </div>
                </div>
              </div>

              {/* Help & Contact Desk */}
              <div className="contactDeskCard">
                <h5>Need Assistance? 24/7 Global Helpline:</h5>
                <div className="phoneRow">
                  <span>🇮🇳 India: +91 96500 96633 / +91 77949 93762</span>
                  <span>🌍 Global: +44 (0) 333 188 0710 / +1 832 724 9390</span>
                  <span>✉️ Email: info@healingstreams.tv</span>
                </div>
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="registerFormCol">
              {isSubmitted ? (
                <div className="submissionSuccessCard">
                  <div className="successIcon">🎉</div>
                  <h3>Registration Confirmed!</h3>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. Your registration for the Healing Streams Live Services has been successfully received.
                  </p>
                  <div className="regCardDetails">
                    <div className="regRow">
                      <span>Full Name:</span>
                      <strong>{formData.fullName}</strong>
                    </div>
                    <div className="regRow">
                      <span>Country:</span>
                      <strong>{formData.country}</strong>
                    </div>
                    <div className="regRow">
                      <span>Participation Mode:</span>
                      <strong>{formData.participationType}</strong>
                    </div>
                    <div className="regRow">
                      <span>Live Service Dates:</span>
                      <strong>July 24 – 26, 2026</strong>
                    </div>
                  </div>

                  <button
                    className="resetFormBtn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        country: "India",
                        city: "",
                        healingNeed: "",
                        participationType: "Online",
                        registeringFor: "Self",
                      });
                    }}
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <form className="healingRegForm" onSubmit={handleFormSubmit}>
                  <div className="formTitleRow">
                    <h3>Fill Your Registration Form</h3>
                    <span className="freeTag">Free Entry</span>
                  </div>

                  <div className="formGroup">
                    <label>Registering For:</label>
                    <div className="radioRow">
                      <label className="radioLabel">
                        <input
                          type="radio"
                          name="registeringFor"
                          value="Self"
                          checked={formData.registeringFor === "Self"}
                          onChange={handleInputChange}
                        />
                        <span>Myself</span>
                      </label>
                      <label className="radioLabel">
                        <input
                          type="radio"
                          name="registeringFor"
                          value="Loved One"
                          checked={formData.registeringFor === "Loved One"}
                          onChange={handleInputChange}
                        />
                        <span>A Loved One</span>
                      </label>
                    </div>
                  </div>

                  <div className="formRowTwo">
                    <div className="formGroup">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="formGroup">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="formRowTwo">
                    <div className="formGroup">
                      <label>Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="formGroup">
                      <label>Country</label>
                      <input
                        type="text"
                        name="country"
                        placeholder="e.g. India"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="formGroup">
                    <label>City / State</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="formGroup">
                    <label>Participation Mode</label>
                    <select
                      name="participationType"
                      value={formData.participationType}
                      onChange={handleInputChange}
                    >
                      <option value="Online">Online via Healing Streams TV / JioTV</option>
                      <option value="Physical Center">At a Physical Healing Center in my city</option>
                      <option value="Virtual Center Host">I want to Host a Virtual Healing Center</option>
                    </select>
                  </div>

                  <div className="formGroup">
                    <label>Specific Healing Need / Condition *</label>
                    <textarea
                      name="healingNeed"
                      rows="3"
                      placeholder="Please describe the condition or area where you or your loved one desires miraculous healing..."
                      value={formData.healingNeed}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submitRegBtn">
                    COMPLETE FREE REGISTRATION →
                  </button>
                  <p className="privacyNote">
                    🔒 Your information is confidential and will only be used for prayer & event broadcast access.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="hsFaqSection" id="faq">
        <div className="hsContainer">
          <div className="sectionHead">
            <span className="miniBadge">COMMON QUESTIONS</span>
            <h2 className="sectionTitle">
              Frequently Asked <span className="hsGoldGradient">Questions</span>
            </h2>
          </div>

          <div className="faqList">
            {FAQS_DATA.map((faq, index) => (
              <div
                className={`faqItem ${openFaq === index ? "faqOpen" : ""}`}
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faqQuestion">
                  <span>{faq.q}</span>
                  <span className="faqToggleIcon">{openFaq === index ? "−" : "+"}</span>
                </div>
                {openFaq === index && (
                  <div className="faqAnswer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER BANNER ================= */}
      <footer className="hsFooter">
        <div className="hsContainer">
          <div className="hsFooterContent">
            <div className="footerBrandLeft">
              <h3>LOVEWORLD INDIA</h3>
              <p>Proclaiming Divine Life, Health & Dominion Across Nations</p>
            </div>
            <div className="footerLinksRight">
              <a href="https://healingstreams.tv" target="_blank" rel="noopener noreferrer">
                healingstreams.tv ↗
              </a>
              <a href="https://healingstreams.org" target="_blank" rel="noopener noreferrer">
                healingstreams.org ↗
              </a>
              <button className="footerBackHome" onClick={onNavigateHome}>
                Return to Home Page
              </button>
            </div>
          </div>
          <div className="footerBottomCopy">
            © 2026 LoveWorld India & Healing Streams. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealingStreamPage;
