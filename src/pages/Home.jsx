import { Hero } from "../components/Hero";
import { MainSection } from "../components/MainSection";
import { Steps } from "../components/Steps";
import { Telemetry } from "../components/Telemetry";

export default function Home() {
  return (
    <>
      <Hero />
      <MainSection>
        <Steps />
        <Telemetry />
      </MainSection>
    </>
  );
}
