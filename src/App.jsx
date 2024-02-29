import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";
import { Footer } from "./components/Footer";
import { NavbarSimple } from "./components/NavbarSimple";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import { Location } from "./pages/Location";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSimple />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Location" element={<Location />} />
          <Route path="Careers" element={<Careers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div>
        <NavbarSimple />
         <About /> 
        <Location />
        <Careers /> 
         <Home />
        <Footer />
      </div> */}
    </>
  );
}

export default App;
