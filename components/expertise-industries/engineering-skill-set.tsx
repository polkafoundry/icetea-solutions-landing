import { engineeringSkillSetContent } from "@/constants/expertise-industries";
import clsx from "clsx";

const EngineeringSkillSet = () => {
  return (
    <div className="text-[#0030C0]">
      <div className="mt-[120px] text-[48px] leading-[70px] font-semibold text-[#0030C0] text-center">
        Engineering Skill Sets
      </div>
      <div className="max-w-[1150px] mx-auto text-[16px] leading-[23px] mt-2 text-center">
        It takes great skills and knowledge to develop software. Anyone who has
        ever created a technology solution understands how the right choice of
        the stack is important. Here you can see a list of programming
        languages, frameworks, databases, and platforms our IT
      </div>
      <div className="max-w-[1440px] mx-auto mt-[38px] border border-[#0083FF] rounded-[24px] py-[35px] flex">
        {engineeringSkillSetContent?.map((content: any, index: number) => {
          return (
            <div
              key={index}
              className={clsx(
                "px-[70px] border-[#0030C0]",
                index >= engineeringSkillSetContent?.length - 1
                  ? ""
                  : "border-r"
              )}
            >
              <div className="text-[24px] leading-[30px] font-semibold">
                {content?.title}
              </div>
              {content?.contents?.map((data: any, idx: number) => {
                return (
                  <div key={idx} className="text-[20px] leading-[29px] mt-4">
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
