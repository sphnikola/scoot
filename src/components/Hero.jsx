import { Button } from "./Button";

export function Hero() {
  return (
    <>
      <section className="hero pt-[100px] pb-[140px] px-[54.5px] relative">
        <div className="max-w-[515px] mx-auto xl:ml-40">
          <div className="flex flex-col justify-center items-center text-center  text-white gap-y-10 lg:text-left lg:items-start">
            <h2 className="space-mono-bold text-[2.7em] leading-[43.2px] font-semibold md:text-[3rem] md:leading-[48px] md:p-5 lg:relative lg:right-[20%]">
              Scooter sharing made simple
            </h2>
            <p className="text-[0.9rem] max-w-[405px] leading-[25px]  font-semibold">
              Scooter takes the hassle out of urban mobility. Our bikes are
              placed in convenient locations in each of our cities. Use our app
              to locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <Button text="Get Scootin" />
            {/* <button className="bg-button-bg px-14 py-3 border-2 border-solid border-button-bg text-white hover:text-yellow-500 hover:bg-transparent">
              Get Scootin
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
