import { Button } from "./Button";
export function JobCard(props) {
  return (
    <>
      <div className=" bg-jobs-bg flex flex-col items-center gap-y-3 py-5 md:flex-row md:justify-between md:items-center md:px-7">
        <span>
          <h4 className="space-mono-bold text-h4-color text-[20px] leading-[23.4px] md:text-[24px] md:leading-[28px]">
            {props.h4}
          </h4>
          <p className="text-[14.4px] leading-[24px] text-h4-color md:text-[15px] md:leading-[25px]">
            {props.p}
          </p>
        </span>
        <Button text="Apply" />
      </div>
    </>
  );
}
