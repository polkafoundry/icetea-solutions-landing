import { engineeringsData } from "@/constants/home";
import clsx from "clsx";

const OurEngineering = () => {
  return (
    <div className="pt-[120px]">
      <div className="text-[48px] leading-[70px] text-[#0030C0] text-center font-semibold capitalize">
        Our engineering tech stack
      </div>
      <div className="max-w-[1440px] px-5 mx-auto mt-12">
        {engineeringsData?.map((data: any, index: number) => {
          return (
            <div key={index} className="pl-3">
              <div className="relative pl-[47px]">
                <div className="absolute top-0 left-0 w-[24px] h-[24px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-full" />
                <div className="text-[24px] leading-[24px] font-semibold text-[#0030C0]">
                  {data?.title}
                </div>
              </div>
              <div className="pl-3">
                <div
                  className={clsx(
                    "grid grid-cols-8 gap-6 pt-[28px] pb-[36px] pl-[96px]",
                    index !== engineeringsData?.length - 1
                      ? "border-l border-[#0030C0]"
                      : ""
                  )}
                >
                  {data?.contents?.map((content: any, idx: number) => {
                    return (
                      <div key={index}>
                        <div className="flex w-full h-[140px] border items-center justify-center border-[#0083FF] rounded-[28px]">
                          {content?.component}
                        </div>
                        <div className="text-[16px] leading-[23px] text-[#0030C0] text-center mt-2">
                          {content?.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurEngineering;
