import google_play from "../assets/icons/google-play.svg";
import app_store from "../assets/icons/app-store.svg";
export function Footer() {
  return (
    <>
      <footer className="footer relative">
        <section className="footer_1st bg-footer1st-bg py-[90px] px-[24px]">
          <div className="flex flex-col items-center gap-y-8">
            <h3>Sign up and Scoot off today</h3>
            <div className="flex gap-x-5">
              <button>
                <div>
                  <img src={app_store} />
                </div>
              </button>
              <button>
                <div>
                  <img src={google_play} />
                </div>
              </button>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
