import { deliverYourIdea } from "@/constants/home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatherIcon from "../svg/home/feather";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import { Navigation } from "swiper";
import { ArrowSwiperNext, ArrowSwiperPrev } from "../svg/home/arrow-swiper";
import Model from "../global/model";
import { useState } from "react";

interface Props {
  title: string;
}

const DeliverIdea = ({ title }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [indexSelect, setIndexSelect] = useState<number>(0);

  const handleShow = () => setIsShow(true);
  const handleHide = () => setIsShow(false);

  const handleShowModel = (index: number) => {
    setIndexSelect(index);
    handleShow();
  };

  return (
    <div className="pt-[60px] xl:pt-[120px]">
      <div className="text-[35px] leading-[50px] xl:text-[48px] xl:leading-[70px] text-[#0030C0] text-center font-semibold capitalize">
        {title}
      </div>
      <div className="relative max-w-[1000px] xl:max-w-[1440px] px-5 mx-auto pt-[30px] xl:pt-[60px]">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 48,
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
          {deliverYourIdea?.map((value: any, index: number) => {
            return (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="relative flex flex-col h-full cursor-pointer"
                  onClick={() => handleShowModel(index)}
                >
                  <Image
                    src={value?.img}
                    className="w-full hl-[200px] xl:h-[333px]"
                    width={657}
                    height={501}
                    alt="icon"
                  />
                  <div
                    className="p-5 xl:px-[30px] flex flex-col flex-1 xl:pb-[30px] xl:pt-6"
                    style={{ boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)" }}
                  >
                    <div className="xl:text-[20px] flex-1 text-[18px] xl:leading-[30px] text-[#0030C0] font-semibold capitalize">
                      {value?.title}
                    </div>
                    <div className="flex gap-1 justify-between items-center mt-3 xl:mt-6">
                      <div className="flex gap-1 items-center">
                        {value?.flag}
                        <div className="text-[12px] xl:text-[16px] text-[#0030C0]">
                          {value?.position}
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <FeatherIcon />
                        <div className="text-[12px] xl:text-[16px] text-[#0030C0]">
                          {value?.tech}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-button-prev absolute hidden lg:block lg:top-[40%] cursor-pointer left-[-20px]">
          <ArrowSwiperPrev />
        </div>
        <div className="swiper-button-next absolute hidden lg:block lg:top-[40%] cursor-pointer right-[-20px]">
          <ArrowSwiperNext />
        </div>
      </div>
      <div className="overflow-hidden">
        <button className="flex w-fit mt-6 lg:mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2 mx-auto">
          See more Project
          <AboutUsArrowRight />
        </button>
      </div>
      <Model isOpen={isShow} handleClose={handleHide}>
        <div style={{ maxWidth: "510px", width: "calc(100vw - 80px)" }}>
          <div
            className="relative flex flex-col h-full text-[#0030C0]"
            onClick={() => handleShow()}
          >
            <Image
              src={deliverYourIdea[indexSelect]?.img}
              className="w-full hl-[200px] xl:h-[333px] rounded-[24px]"
              width={657}
              height={501}
              alt="icon"
            />
            <div className="relative my-5 flex flex-col flex-1">
              <div className="w-[1px] h-full bg-[#0030C0] absolute top-0 right-[2px]" />
              <div className="lg:text-[34px] flex-1 text-[20px] lg:leading-[34px] font-semibold capitalize">
                {deliverYourIdea[indexSelect]?.title}
              </div>
              <div className="flex gap-5 items-center mt-3 xl:mt-6">
                <div className="flex gap-1 items-center">
                  {deliverYourIdea[indexSelect]?.flag}
                  <div className="text-[12px] xl:text-[16px] font-semibold">
                    {deliverYourIdea[indexSelect]?.position}
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <FeatherIcon />
                  <div className="text-[12px] xl:text-[16px] font-semibold">
                    {deliverYourIdea[indexSelect]?.tech}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-[14px] lg:text-[16px] max-h-[170px] overflow-auto custom-scrollbar">
                <div className="pr-0 lg:pr-5">
                  Lorem ipsum dolor sit amet. At voluptas recusandae eos
                  laudantium corporis sed quisquam earum. Qui galisum
                  dignissimos non animi iste est dicta laborum sed adipisci
                  voluptatem et modi commodi 33 nihil delectus et molestias
                  omnis. Eum similique ipsam aut molestiae explicabo aut dolor
                  iusto est rerum nisi in aliquid voluptas aut eligendi vitae.
                  33 aliquam optio et dolor eaque aut nemo quia At eaque ipsa
                  eos quibusdam quos. Ea atque veritatis rem nihil sint ea quas
                  cupiditate! Non dignissimos sint et omnis eius et dignissimos
                  dolores 33 dolores placeat? Ea aliquam temporibus hic ipsa
                  debitis sed eligendi rerum. Aut dolores doloremque ut dolorum
                  commodi ea galisum maxime et numquam enim nam quia adipisci
                  nam corporis odio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Model>
    </div>
  );
};

export default DeliverIdea;
