import React from "react";
import Header from "./Header/Header.jsx";
// import Slider from "./Commponents/Slider/Slider.jsx";
import PopupBox from "./Commponents/PouppBox/PoupBox.jsx";
import Hero from "./Commponents/Hero/Hero.jsx";
import IntroPage from "./Commponents/IntroPage/IntroPage.jsx";
import Introsecond from "./Commponents/IntroPage/Introsecond.jsx";
import Clients from "./Commponents/IntroPage/Clients.jsx";
import Footer from "./Commponents/Footer/footer.jsx"
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Slider /> */}
      <PopupBox />
      <IntroPage />
      <Introsecond />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
