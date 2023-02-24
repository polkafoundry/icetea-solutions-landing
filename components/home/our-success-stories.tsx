import { nextPath } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "../global/image";
import OurSuccessTop from "./our-success-top";

const OurSuccessStories = () => {
  return (
    <div className="mt-[80px] xl:mt-[180px]">
      <div className="md:flex text-white text-center md:text-left gap-[40px]">
        <div
          className={clsx(
            "text-[40px] leading-[48px] w-[100%] min-w-[100%] font-bold",
            "md:w-[300px] md:min-w-[300px]",
            "xl:text-[60px] xl:leading-[72px] xl:w-[440px] xl:min-w-[440px]"
          )}
        >
          Our success stories
        </div>
        <div className="text-[16px] xl:text-[20px] opacity-[0.8] mt-[20px]">
          Icetea Solutions incorporates customer experience-led design thinking
          with software engineering excellence to transform your digital journey
          and meet customer&apos;s expanding demands.
        </div>
      </div>
      <OurSuccessTop />
      <div className="flex justify-center">
        <Link href={`${nextPath.PORTFOLIO}`}>
          <button className="flex text-[18px] gap-[12px] items-center mt-10 px-[30px] py-[10px] text-white border-white border-[1px] rounded-[40px] font-[600] hover:scale-110 duration-500">
            See case studies
            <FaArrowRight fontSize={"16px"} color="white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurSuccessStories;
