import google_play from "../assets/icons/google-play.svg";
import app_store from "../assets/icons/app-store.svg";
import fb from "../assets/icons/facebook.svg";
import ig from "../assets/icons/instagram.svg";
import x from "../assets/icons/twitter.svg";
import logo from "../assets/logo-white.svg";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <footer className="footer overflow-hidden ">
        <section className="relative bg-footer1st-bg py-[90px] px-[8vw]">
          <div className="footer_1st flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between lg:gap-x-14">
            <h3 className="text-[43.2px] space-mono-bold text-white text-center max-w-md lg:text-[48px] lg:leading-[48px] lg:text-left">
              Sign up and Scoot off today
            </h3>
            <div className="flex gap-x-5">
              <a href="#">
                <div>
                  <img src={app_store} />
                </div>
              </a>
              <form>
                <button type="submit">
                  <img src={google_play} />
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="footer_2nd bg-footer2nd-bg py-[25px] px-[8vw] ">
          <div className="flex flex-col gap-y-20 items-center md:flex-row md:justify-between ">
            <nav className="flex flex-col gap-y-14 md:flex-row md:gap-x-8 md:items-center">
              <img src={logo} className="object-contain" />
              <ul className="flex flex-col gap-y-4  text-nav-link space-mono-bold text-[16px] text-center md:flex-row md:gap-x-3">
                <li>
                  <a href="#">About</a>
                </li>
                <a>Location</a>
                <a href="#">Services</a>
              </ul>
            </nav>
            <div className="inline-flex gap-x-5">
              <img src={fb} className="object-contain" />
              <img src={x} className="object-contain" />
              <img src={ig} className="object-contain" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
