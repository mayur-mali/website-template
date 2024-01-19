import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import Navbar from "./components/general/Navbar.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
