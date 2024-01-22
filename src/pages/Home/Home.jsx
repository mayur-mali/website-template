import React from "react";
import Navbar from "../../components/General/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Service/Services";
import AboutPage from "../../components/AboutPage/AboutPage";
import FeedBack from "../../components/Feedback/FeedBack";
import Footer from "../../components/General/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutPage />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default Home;
