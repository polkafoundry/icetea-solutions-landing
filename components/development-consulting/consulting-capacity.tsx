import { mainContentConsultingData } from "@/constants/consulting";
import { CheckConsulting } from "../svg/insight/check-consulting";
import Image from "next/image";
import clsx from "clsx";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";

const ConsultingCapacity = () => {
  return (
    <div className="text-[#0030C0]">
      <div className="text-[48px] leading-[70px] text-center text-[#01289D] font-semibold mt-[60px] capitalize">
        Icetea Software Consulting capacity
      </div>
      <div className="max-w-[930px] mx-auto text-center text-[16px] leading-[32px] mt-3">
        Being ISO 9001 certified, we engineer high-quality software according to
        the client, staff, and regulatory requirements, continuously improving
        our development performance and increasing operational efficiency
      </div>
      <div className="max-w-[930px] mx-auto text-center text-[16px] leading-[32px] mt-3">
        As an ISO 27001-certified company, Yalantis delivers secure systems that
        comply with business, legal, contractual, and regulatory requirements,
        constantly enhancing our information security processes
      </div>
      <div className="max-w-[1440px] px-5 mx-auto">
        {mainContentConsultingData?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className="mt-[60px] grid grid-cols-2 gap-[200px] items-center"
            >
              <div className={clsx(index === 1 ? "order-last" : "")}>
                <div className="text-[32px] leading-[40px] font-semibold">
                  {data?.title}
                </div>
                <div className="text-[#0083FF] mt-2 mb-3">{data?.subTitle}</div>
                {data?.contents?.map((content: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="flex gap-3 mt-2 text-[20px] leading-[29px] font-semibold"
                    >
                      <CheckConsulting />
                      {content}
                    </div>
                  );
                })}
                <div className="text-left">
                  <button className="flex w-fit mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2">
                    See more about us
                    <AboutUsArrowRight />
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src={data?.img}
                  className="w-full h-[566px]"
                  width={872}
                  height={849}
                  alt="img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConsultingCapacity;
