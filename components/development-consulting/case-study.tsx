import { caseStudyData } from "@/constants/consulting";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import { Navigation } from "swiper";
import { ArrowSwiperNext, ArrowSwiperPrev } from "../svg/home/arrow-swiper";

const CaseStudy = () => {
  return (
    <div className="px-5">
      <div className="text-[35px] xl:text-[48px] xl:leading-[70px] text-center text-[#01289D] font-semibold mt-[120px] capitalize">
        Our case study
      </div>
      <div className="relative mt-10 max-w-[1400px] mx-auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {caseStudyData?.map((value: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative h-full rounded-[24px] overflow-hidden">
                  <Image
                    src={value?.img}
                    className="w-full h-[312px]"
                    width={657}
                    height={501}
                    alt="icon"
                  />
                  <div className="absolute bottom-[60px] left-0 px-[28px] text-white">
                    <div className="flex gap-2 text-[13px] leading-[23px] items-center">
                      Ngành
                      <div className="w-[5px] h-[5px] bg-[#D9D9D9] rounded-full" />{" "}
                      1 Mar 2023
                    </div>
                    <div className="text-[21px] leading-[27px] font-bold">
                      {value?.title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-button-prev absolute hidden lg:block lg:top-1/2 left-[-30px] cursor-pointer z-10">
          <ArrowSwiperPrev />
        </div>
        <div className="swiper-button-next absolute hidden lg:block lg:top-1/2 right-[-30px] cursor-pointer z-10">
          <ArrowSwiperNext />
        </div>
      </div>

      <div className="text-center">
        <button className="flex w-fit mt-12 mx-auto gap-2 text-white items-center btn-fill-gradient px-6 py-2">
          explore all projects
          <AboutUsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
