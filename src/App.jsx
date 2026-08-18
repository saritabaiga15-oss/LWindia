import React from "react";

import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import Marquee from "./assets/Components/Marquee/Marquee";
import Features from "./assets/Components/Features/Features";
import HealingStream from "./assets/Components/HealingStream/HealingStream";
import Messages from "./assets/Components/Messages/Messages";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <HealingStream/>
      <Messages/>
    </>
  );
}

export default App;