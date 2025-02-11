// 2 Extra ein pages folder, damit wir für alle Sections eigene Seiten der Hauptseite (About Us) haben
// 2 Das heißt der About Section, der Services Section, der FAQ Section usw
// 2 Wir teilen die nur in einzelne Seiten auf, diese sind aber alle auf einer Seite zu sehen
// 2 Hier also die components importieren

import React from "react";
// 2 import Page Containers from components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

// 2 Das hier wird also nur ein Container
const AboutUs = () => {
  /* 2 Hier kommen auch FAQSection und ServicesSection usw rein */
  // 3 Wir brauchen einen parent div, da sonst return immer nur den ersten component zurückgibt
  // 3 Parent div sieht dann <> und </> aus
  // 3 Auch darauf achten, dass alles in Klammern eingegrenzt ist
  return (
    <>
      <AboutSection />;
      <ServicesSection />;
    </>
  );
};

export default AboutUs;
