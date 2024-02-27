import logo from "./assets/logo.svg";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MainSection } from "./components/MainSection";
import { NavbarSimple } from "./components/NavbarSimple";
import { Steps } from "./components/Steps";
import { Telemetry } from "./components/Telemetry";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <div className=" max-w-max mx-auto overflow-hidden">
        <NavbarSimple />
        {/* <Hero />
        <MainSection>
          <Steps />
          <Telemetry />
        </MainSection> */}
        {/* <About /> */}
        {/* <Careers /> */}
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
