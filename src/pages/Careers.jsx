import digital_era from "../assets/images/digital-era.jpg";
import better_living from "../assets/images/better-living.jpg";
import tech from "../assets/images/our-tech.jpg";
import join_us from "../assets/images/join-us.jpg";
import intergrity from "../assets/images/our-integrity.jpg";
import community from "../assets/images/our-community.jpg";
import { Button } from "../components/Button";
import { JobCard } from "../components/JobCard";

export default function Careers() {
  return (
    <>
      <section className="about_hero relative py-[50px] px-[8vw]">
        <div>
          <h2 className="text-center text-white text-[43.2px] leading-[43.2px] tracking-[2px] md:text-left md:text-[48px] md:tracking-normal  space-mono-bold">
            Careers
          </h2>
        </div>
      </section>

      <section className="telemetry relative p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row-reverse lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-full"
            src={join_us}
          />

          <div className="space-y-5 xl:pr-60">
            <h2 className=" text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px]">
              Care to join our mission?
            </h2>
            <p className="px-[30px] md:pl-[0px] text-p-color text-[14.4px] leading-[24px] lg:text-[15px] lg:leading-[25px] ">
              We’re always looking for ambitious individuals to help us on our
              journey. If you’re passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
            <Button text="Say Hello" />
          </div>
        </div>
      </section>

      <section className="p-[5vw] lg:pt-10">
        <h2 className="text-center text-h4-color space-mono-bold text-[43.2px] leading-[43.2px] md:text-[48px] md:leading-[48px] mb-10">
          Why join us?
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

      <section className="jobs px-[8vw] space-y-5 text-center md:text-left py-28 md:py-16">
        <JobCard h4="General Manager" p="Jakarta, Indonesia" />
        <JobCard h4="UI/UX Designer" p="Yokohama, Japan" />
        <JobCard h4="Blog Content Copywriter" p="New York, United States" />
        <JobCard h4="Graphic Designer" p="New York, United States" />
        <JobCard h4="Fleet Supervisor" p="Jakarta, Indonesia" />
        <JobCard h4="UX Analyst" p="London, United Kingdom" />
      </section>
    </>
  );
}
