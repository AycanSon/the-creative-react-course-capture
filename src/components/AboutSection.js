// 2 in diesen Ordner kommen alle Components rein
import React from "react";
import home1 from "../img/home1.png";

// 5 Man kann auch verschiedene Styles herunterladen : Google -> styled components
// 5 Da es schon im Json Package drin sit, brauchen wir das Modul nicht zu insztallieren
// 5 Styled importe
import styled from "styled-components";

const AboutSection = () => {
  return (
    // 5 Nehmen wir an, wir wollen diese Klasse Stylen
    // 5 Weil wir unten für das Style "About" geschrieben haben, müssen wir den div genau so benennen

    <About>
      <Description>
        {/* 2 Ist der Große Titel auf der Hautpseite */}
        <div className="title">
          {/* 2 Zweimal hide, weil wir die einzelnen Überschriften einzeln animieren wollen */}
          {/* 2 Und hide, weil wir es erst mal verstecken wollen, damit alles nacheinander aufgeht */}
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        {/* 2 Um Image zu importieren, oben bei den Imports */}
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

// 5 Styled Components
// 5 Für das Klassenstylen oben beim div hier einfügen
// 5 nach dem style ein Punkt setzen und daneben das html Element, was man stylen möchte, in diesem Fall div
// 5 Dann auch daran denken, zwei `` zu setzen
// 5 Dafür Extension herunterladen vscode-styled-components, um normalen css zu schreiben
// 5 Wenn man bspw. Body, footer oder andere Sachen stylen möchte, in components GlobalStyle.js erstellen
// 5 Hier stylen wir unseren obigen div (in About umbenannt)

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

// 5 Jetzt können wir unsere Description stylen
// 5 Einfach z.B. <div className="description"> nur zu Description ändern
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

// Jetzt unseren Image div umstylen (Guy with a camera)

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  // 5 Um unseren Image zu stretchen, img hinzufügen
  img {
    width: 100%;
    height: 80vh;
    //5 Damit die Höhe nicht zu klein wird
    object-fit: cover;
  }
`;

// 5 Jetzt damit die hidden divs auch funktionieren und hinter dem div versteckt sind

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
