import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import clsx from "clsx";
import { ourValues } from "@/constants/expertise-industries";
import {
  ArrowSwiperNextCore,
  ArrowSwiperNextCoreHover,
  ArrowSwiperNextPrevHover,
  ArrowSwiperPrevCore,
} from "../svg/home/arrow-swiper";

const OurValue = () => {
  return (
    <div className="our-value relative mt-[60px] xl:mt-[120px]">
      <div className="relative px-5 lg:pl-[300px] xl:pl-[433px] pb-3 xl:pb-9">
        <div className="lg:absolute w-full bottom-0 left-0">
          <div className="hidden lg:flex pb-8 gap-12 pl-5 xl:pl-0">
            <div
              className={clsx(
                "swiper-button-prev group flex items-center justify-center w-[72px] h-[72px] rounded-full border border-[#0083FF]",
                "hover:bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] cursor-pointer"
              )}
            >
              <ArrowSwiperPrevCore className="hidden group-hover:block" />
              <ArrowSwiperNextPrevHover className="block group-hover:hidden" />
            </div>
            <div
              className={clsx(
                "swiper-button-next group flex items-center justify-center w-[72px] h-[72px] rounded-full border border-[#0083FF]",
                "hover:bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] cursor-pointer"
              )}
            >
              <ArrowSwiperNextCore className="hidden group-hover:block" />
              <ArrowSwiperNextCoreHover className="block group-hover:hidden" />
            </div>
          </div>
          <div className="relative lg:flex lg:h-[366px] lg:border-l lg:border-y border-[#0083FF] rounded-l-[24px] items-end overflow-hidden">
            <div className="hidden lg:block absolute w-[340px] h-[340px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#0083FF] rounded-full blur-[160px]" />
            <div className="text-[35px] xl:text-[48px] xl:leading-[70px] text-[#0030C0] lg:pl-[38px] pb-[29px] text-center lg:text-left lg:max-w-[413px] font-semibold">
              Our value propositions
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {ourValues?.map((value: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                style={{ width: "100%", maxWidth: "452px" }}
              >
                <div className="w-full">
                  <Image
                    src={value?.img}
                    className="rounded-[16px]"
                    width={452}
                    height={246}
                    alt="our value"
                  />
                </div>
                <div className="mt-6 flex gap-3">
                  <div
                    className={clsx(
                      "bg-gradient-to-t from-[#C1E1FF] via-[#0083FF] to-[#01289D] w-[32px] h-[32px] rounded-full",
                      "flex items-center justify-center text-white text-[18px] leading-[26px] font-semibold"
                    )}
                  >{`0${index + 1}`}</div>
                  <div className="text-[20px] xl:text-[24px] xl:leading-[30px] text-[#0030C0] font-semibold">
                    {value?.title}
                  </div>
                </div>
                <ul className="text-[#0030C0] text-[14px] xl:text-[16px] xl:leading-[23px] pl-10 capitalize">
                  {value?.contents?.map((content: any, idx: number) => {
                    return (
                      <li key={idx} className="mt-2">
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex lg:hidden mt-5 justify-center pb-8 gap-12 pl-5 xl:pl-0">
          <div
            className={clsx(
              "swiper-button-prev group flex items-center justify-center w-[60px] h-[60px] rounded-full border border-[#0083FF]",
              "hover:bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] cursor-pointer"
            )}
          >
            <ArrowSwiperPrevCore className="hidden group-hover:block" />
            <ArrowSwiperNextPrevHover className="block group-hover:hidden" />
          </div>
          <div
            className={clsx(
              "swiper-button-next group flex items-center justify-center w-[60px] h-[60px] rounded-full border border-[#0083FF]",
              "hover:bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] cursor-pointer"
            )}
          >
            <ArrowSwiperNextCore className="hidden group-hover:block" />
            <ArrowSwiperNextCoreHover className="block group-hover:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
