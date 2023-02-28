import clsx from "clsx";
import { ImageComponent } from "../global/image";

const DevelopmentValue = () => {
  return (
    <div className="max-w-[1280px] px-5 md:px-10 mx-auto mt-[80px] md:mt-[120px]">
      <div className="md:flex text-black text-center md:text-left gap-[40px]">
        <div
          className={clsx(
            "text-[40px] leading-[48px] w-[100%] min-w-[100%] font-[700]",
            "md:w-[300px] md:min-w-[300px]",
            "xl:text-[60px] xl:leading-[72px] xl:w-[440px] xl:min-w-[440px]"
          )}
        >
          Development Value Add-On
        </div>
        <div className="text-[16px] font-[300] xl:text-[20px] opacity-[0.8] mt-[20px]">
          Understanding your aspirations, readiness, and capabilities allows us
          to become the lifelong partner that deliver sustainable success and
          competitive edge.
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-8 text-center md:text-left justify-center md:mt-[60px]">
        <div className="px-10 py-[60px] bg-[#111239] md:w-[386px] mx-auto md:mx-0">
          <ImageComponent
            src="/images/home/proven.png"
            className="w-[160px] h-[160px] mx-auto md:mx-0"
            alt="Proven Success"
          />
          <div className="text-[28px] font-[600] text-white">
            Proven Success
          </div>
          <p className="text-[14px] mt-[12px] text-white opacity-[0.7]">
            Experience and expertise building a successful Web3 product
            portfolio
          </p>
        </div>
        <div className="px-10 pt-[60px] pb-10 bg-[#111239] md:w-[386px] mx-auto md:mx-0">
          <ImageComponent
            src="/images/home/continuous.png"
            className="w-[160px] h-[160px] mx-auto md:mx-0"
            alt="Continuous Support "
          />
          <div className="text-[28px] font-[600] text-white">
            Continuous Support
          </div>
          <p className="text-[14px] mt-[12px] text-white opacity-[0.7]">
            Powerful boost from an extensive network of partners and businesses
          </p>
        </div>
        <div className="px-10 pt-[60px] pb-10 bg-[#111239] md:w-[386px] mx-auto md:mx-0">
          <ImageComponent
            src="/images/home/professionalism.png"
            className="w-[160px] h-[160px] mx-auto md:mx-0"
            alt="Tech Professionalism "
          />
          <div className="text-[28px] font-[600] text-white">
            Tech Professionalism
          </div>
          <p className="text-[14px] mt-[12px] text-white opacity-[0.7]">
            Latest technologies that ensures top-notch development and delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentValue;
