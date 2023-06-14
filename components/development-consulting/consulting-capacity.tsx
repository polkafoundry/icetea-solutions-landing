import { mainContentConsultingData } from "@/constants/consulting";
import { CheckConsulting } from "../svg/insight/check-consulting";
import Image from "next/image";
import clsx from "clsx";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import Link from "next/link";
import { pathname } from "@/constants";

const ConsultingCapacity = () => {
  return (
    <div className="text-[#0030C0]">
      <div className="text-[30px] xl:text-[48px] xl:leading-[70px] text-center text-[#01289D] font-semibold mt-8 xl:mt-[60px] capitalize">
        Icetea Software Consulting capacity
      </div>
      <div className="max-w-[930px] mx-auto text-center text-[14px] xl:text-[16px] xl:leading-[32px] mt-3">
        Being ISO 9001 certified, we design and build high-quality software
        based on clients&apos; needs and regulatory requirements, continuously
        improve our development performance and increase operational efficiency.
      </div>
      <div className="max-w-[930px] mx-auto text-center text-[14px] xl:text-[16px] xl:leading-[32px] mt-3">
        As an ISO 27001-certified company, Icetea Software delivers secure
        systems that comply with business, legal, contractual, and regulatory
        requirements, constantly enhancing our information security processes.
      </div>
      <div className="max-w-[1440px] px-5 mx-auto">
        {mainContentConsultingData?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className="mt-[60px] grid lg:grid-cols-2 gap-5 lg:gap-[100px] xl:gap-[200px] items-center capitalize"
            >
              <div className={clsx(index === 1 ? "lg:order-last" : "")}>
                <div className="text-[24px] xl:text-[32px] xl:leading-[40px] font-semibold">
                  {data?.title}
                </div>
                <div className="text-[#0083FF] text-[14px] xl:text-[16px] mt-2 mb-3">
                  {data?.subTitle}
                </div>
                {data?.contents?.map((content: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="flex gap-3 mt-2 text-[16px] xl:text-[20px] xl:leading-[29px] font-semibold"
                    >
                      <div className="min-w-[22px]">
                        <CheckConsulting />
                      </div>
                      {content}
                    </div>
                  );
                })}
                <div className="text-left">
                  <button className="flex w-fit mt-12 gap-2 text-white items-center btn-fill-gradient px-6 py-2">
                    <Link href={`/${pathname?.ABOUTUS}`} className="w-fit flex gap-2">
                      See more about us
                      <AboutUsArrowRight />
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src={data?.img}
                  className="w-full h-auto lg:h-[500px] xl:h-[566px]"
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
