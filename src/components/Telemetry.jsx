import telemetry from "../assets/images/telemetry.jpg";
import second_telemetry from "../assets/images/near-you.jpg";
import third_telemetry from "../assets/images/payments.jpg";
import { Button } from "./Button";

export function Telemetry() {
  return (
    <>
      <section className="telemetry relative">
        <div className="flex flex-col items-center text-center gap-y-8 px-6 lg:flex-row-reverse lg:text-left lg:px-20">
          <img
            className="rounded-full    object-contain lg:w-[400px]"
            src={telemetry}
          />

          <div className="space-y-5">
            <h4>Easy to use riding telemetr</h4>
            <p className="px-[30px] lg:pl-[0px] lg:pr-[10px]">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <Button text="Learn More" />
          </div>
        </div>
      </section>

      <section className="second-telemetry relative mt-[60px]">
        <div className="flex flex-col items-center text-center gap-y-8 px-6 lg:flex-row lg:text-left lg:px-20">
          <img
            className="rounded-full lg:w-[400px] object-contain "
            src={second_telemetry}
          />
          <div className="space-y-5 lg:px-7">
            <h4>Easy to use riding telemetr</h4>
            <p className="  ">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <Button text="Learn More" />
          </div>
        </div>
      </section>

      <section className="telemetry relative">
        <div className="flex flex-col items-center text-center gap-y-8 px-6 lg:flex-row-reverse lg:text-left lg:px-20">
          <img
            className="rounded-full lg:w-[400px] object-contain"
            src={third_telemetry}
          />
          <div className="space-y-5">
            <h4>Easy to use riding telemetr</h4>
            <p className="px-[30px] lg:pl-[0px] lg:pr-[10px]">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <Button text="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
}
