import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Image from "next/image";
import {
  ArrowSwiperNextCore,
  ArrowSwiperNextCoreHover,
  ArrowSwiperNextPrevHover,
  ArrowSwiperPrevCore,
} from "../svg/home/arrow-swiper";
import clsx from "clsx";

const Industries = () => {
  return (
    <div className="mt-[120px] max-w-[1440px] px-5 mx-auto">
      <div className="grid lg:flex gap-5 xl:gap-[100px] items-center text-[#0030C0]">
        <div className="max-w-[502px] mx-auto lg:mx-0 text-center lg:text-left">
          <div className="text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold">
            Industries
          </div>
          <div className="mt-2 text-[14px] xl:text-[16px] capitalize">
            Each enterprise is unique and requires specific software products to
            successfully function.
            <br /> Icetea Software produces bespoke software and implements
            platform-based solutions for many industries.
          </div>
          <div className="hidden lg:flex pt-8 gap-12">
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
        </div>
        <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[789px] mx-auto lg:mx-0">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 61,
              depth: 300,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {[...Array(3)].map((_, index: number) => {
              return (
                <SwiperSlide key={index} style={{ width: "fit-content" }}>
                  <div className="w-[300px] sm:w-[475px] border-[#0083FF] border rounded-[35px] pt-5 pb-8 px-5 bg-white">
                    <Image
                      src="/images/home/health_care.png"
                      className="w-[200px] h-[200px] md:w-[341px] md:h-[331px] mx-auto"
                      width={361}
                      height={350}
                      alt="health"
                    />
                    <div className="text-[20px] md:text-[28px] xl:text-[34px] xl:leading-[49px] font-semibold mt-[38px] text-center">
                      Health Care
                    </div>
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

export default Industries;
