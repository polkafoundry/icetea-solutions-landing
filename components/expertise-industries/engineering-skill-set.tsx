import { engineeringSkillSetContent } from "@/constants/expertise-industries";
import clsx from "clsx";

const EngineeringSkillSet = () => {
  return (
    <div className="text-[#0030C0] px-5">
      <div className="mt-[60px] xl:mt-[120px] text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold text-[#0030C0] text-center">
        Engineering Skill Sets
      </div>
      <div className="max-w-[760px] mx-auto text-[14px] xl:text-[16px] xl:leading-[23px] mt-2 text-center capitalize">
        It takes great skills and knowledge to develop software. Anyone who has
        ever created a technology solution understands how the right choice of
        the stack is important. Here you can see a list of programming
        languages, frameworks, databases, and platforms our IT
      </div>
      <div
        className={clsx(
          "max-w-[1440px] mx-auto mt-[38px] border border-[#0083FF] rounded-[24px] py-[35px] xl:flex",
          "grid grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-5 lg:gap-0"
        )}
      >
        {engineeringSkillSetContent?.map((content: any, index: number) => {
          return (
            <div
              key={index}
              className={clsx(
                "px-5 xl:px-[70px] border-[#0030C0]",
                index >= engineeringSkillSetContent?.length - 1
                  ? ""
                  : "xl:border-r"
              )}
            >
              <div className="text-[20px] lg:text-[24px] lg:leading-[30px] font-semibold">
                {content?.title}
              </div>
              {content?.contents?.map((data: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="text-[16px] lg:text-[20px] lg:leading-[29px] mt-1 lg:mt-4"
                  >
                    {data}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EngineeringSkillSet;
