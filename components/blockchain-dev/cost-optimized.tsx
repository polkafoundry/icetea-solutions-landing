import { costOptimizedData } from "@/constants/blogchain-dev";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import clsx from "clsx";
import {
  ArrowSwiperNextCore,
  ArrowSwiperNextCoreHover,
  ArrowSwiperNextPrevHover,
  ArrowSwiperPrevCore,
} from "../svg/home/arrow-swiper";
import { useState } from "react";

const CostOptimized = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="mt-[60px] text-[#0030C0] capitalize">
      <div className="text-[30px] sm:text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold text-center">
        Cost-optimizedblockchain solutions
      </div>
      <div className="max-w-[1440px] mt-[83px] px-5 mx-auto grid lg:flex gap-5 xl:gap-[100px] lg:justify-between">
        <div>
          <div className="pl-1">
            {costOptimizedData?.map((data: any, index: number) => {
              return (
                <div key={index} className="relative">
                  {activeIndex === index && (
                    <div className="absolute top-0 left-[-4px] w-[8px] h-full bg-[#0030C0] rounded-[24px]" />
                  )}
                  <div
                    className={clsx(
                      "xl:text-[24px] text-[16px] sm:text-[20px] leading-[40px] xl:leading-[53px] pl-4 lg:pl-[38px] border-l border-[#0083FF]",
                      activeIndex === index
                        ? "text-[#0030C0] font-semibold"
                        : "text-[#757575]"
                    )}
                  >{`0${index + 1}. ${data?.title}`}</div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center lg:justify-start mt-[26px] pb-8 gap-12 lg:pl-5 xl:pl-0">
            <div
              className={clsx(
                "swiper-button-prev group flex items-center justify-center lg:w-[72px] lg:h-[72px] rounded-full border border-[#0083FF]",
                "hover:bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] cursor-pointer select-none w-[65px] h-[65px]"
              )}
            >
              <ArrowSwiperPrevCore className="hidden group-hover:block" />
              <ArrowSwiperNextPrevHover className="block group-hover:hidden" />
            </div>
            <div
              className={clsx(
                "swiper-button-next group flex items-center justify-center lg:w-[72px] lg:h-[72px] rounded-full border border-[#0083FF]",
                "hover:bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] cursor-pointer select-none w-[65px] h-[65px]"
              )}
            >
              <ArrowSwiperNextCore className="hidden group-hover:block" />
              <ArrowSwiperNextCoreHover className="block group-hover:hidden" />
            </div>
          </div>
        </div>
        <div
          className="w-[580px] mx-auto xl:w-[783px]"
          style={{ maxWidth: "calc(100vw - 40px)" }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            effect={"fade"}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation, EffectFade]}
            className="mySwiper"
            onSlideChange={(e) => setActiveIndex(e?.activeIndex)}
          >
            {costOptimizedData?.map((data: any, index: number) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{ width: "100%", background: "#ffffff" }}
                >
                  <Image
                    src={data?.img}
                    className="w-full h-[300px] object-cover lg:h-[400px] xl:h-[521px] rounded-[24px]"
                    width={1266}
                    height={782}
                    priority
                    loading="eager"
                    alt="img"
                  />
                  <div className="text-[14px] xl:text-[16px] leading-[23px] text-center mt-4">
                    {data?.content}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CostOptimized;
