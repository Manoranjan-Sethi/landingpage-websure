import ChooseUs from "./components/ChooseUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Wedo from "./components/Wedo";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partners />
      <Services />
      <ChooseUs />
      <Solutions />
      <Wedo />
    </div>
  );
}

export default App;
