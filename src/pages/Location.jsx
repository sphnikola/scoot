import map_mobile from "../assets/images/world-map-mobile.png";
import map_tablet from "../assets/images/world-map-desktop.png";
import { Button } from "../components/Button";
export function Location() {
  return (
    <>
      <section className="about_hero relative py-[50px] px-[8vw]">
        <div>
          <h2 className="text-center text-white text-[43.2px] leading-[43.2px] tracking-[2px] md:text-left md:text-[48px] md:tracking-normal  space-mono-bold">
            Location
          </h2>
        </div>
      </section>

      <section className="md:relative">
        <div className="p-[5vw] flex items-center justify-center ">
          <img className="object-contain md:hidden" src={map_mobile} />
          <img className="object-contain hidden md:block" src={map_tablet} />
        </div>
        <ul className="space-y-5 px-[60px] max-w-2xl mx-auto">
          <li className="bg-[#fff4e0] h-[80px] flex items-center justify-center space-mono-bold text-h4-color text-[22px] font-extrabold md:h-[40px] md:w-[150px] md:absolute md:top-[12%] md:left-[15%]">
            New york
          </li>
          <li className="bg-[#fff4e0] h-[80px] flex items-center justify-center space-mono-bold text-h4-color text-[22px] font-extrabold">
            London
          </li>
          <li className="bg-[#fff4e0] h-[80px] flex items-center justify-center space-mono-bold text-h4-color text-[22px] font-extrabold">
            Yokohama
          </li>
          <li className="bg-[#fff4e0] h-[80px] flex items-center justify-center space-mono-bold text-h4-color text-[22px] font-extrabold">
            Jakarta
          </li>
        </ul>
      </section>

      <section className="p-[5vw]">
        <div
          className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center
        "
        >
          <h2 className="text-[48px] leading-[48px] text-h4-color lg:text-left space-mono-bold ">
            Your city not listed?
          </h2>

          <p className="text-[15px] leading-[25px] text-p-color px-[50px] text-center lg:text-left lg:max-w-lg">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>

          <Button text="Message Us" />
        </div>
      </section>
    </>
  );
}
