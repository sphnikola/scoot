import logo from "./assets/logo.svg";
import home_hero_mobile from "./assets/images/home-hero-mobile.jpg";
import home_hero_tablet from "./assets/images/home-hero-tablet.jpg";
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
            <button className="bg-button-bg px-14 py-3 border-2 border-solid border-button-bg text-white hover:bg-white hover:text-yellow-500">
              Get Scootin
            </button>
          </div>
        </div>
      </header>
      <section className="hero ">
        <div className="max-w-[515px] mx-auto">
          <div className="flex flex-col justify-center items-center text-center pt-[100px] pb-[140px] px-[54.5px] text-white gap-y-10">
            <h2 className="text-[2.7em] leading-[43.2px] font-semibold">
              Scooter sharing made simple
            </h2>
            <p>
              Scooter takes the hassle out of urban mobility. Our bikes are
              placed in convenient locations in each of our cities. Use our app
              to locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <button className="bg-button-bg px-14 py-3 border-2 border-solid border-button-bg text-white hover:bg-white hover:text-yellow-500">
              Get Scootin
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
