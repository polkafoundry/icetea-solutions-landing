import { softwareDevServiceContent } from "@/constants/expertise-industries";
import {
  AboutUsArrowRightBlue24,
  AboutUsArrowRightWhite24,
} from "../svg/expertise-industries/about-us-arrow-right";

const SoftwareDevService = () => {
  return (
    <div>
      <div className="mt-[120px] text-[48px] leading-[70px] font-semibold text-[#0030C0] text-center">
        Software Development Services
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 max-w-[1440px] px-5 mx-auto">
        {softwareDevServiceContent?.map((content: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col flex-1 p-8 border border-[#0083FF] rounded-[24px]"
            >
              <div className="flex flex-1 gap-[60px] text-[#0030C0] justify-between mb-8">
                <div>
                  <div className="text-[24px] leading-[30px] font-semibold">
                    {content?.title}
                  </div>
                  <ul className="text-[16px] leading-[32px] list-disc pl-5 mt-4">
                    {content?.contents?.map((data: any, idx: number) => {
                      return <li key={idx}>{data}</li>;
                    })}
                  </ul>
                </div>
                <div>{content?.img}</div>
              </div>
              <button className="btn-line-gradient w-fit group flex gap-1 text-[16px] leading-[23px] font-semibold px-6 py-2 capitalize">
                See more About us
                <AboutUsArrowRightBlue24 className="block group-hover:hidden" />
                <AboutUsArrowRightWhite24 className="hidden group-hover:block" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareDevService;
