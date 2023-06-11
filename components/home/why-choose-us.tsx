import { whyChooseContents } from "@/constants/home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import clsx from "clsx";
import { ArrowSwiperNext, ArrowSwiperPrev } from "../svg/home/arrow-swiper";
import { Navigation } from "swiper";
import Link from "next/link";
import { pathname } from "@/constants";

const WhyChooseUs = () => {
  return (
    <div className="pt-[60px] xl:pt-[120px]">
      <div className="text-center text-[35px] leading-[50px] xl:text-[48px] xl:leading-[70px] text-[#01289D] font-semibold capitalize">
        Why Choose us
      </div>
      <div className="max-w-[843px] text-[14px] xl:text-[16px] mx-auto text-center text-[#01289D]">
        Icetea Software is a new subsidiary company of Icetea Labs, one of the
        leading software outsourcing companies based in Hanoi, Vietnam. With
        dedicated talents and a rigorous process, we confidently provide
        international-standard IT services and solutions.
      </div>
      <div className="relative max-w-[1000px] xl:max-w-[1576px] px-5 mx-auto mt-12">
        <div className="max-w-[1400px] mx-auto">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={24}
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
            {whyChooseContents?.map((value: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative pt-[40px] xl:pt-[60px] h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <Image
                        src={value?.img}
                        className="w-[80px] h-[85px] xl:w-[110px] xl:h-[120px]"
                        width={156}
                        height={176}
                        alt="icon"
                      />
                    </div>
                    <div
                      className={clsx(
                        "pt-[60px] xl:pt-[85px] px-6 pb-10 border border-[#0083FF] rounded-[24px] h-full",
                        "hover:bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] group"
                      )}
                    >
                      <div className="xl:text-[24px] text-[20px] leading-[23px] xl:leading-[35px] text-[#0030C0] group-hover:text-white font-semibold">
                        {value?.title}
                      </div>
                      <div className="xl:text-[16px] text-[14px] xl:leading-[23px] text-[#0030C0] group-hover:text-white mt-1 xl:mt-3 capitalize">
                        {value?.content}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-prev absolute hidden lg:block lg:top-1/2 cursor-pointer left-0">
            <ArrowSwiperPrev />
          </div>
          <div className="swiper-button-next absolute hidden lg:block lg:top-1/2 cursor-pointer right-0">
            <ArrowSwiperNext />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Link href={`/${pathname?.ABOUTUS}`}>
          <button className="flex w-fit mt-6 xl:mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2 mx-auto">
            See more about us
            <AboutUsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUs;
