import HeaderComponent from "@/components/global/header";
import { ImageComponent } from "../global/image";
import { FaArrowRight } from "react-icons/fa";

const HomeBannerTop = () => {
  return (
    <div>
      <div className="relative home-top-banner h-[640px] text-white">
        <HeaderComponent />
        <div className="text-[12px] flex items-center gap-[6px] justify-center mt-[100px]">
          Powered by
          <ImageComponent
            src={"/images/home/icetea_logo.svg"}
            className="w-[110px] h-[20px]"
            alt="logo"
          />
        </div>
        <h1 className="text-center text-[88px] font-bold">
          Web3 Development Hub
        </h1>
        <h2 className="text-[40px] text-center font-[300]">
          One-Stop Digital Transformation Services
        </h2>
        <div className="text-[18px] flex gap-[12px] mt-[60px] justify-center">
          <button className="px-[30px] py-[10px] rounded-[40px] bg-white text-black font-[600px]">
            Consult with us
          </button>
          <button className="px-[30px] py-[10px] flex flex-nowrap gap-[10px] items-center border-white border-[1px] rounded-[40px]">
            Our success stories
            <FaArrowRight fontSize={"14px"} />
          </button>
        </div>
      </div>

      <div className="h-[200px] relative">
        <div className="absolute w-[100%] max-w-[1340px] translate-x-[-50%] left-[50%] top-[-80px]">
          <div className="h-[100px] bg-white" />
          <div className="flex px-[70px] gap-[30px] justify-between">
            <div>
              <div className="text-[20px] font-bold">Our Mission</div>
              <p className="text-[40px] font-[600] max-w-[740px]">
                Icetea Solutions combines platform expertise, product thinking,
                and exceptional customer experiences to develop{" "}
                <span className="text-[40px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#2F34E1] to-[#DC52FF]">
                  high-performing agile software delivery capabilities
                </span>{" "}
                that propels your business.
              </p>
            </div>
            <ImageComponent
              className="w-[378px] min-w-[378px] h-[437px]"
              src="/images/home/earth_model.png"
              alt="earth model"
            />
          </div>
        </div>
      </div>

      <div className="home-bottom-banner h-[378px]" />
    </div>
  );
};

export default HomeBannerTop;
