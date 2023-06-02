import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import clsx from "clsx";
import { ourValues } from "@/constants/expertise-industries";

const OurValue = () => {
  return (
    <div className="our-value relative mt-[120px]">
      <div className="relative pl-[433px] pb-9">
        <div className="absolute w-full bottom-0 left-0">
          <div></div>
          <div className="relative flex h-[366px] border-l border-y border-[#0083FF] rounded-l-[24px] items-end overflow-hidden">
            <div className="absolute w-[340px] h-[340px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#0083FF] rounded-full blur-[160px]" />
            <div className="text-[48px] leading-[70px] text-[#0030C0] pl-[38px] pb-[29px] max-w-[413px] font-semibold">
              Our value propositions
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ourValues?.map((value: any, index: number) => {
            return (
              <SwiperSlide key={index} style={{ width: "452px" }}>
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
                  <div className="text-[24px] leading-[30px] text-[#0030C0] font-semibold">
                    {value?.title}
                  </div>
                </div>
                <ul className="text-[#0030C0] text-[16px] leading-[23px] pl-10 list-disc">
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
      </div>
    </div>
  );
};

export default OurValue;
