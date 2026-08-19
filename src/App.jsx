import React, { useState, useEffect } from "react";

import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import Marquee from "./assets/Components/Marquee/Marquee";
import Features from "./assets/Components/Features/Features";
import HealingStream from "./assets/Components/HealingStream/HealingStream";
import Programm from "./assets/Components/Programmes/Programm";
import Messages from "./assets/Components/Messages/Messages";
import HealingStreamPage from "./Pages/HealingStreamPage/HealingStreamPage";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === "#healing-streams" ? "healing-streams" : "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#healing-streams") {
        setCurrentPage("healing-streams");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (window.location.hash === "#home" || window.location.hash === "") {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === "healing-streams" ? "healing-streams" : "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar activePage={currentPage} onNavigate={navigateTo} />
      {currentPage === "healing-streams" ? (
        <HealingStreamPage onNavigateHome={() => navigateTo("home")} />
      ) : (
        <>
          <Hero />
          <Marquee />
          <Features />
          <HealingStream />
          <Programm />
          <Messages />
        </>
      )}
    </>
  );
}

export default App;