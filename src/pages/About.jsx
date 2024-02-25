import digital_era from "../assets/images/digital-era.jpg";
import better_living from "../assets/images/better-living.jpg";
import tech from "../assets/images/our-tech.jpg";
import intergrity from "../assets/images/our-integrity.jpg";
import community from "../assets/images/our-community.jpg";
import { AccordionCustomIcon } from "../components/AccordionCustomIcon";
export default function About() {
  return (
    <>
      <section className="about_hero relative py-[50px] px-[26px]">
        <div>
          <h2 className="text-center md:text-left">About</h2>
        </div>
      </section>

      <section className="telemetry relative p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row-reverse lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-[400px]"
            src={digital_era}
          />

          <div className="space-y-5">
            <h4>Easy to use riding telemetr</h4>
            <p className="px-[30px] md:pl-[0px] ">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            {/* <Button text="Learn More" /> */}
          </div>
        </div>
      </section>

      <section className="second-telemetry relative mt-[60px] lg:text-left  p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8 lg:flex-row lg:text-left">
          <img
            className="rounded-full lg:w-[400px] object-contain "
            src={better_living}
          />
          <div className="space-y-5 lg:pl-7 lg:text-right">
            <h4>Easy to use riding telemetr</h4>
            <p className=" px-[30] lg:pl-[30px] ">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            {/* <Button text="Learn More" /> */}
          </div>
        </div>
      </section>

      <section className="p-[8vw]">
        <h3 className="text-center">Our Values</h3>
        <div className="lg:flex ">
          <div className="flex flex-col items-center md:flex-row md:justify-between lg:flex-col">
            <div className="relative mb-14 md:pr-10  md:border-r-[1px] md:border-r-[#A9A8C6] lg:pr-0 lg:border-none">
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
          <div className="flex flex-col items-center md:flex-row md:justify-between lg:flex-col">
            <div className="relative mb-14 md:pr-10  md:border-r-[1px] md:border-r-[#A9A8C6] lg:pr-0 lg:border-none">
              <img className="rounded-full " src={intergrity} />
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
          <div className="flex flex-col items-center md:flex-row md:justify-between lg:flex-col">
            <div className="relative mb-14 md:pr-10  md:border-r-[1px] md:border-r-[#A9A8C6] lg:pr-0 lg:border-none">
              <img className="rounded-full " src={community} />
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
        </div>
      </section>

      <section className="faqs p-[8vw]">
        <div>
          <h4 className="text-center">FAQS</h4>
          <div className=" mb-10 flex flex-col items-center lg:flex-row lg:gap-x-28 lg:justify-center">
            <h4 className="">How it works</h4>
            <div className="">
              <AccordionCustomIcon
                headerOne="How do i download the app"
                bodyOne="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page. "
                headerTwo="can i find nearby scoots"
                bodyTwo=" Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. "
                headerThree="do i need a lincense plate"
                bodyThree="Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots. "
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:gap-x-28">
            <h4 className="">Safe Driving</h4>
            <div className="">{/* <AccordionCustomIcon /> */}</div>
          </div>
        </div>
      </section>
    </>
  );
}
