import telemetry from "../assets/images/telemetry.jpg";
import second_telemetry from "../assets/images/near-you.jpg";
import third_telemetry from "../assets/images/payments.jpg";
import { Button } from "./Button";

export function Telemetry() {
  return (
    <>
      <section className="telemetry relative p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row-reverse lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-full"
            src={telemetry}
          />

          <div className="space-y-5 xl:pr-60">
            <h2 className=" text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px]">
              Easy to use riding telemetry
            </h2>
            <p className="px-[30px] md:pl-[0px] text-p-color text-[14.4px] leading-[24px] lg:text-[15px] lg:leading-[25px] ">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <Button text="Say Hello" />
          </div>
        </div>
      </section>

      <section className="second-telemetry relative lg:text-left p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-full"
            src={second_telemetry}
          />

          <div className="space-y-5 lg:pl-32 xl:pl-60">
            <h2 className=" text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px]">
              Coming to a city near you
            </h2>
            <p className="px-[30px] md:pl-[0px] text-p-color text-[14.4px] leading-[24px] lg:text-[15px] lg:leading-[25px] ">
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <Button text="Say Hello" />
          </div>
        </div>
      </section>

      <section className="telemetry relative p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row-reverse lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-full"
            src={third_telemetry}
          />

          <div className="space-y-5 xl:pr-60">
            <h2 className=" text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px]">
              Zero hassle payments
            </h2>
            <p className="px-[30px] md:pl-[0px] text-p-color text-[14.4px] leading-[24px] lg:text-[15px] lg:leading-[25px] ">
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
            <Button text="Say Hello" />
          </div>
        </div>
      </section>
    </>
  );
}
