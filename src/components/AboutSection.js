// 2 in diesen Ordner kommen alle Components rein
import React from "react";
import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        {/* 2 Ist der Große Titel auf der Hautpseite */}
        <div className="title">
          {/* 2 Zweimal hide, weil wir die einzelnen Überschriften einzeln animieren wollen */}
          {/* 2 Und hide, weil wir es erst mal verstecken wollen, damit alles nacheinander aufgeht */}
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        {/* 2 Um Image zu importieren, oben bei den Imports */}
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
