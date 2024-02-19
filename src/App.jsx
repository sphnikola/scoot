import logo from "./assets/logo.svg";
import { Hero } from "./components/Hero";
import { MainSection } from "./components/MainSection";
import { NavbarSimple } from "./components/NavbarSimple";
import { Steps } from "./components/Steps";
import { Telemetry } from "./components/Telemetry";
function App() {
  return (
    <>
      <NavbarSimple />
      <Hero />
      <MainSection>
        <Steps />
        <Telemetry />
      </MainSection>
    </>
  );
}

export default App;
