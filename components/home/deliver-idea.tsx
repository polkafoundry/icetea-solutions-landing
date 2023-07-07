import { deliverYourIdea } from "@/constants/home";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatherIcon from "../svg/home/feather";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import { Navigation } from "swiper";
import { ArrowSwiperNext, ArrowSwiperPrev } from "../svg/home/arrow-swiper";
import Model from "../global/model";
import { useState } from "react";
import Link from "next/link";
import { pathname } from "@/constants";

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
              slidesPerView: 4,
              spaceBetween: 32,
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
                  className="relative flex p-1 flex-col h-full cursor-pointer"
                  onClick={() => handleShowModel(index)}
                >
                  <div
                    style={{
                      boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
                    }}
                    className="p-10 h-[80vw] md:h-[208px] xl:h-[314px] flex items-center justify-center rounded-[12px]"
                  >
                    <Image
                      src={value?.img}
                      className="w-full auto"
                      width={657}
                      height={501}
                      alt="icon"
                    />
                  </div>
                  <div className="text-[20px] xl:text-[32px] font-semibold pt-3 xl:pt-6 text-[#0030C0] text-center">
                    {value?.title}
                  </div>
                  <div className="text-[14px] xl:text-[20px] text-[#0030C0] text-center">
                    {value?.tag}
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
        <Link href={`${pathname.SERVICE}/${pathname.BLOCKCHAINDEVELOPMENT}`}>
          <button className="flex w-fit mt-6 lg:mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2 mx-auto">
            See more Project
            <AboutUsArrowRight />
          </button>
        </Link>
      </div>
      <Model isOpen={isShow} handleClose={handleHide}>
        <div style={{ maxWidth: "980px", width: "calc(100vw - 80px)" }}>
          <div
            className="relative flex flex-col h-full max-h-[90vh] text-[#0030C0] py-5 pl-5 lg:py-10 lg:pl-10"
            onClick={() => handleShow()}
          >
            <div className="lg:max-h-[850px] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-3 gap-5 pr-5 py-4 lg:pr-10">
                <div>
                  <div className="flex h-[28vw] lg:h-[317px] p-10 items-center justify-center border-[#0083FF] border rounded-[12px]">
                    <Image
                      src={deliverYourIdea[indexSelect]?.img}
                      className="w-full auto"
                      width={657}
                      height={501}
                      alt="icon"
                    />
                  </div>
                  {!!deliverYourIdea[indexSelect]?.webImg &&
                    typeof deliverYourIdea[indexSelect]?.webImg !==
                      "undefined" && (
                      <div className="mt-5">
                        <Image
                          src={deliverYourIdea[indexSelect]?.webImg || ""}
                          className="w-full auto rounded-[2px]"
                          width={657}
                          height={501}
                          alt="icon"
                        />
                      </div>
                    )}
                </div>
                <div className="col-span-2 text-[#0030C0]">
                  <div className="flex gap-2 items-center flex-nowrap">
                    <span className="text-[30px] lg:text-[48px] font-semibold text-[#0030C0]">
                      {deliverYourIdea[indexSelect]?.title}
                    </span>
                    {deliverYourIdea[indexSelect]?.tag && (
                      <span className="text-[8px] lg:text-[12px] py-1 px-2 lg:px-4 bg-[#0030C0] rounded-[16px] text-white">
                        {deliverYourIdea[indexSelect]?.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 lg:mt-5 text-[18px] lg:text-[24px] font-semibold">
                    Business Goals
                  </div>
                  <div className="lg:text-[20px] mt-1 lg:mt-2">
                    {deliverYourIdea[indexSelect]?.businessGoals}
                  </div>
                  <div className="mt-3 lg:mt-5 text-[18px] lg:text-[24px] font-semibold">
                    Product Description
                  </div>
                  <div className="lg:text-[20px] mt-1 lg:mt-2">
                    {deliverYourIdea[indexSelect]?.productDescription}
                  </div>
                  {deliverYourIdea[indexSelect]?.productDescription2 && (
                    <div className="lg:text-[20px] mt-1 lg:mt-2">
                      {deliverYourIdea[indexSelect]?.productDescription2}
                    </div>
                  )}
                  {deliverYourIdea[indexSelect]?.productDescriptionList && (
                    <ul className="lg:text-[20px] mt-1 lg:mt-2 list-disc pl-5">
                      {deliverYourIdea[
                        indexSelect
                      ]?.productDescriptionList?.map(
                        (item: string, index: number) => {
                          return (
                            <li
                              className="lg:text-[20px] mt-1 lg:mt-2"
                              key={index}
                            >
                              {item}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}
                  {deliverYourIdea[indexSelect]?.uniqueSellingPoint && (
                    <>
                      <div className="mt-3 lg:mt-5 text-[18px] lg:text-[24px] font-semibold">
                        Unique Selling Points
                      </div>
                      <ul className="lg:text-[20px] mt-1 lg:mt-2 list-disc pl-5">
                        {deliverYourIdea[indexSelect]?.uniqueSellingPoint?.map(
                          (item: string, index: number) => {
                            return (
                              <li className="lg:text-[20px] mt-1 lg:mt-2" key={index}>
                                {item}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </>
                  )}
                  {deliverYourIdea[indexSelect]?.teams && (
                    <div className="flex text-[20px] mt-5 gap-2 items-end">
                      <span className="font-semibold text-[18px] lg:text-[24px] lg:leading-[26px]">
                        Team:{" "}
                      </span>
                      <span className="lg:leading-[22px] lg:text-[20px]">
                        {deliverYourIdea[indexSelect]?.teams}
                      </span>
                    </div>
                  )}
                  {deliverYourIdea[indexSelect]?.developmentTime && (
                    <div className="flex text-[20px] mt-5 gap-2 items-end">
                      <span className="font-semibold text-[18px] lg:text-[24px] lg:leading-[26px]">
                        Development Time:{" "}
                      </span>
                      <span className="lg:leading-[22px] lg:text-[20px]">
                        {deliverYourIdea[indexSelect]?.developmentTime}
                      </span>
                    </div>
                  )}
                  <div className="mt-3 lg:mt-5 text-[18px] lg:text-[24px] font-semibold">
                    Development Scope
                  </div>
                  <div className="lg:text-[20px] mt-1 lg:mt-2">
                    {deliverYourIdea[indexSelect]?.developmentScope}
                  </div>
                  <div className="mt-3 lg:mt-5 text-[18px] lg:text-[24px] font-semibold">
                    Applied Technologies
                  </div>
                  <div className="lg:text-[20px] mt-1 lg:mt-2">
                    {deliverYourIdea[indexSelect]?.appliedTechnologies}
                  </div>
                  {deliverYourIdea[indexSelect]?.url && (
                    <Link
                      href={deliverYourIdea[indexSelect]?.url || ""}
                      target={"_blank"}
                    >
                      <div className="w-fit mt-5 py-2 text-[12px] lg:text-[20px] px-6 border border-[#0030C0] rounded-[24px]">
                        {deliverYourIdea[indexSelect]?.url}
                      </div>
                    </Link>
                  )}
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
