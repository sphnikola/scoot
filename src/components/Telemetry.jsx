import telemetry from "../assets/images/telemetry.jpg";
import { Button } from "./Button";

export function Telemetry() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center text-center gap-y-8">
          <img
            className="rounded-full object-contain w-[450px]"
            src={telemetry}
          />
          <div className="space-y-5">
            <h4>Easy to use riding telemetr</h4>
            <p className="px-[60px]">
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
