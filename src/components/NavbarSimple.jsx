import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 lg:gap-x-12 space-mono-bold text-p-color">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium "
      >
        <Link
          to="About"
          href="#"
          className="flex items-center hover:text-[rgb(252,183,44)] transition-colors space-mono-bold text-p-color"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="Location"
          href="#"
          className="hover:text-[rgb(252,183,44)] flex items-center  transition-colors space-mono-bold text-p-color"
        >
          Location
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="Careers"
          href="#"
          className="flex items-center hover:text-[rgb(252,183,44)] transition-colors space-mono-bold text-p-color"
        >
          Careers
        </Link>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography> */}
        <div className="flex md:gap-x-14 ">
          <Link to="/">
            <img className="object-contain" src={logo} />
          </Link>
          <div className=" hidden md:block">
            <NavList />
          </div>
        </div>
        <div className="hidden md:block ">
          <Button text="Get Scootin" />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button text="Get Scootin" />
      </Collapse>
    </Navbar>
  );
}
