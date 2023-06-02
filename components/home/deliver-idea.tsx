import { deliverYourIdea } from "@/constants/home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatherIcon from "../svg/home/feather";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";

const DeliverIdea = () => {
  return (
    <div className="pt-[120px]">
      <div className="text-[48px] leading-[70px] text-[#0030C0] text-center font-semibold capitalize">
        Deliver your ideas to tech life
      </div>
      <div className="max-w-[1440px] px-5 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={48}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {deliverYourIdea?.map((value: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative pt-[60px] h-full">
                  <Image
                    src={value?.img}
                    className="w-full h-[333px]"
                    width={657}
                    height={501}
                    alt="icon"
                  />
                  <div
                    className="px-[30px] pb-[30px] pt-6"
                    style={{ boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)" }}
                  >
                    <div className="text-[20px] leading-[30px] text-[#0030C0] font-semibold capitalize">
                      {value?.title}
                    </div>
                    <div className="flex gap-1 justify-between items-center mt-6">
                      <div className="flex gap-1 items-center">
                        {value?.flag}
                        <div>{value?.position}</div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <FeatherIcon />
                        <div>{value?.tech}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="overflow-hidden">
        <button className="flex w-fit mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2 mx-auto">
          See more Project
          <AboutUsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DeliverIdea;
