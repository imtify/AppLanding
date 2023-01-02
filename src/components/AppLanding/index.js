import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import FaqHomeOne from "./FAQ";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Subscribe from "./Subscribe";
import Services from "./Services";
import TeamHomeOne from "./Restaurents";
import Testimonial from "./Testimonial";
import Features from "./Features";
import CounterArea from "./CounterArea";

function HomeOne() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <HeroSection />
      <Services />
      <Features />
      <CounterArea />
      <Testimonial />
      <TeamHomeOne />
      <FaqHomeOne />
      <Subscribe />
      <Footer />
      <BackToTop />
    </>
  );
}

export default HomeOne;
