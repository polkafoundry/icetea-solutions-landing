import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "../global/image";
import OurSuccessTop from "./our-success-top";

const OurSuccessStories = () => {
  return (
    <div className="mt-[180px]">
      <div className="flex text-white gap-[40px]">
        <div className="text-[60px] leading-[72px] w-[440px] min-w-[440px] font-bold">
          Our success stories
        </div>
        <div className="text-[20px] opacity-[0.8] mt-[20px]">
          Icetea Solutions incorporates customer experience-led design thinking
          with software engineering excellence to transform your digital journey
          and meet customer&apos;s expanding demands.
        </div>
      </div>
      <OurSuccessTop />
      <div className="flex justify-center">
        <button className="flex text-[18px] gap-[12px] items-center mt-10 px-[30px] py-[10px] text-white border-white border-[1px] rounded-[40px] font-[600]">
          See case studies
          <FaArrowRight fontSize={"16px"} color="white" />
        </button>
      </div>
    </div>
  );
};

export default OurSuccessStories;
