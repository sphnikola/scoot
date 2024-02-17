import logo from "./assets/logo.svg";
import { Hero } from "./Hero";
import { MainSection } from "./MainSection";
import { Steps } from "./Steps";
function App() {
  return (
    <>
      <header className="max-w-full font-mono">
        <div className="py-2">
          <div className="flex flex-col items-center gap-y-2 md:flex-row md:justify-around md:items-center">
            <div className="space-y-2 md:flex md:gap-x-7 lg:gap-x-14">
              <div className="flex justify-center">
                <img className="object-contain" src={logo} />
              </div>
              <div className="">
                <ul className="flex gap-x-2 md:gap-x-8 lg:gap-x-14 text-nav-link  text-lg">
                  <li className="hover:text-yellow-500">About</li>
                  <li className="hover:text-yellow-500">Location</li>
                  <li className="hover:text-yellow-500">Careers</li>
                </ul>
              </div>
            </div>
            <button className="bg-button-bg px-14 py-3 border-2 border-solid border-button-bg text-white hover:bg-transparent hover:text-yellow-500">
              Get Scootin
            </button>
          </div>
        </div>
      </header>
      <Hero />
      <MainSection>
        <Steps />
      </MainSection>
    </>
  );
}

export default App;
