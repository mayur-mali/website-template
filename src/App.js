import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import FeedBack from "./components/Feedback/FeedBack.jsx";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import Services from "./components/Service/Services.jsx";
import Footer from "./components/general/Footer.jsx";
import Navbar from "./components/general/Navbar.tsx";

function App() {
  return (
    <div className="App font-robo">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutPage />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
