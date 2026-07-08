import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Agitation } from "./components/Agitation";
import { Mechanism } from "./components/Mechanism";
import { Offer } from "./components/Offer";
import { Proof } from "./components/Proof";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StickyCallBar } from "./components/StickyCallBar";

function App() {
  return (
    <div className="font-body">
      <Nav />
      <Hero />
      <Agitation />
      <Mechanism />
      <Offer />
      <Proof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCallBar />
    </div>
  );
}

export default App;
