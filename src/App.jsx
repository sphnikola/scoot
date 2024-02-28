import logo from "./assets/logo.svg";
import { Footer } from "./components/Footer";
import { NavbarSimple } from "./components/NavbarSimple";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
function App() {
  return (
    <>
      <div className=" max-w-max mx-auto overflow-hidden">
        <NavbarSimple />
        <About />
        {/* <Careers /> */}
        {/* <Home /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
