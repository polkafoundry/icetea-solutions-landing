import { softwareDevServiceContent } from "@/constants/expertise-industries";
import {
  AboutUsArrowRightBlue24,
  AboutUsArrowRightWhite24,
} from "../svg/expertise-industries/about-us-arrow-right";
import Link from "next/link";
import { pathname } from "@/constants";

const SoftwareDevService = () => {
  return (
    <div>
      <div className="mt-[60px] xl:mt-[120px] px-5 text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold text-[#0030C0] text-center">
        Software Development Services
      </div>
      <div className="mt-6 xl:mt-12 grid lg:grid-cols-2 gap-6 max-w-[1440px] px-5 mx-auto capitalize">
        {softwareDevServiceContent?.map((content: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col flex-1 p-8 border border-[#0083FF] rounded-[24px]"
            >
              <div className="grid sm:flex flex-1 gap-[60px] text-[#0030C0] justify-between mb-8">
                <div className="order-last sm:order-first">
                  <div className="text-[20px] xl:text-[24px] xl:leading-[30px] font-semibold">
                    {content?.title}
                  </div>
                  <ul className="text-[14px] xl:text-[16px] xl:leading-[32px] list-disc pl-5 mt-4">
                    {content?.contents?.map((data: any, idx: number) => {
                      return <li key={idx}>{data}</li>;
                    })}
                  </ul>
                </div>
                <div>{content?.img}</div>
              </div>
              <Link href={`/${pathname?.ABOUTUS}`} className="w-fit">
                <button className="btn-line-gradient w-fit group flex gap-1 text-[16px] leading-[23px] font-semibold px-6 py-2 capitalize">
                  See more About us
                  <AboutUsArrowRightBlue24 className="block group-hover:hidden" />
                  <AboutUsArrowRightWhite24 className="hidden group-hover:block" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareDevService;
