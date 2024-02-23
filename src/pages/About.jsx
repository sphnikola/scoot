import telemetry from "../assets/images/telemetry.jpg";
import second_telemetry from "../assets/images/near-you.jpg";
import tech from "../assets/images/our-tech.jpg";

export default function About() {
  return (
    <>
      <section className="about_hero relative py-[50px] px-[26px]">
        <div>
          <h2 className="text-center md:text-left">About</h2>
        </div>
      </section>

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
            {/* <Button text="Learn More" /> */}
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
            {/* <Button text="Learn More" /> */}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-center">Our Values</h3>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="relative mb-14 md:pr-10  md:border-r-[1px] md:border-r-[#A9A8C6]">
            <img className="rounded-full " src={tech} />
            <div className=" bg-[#fcb72c] h-[100px] w-[100px] rounded-full absolute top-[170px] left-[70px] z-10">
              <h5 className="text-center pt-[36px]">01</h5>
            </div>
          </div>
          <div className="text-center flex-1 md:px-10">
            <h5>Our tech</h5>
            <p>
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
