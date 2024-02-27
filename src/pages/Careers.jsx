import digital_era from "../assets/images/digital-era.jpg";
import better_living from "../assets/images/better-living.jpg";
import tech from "../assets/images/our-tech.jpg";
import join_us from "../assets/images/join-us.jpg";
import intergrity from "../assets/images/our-integrity.jpg";
import community from "../assets/images/our-community.jpg";
import { Button } from "../components/Button";

export default function Careers() {
  return (
    <>
      <section className="about_hero relative py-[50px] px-[26px]">
        <div>
          <h2 className="text-center text-white text-[43.2px] leading-[43.2px] tracking-[2px] md:text-left md:text-[48px] md:tracking-normal  space-mono-bold">
            Careers
          </h2>
        </div>
      </section>

      <section className="telemetry relative p-[8vw]">
        <div className="flex flex-col items-center text-center gap-y-8  lg:flex-row-reverse lg:text-left ">
          <img
            className="rounded-full    object-contain lg:w-[400px]"
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

      <section className="p-[8vw]">
        <h2 className="text-center">Why join us?</h2>
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

      <section className="jobs p-[8vw] space-y-5 text-center md:text-left">
        <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
          <span>
            <h4>General Manager</h4>
            <p>Jakarta, Indonesia</p>
          </span>
          <Button text="Apply" />
        </div>
        <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
          <span>
            <h4>UI/UX Designer</h4>
            <p>Yokohama, Japan</p>
          </span>
          <Button text="Apply" />
        </div>
        <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
          <span>
            <h4>Blog Content Copywriter</h4>
            <p>New York, United States</p>
          </span>
          <Button text="Apply" />
        </div>
        <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
          <span>
            <h4>Graphic Designer</h4>
            <p>New York, United States</p>
          </span>
          <Button text="Apply" />
        </div>
        <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
          <span>
            <h4>Fleet Supervisor</h4>
            <p>Jakarta, Indonesia</p>
          </span>
          <Button text="Apply" />
        </div>
        <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
          <span>
            <h4>UX Analyst</h4>
            <p>London, United Kingdom</p>
          </span>
          <Button text="Apply" />
        </div>
      </section>
    </>
  );
}
