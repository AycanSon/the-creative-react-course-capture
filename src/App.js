import React from "react";
// 5 Global Style hier importieren

// 2 Import pages
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
// 1 Neue Packages nutzen für dieses Projekt (z.b. Animationen) mit
// 1 - npm install react-router-dom framer-motion react-intersection-observer styled-components
// 1 In Github ein neues repository erstelllen und um einen Link zu erstellen (Wahrscheinlich einen Link für diese Seite)
// 1 Nach dem Erstellen des Repository diesen Teil git remote add origin https://github.com/AycanSon/the-creative-react-course-capture.git im Terminal eingeben und enter
// 1 Alle Änderungen pushen (Zu Source Control wechseln, Changes auswählen (alle) und dann schreiben sowas wie 1. Initial Setup )
// 1 Und dann nochmal publish klicken (damit es gepusht wird) und ggf bei Git anmelden

function App() {
  return (
    <div className="App">
      {/* 5 Hier outrendern GloalStyle */}
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
