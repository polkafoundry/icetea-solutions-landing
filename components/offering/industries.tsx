import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";

const Industries = () => {
  return (
    <div className="mt-[120px] max-w-[1440px] px-5 mx-auto">
      <div className="flex gap-[100px] items-center text-[#0030C0]">
        <div className="max-w-[502px]">
          <div className="text-[48px] leading-[70px] font-semibold">
            Industries
          </div>
          <div className="mt-2">
            Each enterprise is unique and requires specific software products to
            successfully function. Icetea Software produces bespoke software and
            implements platform-based solutions for many industries.{" "}
          </div>
        </div>
        <div className="w-[789px]">
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
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {[...Array(3)].map((_, index: number) => {
              return (
                <SwiperSlide key={index} style={{ width: "fit-content" }}>
                  <div className="w-[475px] border-[#0083FF] border rounded-[35px] pt-5 pb-8 px-5 bg-white">
                    <Image
                      src="/images/home/health_care.png"
                      className="w-[341px] h-[331px] mx-auto"
                      width={361}
                      height={350}
                      alt="health"
                    />
                    <div className="text-[34px] leading-[49px] font-semibold mt-[38px] text-center">
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
