import { homeDevelopments } from "@/constants/home";
import clsx from "clsx";
import Image from "next/image";

const BannerHome = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-full h-fit top-0 left-0 z-0">
        <Image
          src="/images/home/banner.png"
          className="w-full min-w-[768px] lg:min-w-full"
          width={1920}
          height={869}
          priority
          alt="banner background"
        />
      </div>
      <div className="relative z-[1] text-white pt-20 lg:pt-[100px] xl:pt-[123px] text-center px-5 max-w-[1040px] xl:max-w-[1440px] mx-auto">
        <h1 className="text-[30px] lg:text-[50px] lg:leading-[60px] xl:text-[80px] xl:leading-[90px] font-semibold uppercase">
          Deliver bespoke solutions
        </h1>
        <h2 className="text-[20px] lg:text-[40px] xl:text-[70px] lg:leading-[50px] xl:leading-[80px] uppercase font-[300]">
          with expertise
        </h2>
        <button className="btn-fill-white text-[14px] lg:text-[16px] lg:leading-[23px] xl:text-[24px] xl:leading-[31px] font-semibold px-6 py-2 mt-2 lg:mt-5 uppercase">
          start your idea now
        </button>
        <div className="mt-[50px] xl:mt-[123px] grid lg:grid-cols-4 gap-5">
          {homeDevelopments?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]"
              >
                <div
                  className={clsx(
                    "px-1 h-[60px] xl:h-[80px] flex items-center justify-center bg-white rounded-t-[24px]",
                    "text-[#01168D] uppercase text-[16px] leading-[23px] xl:text-[20px] xl:leading-[28px] font-semibold"
                  )}
                >
                  {item?.title}
                </div>
                <div className="py-2 xl:py-5 px-2">
                  <ul className="list-disc text-left pl-5 xl:text-[16px] text-[14px]">
                    {item?.contents?.map((content: any, idx: number) => {
                      return (
                        <li key={idx} className="mb-2">
                          {content}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
