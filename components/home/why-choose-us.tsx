import { whyChooseContents } from "@/constants/home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";

const WhyChooseUs = () => {
  return (
    <div className="pt-[120px]">
      <div className="text-center text-[48px] leading-[70px] text-[#01289D] font-semibold capitalize">
        Why Choose us
      </div>
      <div className="max-w-[843px] mx-auto text-center text-[#01289D]">
        Icetea Software is a new subsidiary company of Icetea Labs, one of the
        leading software outsourcing companies based in Hanoi, Vietnam. With
        dedicated talents and a rigorous process, we confidently provide
        international-standard IT services and solutions.
      </div>
      <div className="max-w-[1576px] mx-auto mt-12">
        <div className="max-w-[1400px] mx-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {whyChooseContents?.map((value: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative pt-[60px] h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <Image
                        src={value?.img}
                        className="w-[110px] h-[120px]"
                        width={156}
                        height={176}
                        alt="icon"
                      />
                    </div>
                    <div className="pt-[85px] px-6 pb-10 border border-[#0083FF] rounded-[24px] h-full">
                      <div className="text-[24px] leading-[35px] text-[#0030C0] font-semibold">
                        {value?.title}
                      </div>
                      <div className="text-[16px] leading-[23px] text-[#0030C0] mt-3">
                        {value?.content}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="overflow-hidden">
        <button className="flex w-fit mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2 mx-auto">
          See more about us
          <AboutUsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
