import BrandsDeal from "./components/BrandsDeal";
import CallToAction from "./components/CallToAction";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LimeLight from "./components/LimeLight";
import MensCategory from "./components/MensCategory";

import Promo from "./components/Promo";
import SavingZone from "./components/SavingZone";
import WomensCategory from "./components/WomensCategory";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Promo />
      <Carousel />
      <SavingZone />
      <CallToAction />
      <MensCategory />
      <WomensCategory />
      <BrandsDeal />
      <LimeLight />
      <Footer />
    </>
  );
};

export default App;
