import React from "react";
import Navbar from "../../components/General/Navbar.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Services from "../../components/Service/Services.jsx";
import AboutPage from "../../components/AboutPage/AboutPage.jsx";
import FeedBack from "../../components/Feedback/FeedBack.jsx";
import Footer from "../../components/General/Footer.jsx";

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
