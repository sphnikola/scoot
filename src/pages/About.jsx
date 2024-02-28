import digital_era from "../assets/images/digital-era.jpg";
import better_living from "../assets/images/better-living.jpg";
import tech from "../assets/images/our-tech.jpg";
import intergrity from "../assets/images/our-integrity.jpg";
import community from "../assets/images/our-community.jpg";
import { AccordionCustomIcon } from "../components/AccordionCustomIcon";
export default function About() {
  return (
    <>
      <section className="about_hero relative py-[50px] px-[8vw]">
        <div>
          <h2 className="text-center text-white text-[43.2px] leading-[43.2px] tracking-[2px] md:text-left md:text-[48px] md:tracking-normal  space-mono-bold">
            About
          </h2>
        </div>
      </section>

      <section className="telemetry relative p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row-reverse lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-full"
            src={digital_era}
          />

          <div className="space-y-5 xl:pr-60">
            <h2 className=" text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px]">
              Mobility for the digital era
            </h2>
            <p className="px-[30px] md:pl-[0px] text-p-color text-[14.4px] leading-[24px] lg:text-[15px] lg:leading-[25px] ">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
            {/* <Button text="Say Hello" /> */}
          </div>
        </div>
      </section>

      <section className="second-telemetry relative lg:text-left p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-full"
            src={better_living}
          />

          <div className="space-y-5 lg:pl-32 xl:pl-60">
            <h2 className=" text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px]">
              Better urban living
            </h2>
            <p className="px-[30px] md:pl-[0px] text-p-color text-[14.4px] leading-[24px] lg:text-[15px] lg:leading-[25px] ">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
            {/* <Button text="Say Hello" /> */}
          </div>
        </div>
      </section>

      <section className="p-[5vw] lg:pt-10">
        <h2 className="text-center text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px] md:leading-[48px] mb-10">
          Our Values
        </h2>
        <div className="space-y-20 lg:space-y-0 lg:flex ">
          <div className="flex flex-col items-center md:flex-row md:justify-between lg:flex-col">
            <div className="relative mb-14 md:pr-10  md:border-r-[1px] md:border-r-[#A9A8C6] lg:pr-0 lg:border-none">
              <img className="rounded-full " src={tech} />
              <div className=" bg-[#fcb72c] h-[100px] w-[100px] rounded-full absolute top-[170px] left-[70px] z-10">
                <h5 className="text-center pt-[36px] text-[24px] text-h4-color  font-extrabold space-mono-bold">
                  01
                </h5>
              </div>
            </div>
            <div className="text-center flex-1 md:px-10 space-y-4">
              <h5 className="text-[20px] leading-[23.4px] md:text-[25px] md:leading-[28px] space-mono-bold text-h4-color">
                Our tech
              </h5>
              <p className=" text-nav-link text-[14.4px] leading-[24px] md:text-[15px] md:leading-[25px] lexend-deca">
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
                <h5 className="text-center pt-[36px] text-[24px] text-h4-color  font-extrabold space-mono-bold">
                  02
                </h5>
              </div>
            </div>
            <div className="text-center flex-1 md:px-10 space-y-4">
              <h5 className="text-[20px] leading-[23.4px] md:text-[25px] md:leading-[28px] space-mono-bold text-h4-color ">
                Our integrity
              </h5>
              <p className=" text-nav-link text-[14.4px] leading-[24px] md:text-[15px] md:leading-[25px] ">
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-between lg:flex-col">
            <div className="relative mb-14 md:pr-10  md:border-r-[1px] md:border-r-[#A9A8C6] lg:pr-0 lg:border-none">
              <img className="rounded-full " src={community} />
              <div className=" bg-[#fcb72c] h-[100px] w-[100px] rounded-full absolute top-[170px] left-[70px] z-10">
                <h5 className="text-center pt-[36px] text-[24px] text-h4-color  font-extrabold space-mono-bold">
                  03
                </h5>
              </div>
            </div>
            <div className="text-center flex-1 md:px-10 space-y-4">
              <h5 className="text-[20px] leading-[23.4px] md:text-[25px] md:leading-[28px] space-mono-bold text-h4-color">
                Our community
              </h5>
              <p className=" text-nav-link text-[14.4px] leading-[24px] md:text-[15px] md:leading-[25px] ">
                We support every community we serve. All workers are paid a
                living wage based on their location and are Scoot employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs p-[8vw] mb-20  my-10">
        <div>
          <h4 className="text-center space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px] md:leading-[48px] text-h4-color mb-10">
            FAQS
          </h4>
          <div className=" mb-10 flex flex-col items-center lg:flex-row lg:gap-x-28 lg:justify-center lg:items-start">
            <h3 className="text-h4-color space-mono-bold text-[40px] leading-[48px] mb-5">
              How it works
            </h3>
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
          <div className="flex flex-col items-center lg:flex-row lg:gap-x-28 lg:justify-center lg:items-start">
            <h4 className="text-h4-color space-mono-bold text-[40px] leading-[48px] mb-5">
              Safe Driving
            </h4>
            <div className="">
              <AccordionCustomIcon
                headerOne="Should I wear a helmet?"
                bodyOne="
              Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
              always wearing a helmet regardless of the local laws. We like you and we want you to be as 
              safe as possible while Scooting.
            "
                headerTwo="How about the rules & regulations?"
                bodyTwo=" 
              Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
              regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
              block access to buildings or get in people's way.
            "
                headerThree="What if I damage my Scoot?"
                bodyThree="
              Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
              it as clear as possible. There's an option to add insurance for each trip, or you can sign 
              up for annual insurance if you're a regular Scooter.
            "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
