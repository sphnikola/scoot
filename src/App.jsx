import logo from "./assets/logo.svg";
import home_hero_mobile from "./assets/images/home-hero-mobile.jpg";
import home_hero_tablet from "./assets/images/home-hero-tablet.jpg";
import right_arrow from "./assets/patterns/right-arrow.svg";
import white_circles from "./assets/patterns/white-circles.svg";
import locate from "./assets/icons/locate.svg";
import scooter from "./assets/icons/scooter.svg";
import ride from "./assets/icons/ride.svg";
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
      <section className="hero pt-[100px] pb-[140px] px-[54.5px] relative">
        <div className="max-w-[515px] mx-auto ">
          <div className="flex flex-col justify-center items-center text-center  text-white gap-y-10 lg:text-left lg:items-start">
            <h2 className="text-[2.7em] leading-[43.2px] font-semibold md:text-[3rem] md:leading-[48px] md:p-5 lg:relative lg:right-[20%]">
              Scooter sharing made simple
            </h2>
            <p className="text-[0.9rem] max-w-[405px] leading-[25px]  font-semibold">
              Scooter takes the hassle out of urban mobility. Our bikes are
              placed in convenient locations in each of our cities. Use our app
              to locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <button className="bg-button-bg px-14 py-3 border-2 border-solid border-button-bg text-white hover:text-yellow-500 hover:bg-transparent">
              Get Scootin
            </button>
          </div>
        </div>
      </section>
      <main>
        <section className="steps">
          <div className="px-[28.55px]  space-y-16 lg:flex lg:space-y-0 lg:gap-x-8">
            <div className="flex flex-col items-center text-center gap-y-4 md:flex-row md:text-left lg:flex-col lg:items-start">
              <img className=" w-[98px]" src={locate} />
              <div className="space-y-8 md:pl-7 lg:pl-0">
                <h4 className=" md:pl-7 lg:pl-0">Locate with app</h4>
                <p className="text-[0.9em] leading-[24px] px-7 lg:px-0">
                  Use the app to find the nearest scooter to you. We are
                  continuously placing scooters in the areas with most demand,
                  so one should never be too far away.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4 md:flex-row md:text-left lg:flex-col lg:items-start">
              <img className=" w-[98px]" src={scooter} />
              <div className="space-y-8 md:pl-7 lg:pl-0">
                <h4 className=" md:pl-7 lg:pl-0">Pick your scooter</h4>
                <p className="text-[0.9em] leading-[24px] px-7 lg:px-0">
                  We show the most important info for the scooters closest to
                  you. So you know how much charge they have left and can see
                  roughly how much it will cost.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4 md:flex-row md:text-left lg:flex-col lg:items-start">
              <img className=" w-[98px]" src={ride} />
              <div className="space-y-8 md:pl-7 lg:pl-0">
                <h4 className=" md:pl-7 lg:pl-0">Enjoy the ride</h4>
                <p className="text-[0.9em] leading-[24px] px-7 lg:px-0">
                  Scan the QR code and the bike will unlock. Retract the cable
                  lock, put on a helmet, and you’re off! Always lock bikes away
                  from walkways and accessibility ramps.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
