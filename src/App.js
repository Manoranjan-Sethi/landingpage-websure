import ChooseUs from "./components/ChooseUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Solutions from "./components/Solutions";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partners />
      <Services />
      <ChooseUs />
      <Solutions />
    </div>
  );
}

export default App;
