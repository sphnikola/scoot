import locate from "../assets/icons/locate.svg";
import scooter from "../assets/icons/scooter.svg";
import ride from "../assets/icons/ride.svg";

export function Steps() {
  return (
    <>
      <section className="steps relative ">
        <div className="px-[30px] pt-28 space-y-16 lg:flex lg:space-y-0 lg:gap-x-8 lg:px-[60px]">
          <div className="flex flex-col items-center text-center gap-y-4 md:flex-row md:text-left lg:flex-col lg:items-start">
            <img className=" w-[98px]" src={locate} />
            <div className="space-y-8 md:pl-7 md:space-y-3 lg:pl-0">
              <h4 className=" md:pl-7 lg:pl-0 text-[20px] leading-[23.4px] font-semibold md:text-[24px] md:leading-[28px] text-h4-color">
                Locate with app
              </h4>
              <p className="text-[0.9em] leading-[24px] px-7  md:text-[15px] md:leading-[25px] md:pr-16 lg:px-0 text-p-color">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 md:flex-row md:text-left lg:flex-col lg:items-start">
            <img className=" w-[98px]" src={scooter} />
            <div className="space-y-8 md:pl-7 md:space-y-3 lg:pl-0">
              <h4 className=" md:pl-7 lg:pl-0 text-[20px] leading-[23.4px] font-semibold md:text-[24px] md:leading-[28px] text-h4-color">
                Pick your scooter
              </h4>
              <p className="text-[0.9em] leading-[24px] px-7  md:text-[15px] md:leading-[25px] md:pr-16 lg:px-0 text-p-color">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-y-4 md:flex-row md:text-left lg:flex-col lg:items-start">
            <img className=" w-[98px]" src={ride} />
            <div className="space-y-8 md:pl-7 md:space-y-3 lg:pl-0">
              <h4 className=" md:pl-7 lg:pl-0 text-[20px] leading-[23.4px] font-semibold md:text-[24px] md:leading-[28px] text-h4-color">
                Enjoy the ride
              </h4>
              <p className="text-[0.9em] leading-[24px] px-7  md:text-[15px] md:leading-[25px] md:pr-16 lg:px-0  text-p-color">
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
