import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ThemeProvider,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon(props) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const theme = {
    accordion: {
      defaultProps: {
        icon: undefined,
        className: "",
        animate: {
          unmount: {},
          mount: {},
        },
        disabled: false,
      },
      styles: {
        base: {
          container: {
            display: "block",
            position: "relative",
            width: "w-full",
          },
          header: {
            initial: {
              display: "flex",
              justifyContent: "justify-between",
              alignItems: "items-center",
              width: "w-full",
              py: "py-4",
              borderWidth: " none",
              color: "text-blue-gray-700",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              textAlign: "text-left",
              fontWeight: "font-semibold",
              lineHeight: "leading-snug",
              userSelect: "select-none",
              hover: "hover:text-blue-gray-900",
              transition: "transition-colors",
            },
            active: { color: "text-blue-gray-900" },
            icon: {
              ml: "ml-4",
            },
          },
          body: {
            display: "block",
            width: "w-full",
            py: "py-4",
            color: "text-gray-700",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-light",
            lineHeight: "leading-normal",
          },
          disabled: {
            pointerEvents: "pointer-events-none",
            opacity: "opacity-50",
          },
        },
      },
    },
  };

  return (
    <>
      <ThemeProvider value={theme}>
        <Accordion
          className=" max-w-3xl bg-[rgb(230,237,244)] hover:bg-[#fff4e0] py-4 px-[25px] cursor-pointer mb-5"
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader
            className="space-mono-bold text-h4-color text-[18.8px] leading-[21.9px] md:text-[22.5px] md:leding-[26.3px]"
            onClick={() => handleOpen(1)}
          >
            {props.headerOne}
          </AccordionHeader>
          <AccordionBody className="text-[14.4px] md:text-[15px] leading-[25px] md:leading-[24px] text-h4-color">
            {props.bodyOne}
          </AccordionBody>
        </Accordion>

        <Accordion
          className=" max-w-3xl bg-[rgb(230,237,244)] hover:bg-[#fff4e0] py-4 px-[25px] cursor-pointer mb-5"
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader
            className="space-mono-bold text-h4-color text-[18.8px] leading-[21.9px] md:text-[22.5px] md:leding-[26.3px]"
            onClick={() => handleOpen(2)}
          >
            {props.headerTwo}
          </AccordionHeader>
          <AccordionBody className="text-[14.4px] md:text-[15px] leading-[25px] md:leading-[24px] text-h4-color">
            {props.bodyTwo}
          </AccordionBody>
        </Accordion>

        <Accordion
          className=" max-w-3xl bg-[rgb(230,237,244)] hover:bg-[#fff4e0] py-4 px-[25px] cursor-pointer mb-5"
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader
            className="space-mono-bold text-h4-color text-[18.8px] leading-[21.9px] md:text-[22.5px] md:leding-[26.3px]"
            onClick={() => handleOpen(3)}
          >
            {props.headerThree}
          </AccordionHeader>
          <AccordionBody className="text-[14.4px] md:text-[15px] leading-[25px] md:leading-[24px] text-h4-color">
            {props.bodyThree}
          </AccordionBody>
        </Accordion>
      </ThemeProvider>
    </>
  );
}
