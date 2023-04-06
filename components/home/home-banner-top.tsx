import HeaderComponent from "@/components/global/header";
import { ImageComponent } from "../global/image";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import { nextPath } from "@/constants";

const HomeBannerTop = () => {
  return (
    <div className="relative pb-[100px] md:pb-0">
      <div
        className={clsx(
          "relative home-top-banner h-[840px] flex flex-col text-white",
          "md:h-fit md:block"
        )}
      >
        <HeaderComponent />
        <div
          className={clsx(
            "flex relative justify-between items-center px-[20px] text-white",
            "md:px-[40px]",
            "xl:px-[100px]"
          )}
        >
          <ImageComponent
            src="/images/banner.png"
            className="hidden md:block w-full md:h-[7vw] xl:h-[6vw]"
            imageClass="object-cover md:object-contain"
            alt="banner"
          />
          <ImageComponent
            src="/images/banner_mobile.png"
            className="block md:hidden w-full h-[31vw]"
            imageClass="object-contain"
            alt="banner"
          />
          <Link
            href={
              "https://docs.google.com/forms/d/15k2L_1KEi6eVdW_P3TjMWt5R6JC7w0vN5k0hy_mDEi8/edit"
            }
            target={"_blank"}
          >
            <button
              className={clsx(
                "absolute w-full h-full left-0 top-0 md:top-[24%] bg-transparent text-transparent",
                "justify-center items-center font-sans font-semibold rounded-[100px] md:left-auto md:right-[15%] md:text-[14px]",
                "md:w-[16%] xl:w-[14%] md:h-[50%] xl:text-[16px] xl:right-[17%]",
                "md:bg-gradient-to-r flex flex-nowrap from-[#9F6DCA] to-[#1353F8] md:text-white"
              )}
            >
              Register here 🡒
            </button>
          </Link>
        </div>
        <h1
          className={clsx(
            "text-center text-[48px] leading-[60px] mt-[120px] px-5 font-[700]",
            "md:text-[58px] md:leading-[100px] md:mt-[80px]",
            "xl:text-[88px] xl:leading-[123px] xl:mt-[100px]"
          )}
        >
          Web3 Development Hub
        </h1>
        <h2 className="text-[20px] leading-[28px] md:text-[32px] md:leading-[40px] text-center font-[300]">
          One-Stop Digital Transformation Services
        </h2>
        <div className="text-[16px] md:text-[18px] md:flex px-5 md:px-0 gap-[12px] mt-[40px] justify-center">
          <Link href={`/${nextPath.CONTACT}`}>
            <button className="w-full md:w-fit px-[30px] py-[10px] rounded-[40px] bg-white text-black font-[600px] hover:scale-110 duration-500">
              Consult with us
            </button>
          </Link>
          <Link href={`/${nextPath.PORTFOLIO}`}>
            <button
              className={clsx(
                "w-full mt-[12px] justify-center px-[30px] py-[10px] flex flex-nowrap gap-[10px] items-center border-white border-[1px] rounded-[40px]",
                "md:w-fit md:mt-0 hover:scale-110 duration-500"
              )}
            >
              Our success stories
              <FaArrowRight fontSize={"14px"} />
            </button>
          </Link>
        </div>
        <div className="text-[12px] mt-auto pb-3 md:mt-[160px] xl:mt-[130px] font-[300] flex items-center gap-[6px] justify-center">
          Powered by
          <ImageComponent
            src={"/images/home/icetea_logo.svg"}
            className="w-[110px] h-[20px]"
            alt="logo"
          />
        </div>
      </div>

      <div className="md:h-[200px] relative">
        <div className="md:absolute w-[100%] max-w-[1340px] md:translate-x-[-50%] md:left-[50%] md:top-[-80px]">
          <div className="h-[80px] md:h-[140px] bg-transparent" />
          <div className="md:flex px-5 md:px-[70px] gap-[30px] justify-between">
            <div>
              <div className="text-[14px] uppercase text-center md:text-left md:text-[16px] xl:text-[20px] font-[700]">
                Our Mission
              </div>
              <p
                className={clsx(
                  "text-[28px] leading-[36px] font-[600] text-center max-w-[740px]",
                  "md:text-[30px] md:leading-[40px] md:text-left",
                  "xl:text-[40px] xl:leading-[50px]"
                )}
              >
                Icetea Software combines platform expertise, product thinking,
                and exceptional customer experiences to develop{" "}
                <span
                  className={clsx(
                    "text-[28px] leading-[36px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#2F34E1] to-[#DC52FF]",
                    "md:text-[30px] md:leading-[40px]",
                    "xl:text-[40px] xl:leading-[50px]"
                  )}
                >
                  high-performing agile software delivery capabilities
                </span>{" "}
                that propels your business.
              </p>
            </div>
            <ImageComponent
              className="w-full md:w-[283px] xl:w-[378px] md:min-w-[283px] xl:min-w-[378px] h-[300px] md:h-[327px] xl:h-[437px]"
              imageClass="object-contain"
              src="/images/home/earth_model.png"
              alt="earth model"
            />
          </div>
        </div>
      </div>

      <div className="absolute md:relative bottom-0 left-0 home-bottom-banner w-full h-[378px]" />
    </div>
  );
};

export default HomeBannerTop;
