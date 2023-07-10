import { engineeringsData } from "@/constants/home";
import clsx from "clsx";

const OurEngineering = () => {
  return (
    <div className="xl:pt-[120px] mt-[60px]">
      <div className="text-[35px] leading-[50px] xl:text-[48px] xl:leading-[70px] text-[#0030C0] text-center font-semibold capitalize">
        Our engineering tech stack
      </div>
      <div className="max-w-[1000px] xl:max-w-[1440px] px-5 mx-auto mt-6 xl:mt-12">
        {engineeringsData?.map((data: any, index: number) => {
          return (
            <div key={index} className="lg:pl-3">
              <div className="relative pl-8 xl:pl-[47px]">
                <div className="absolute top-0 left-0 w-[24px] h-[24px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-full" />
                <div className="xl:text-[24px] text-[20px] xl:leading-[24px] font-semibold text-[#0030C0]">
                  {data?.title}
                </div>
              </div>
              <div className="lg:pl-3">
                <div
                  className={clsx(
                    "flex flex-wrap lg:grid lg:grid-cols-5 xl:grid xl:grid-cols-8 gap-6 pt-4 pb-4 lg:pl-4 xl:pt-[28px] xl:pb-[36px] xl:pl-[96px]",
                    index !== engineeringsData?.length - 1
                      ? "lg:border-l border-[#0030C0]"
                      : "",
                    "justify-center lg:justify-start"
                  )}
                >
                  {data?.contents?.map((content: any, idx: number) => {
                    return (
                      <div key={idx}>
                        <div className="flex w-[135px] lg:w-full h-[135px] lg:h-[140px] border items-center justify-center border-[#0083FF] rounded-[28px]">
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
