import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import FeedBack from "./components/Feedback/FeedBack.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Services from "./components/Service/Services.jsx";
import Footer from "./components/General/Footer.jsx";
import Navbar from "./components/General/Navbar.jsx";

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
