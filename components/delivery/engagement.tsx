import { engagementsData } from "@/constants/delivery";
import clsx from "clsx";

const Engagement = () => {
  return (
    <div className="mt-[120px] max-w-[1400px] mx-auto p-10 border border-[#0083FF] rounded-[24px] text-[#0030C0]">
      <div className="text-[48px] leading-[70px] font-semibold text-center">
        Engagement Models
      </div>
      <div className="text-[16px] leading-[23px] mt-2 max-w-[736px] mx-auto text-center">
        We offer 02 main cooperation types for Our Clients, including Offshore
        Development Centre (ODC) and Project-based, depending on specific
        requirements.
      </div>
      <div className="mt-12 mb-3">
        <div className="flex">
          <div className="w-[240px] min-w-[240px]"></div>
          <div className="w-full pr-[80px]">
            <div
              className={clsx(
                "w-full bg-gradient-to-b from-[#61B2FF] py-3 text-center rounded-[120px] text-[20px] leading-[29px]",
                "font-semibold text-white via-[#0083FF] to-[#01289D]"
              )}
            >
              Offshore Development Centre (ODC)
            </div>
          </div>
          <div className="w-full pr-[80px]">
            <div
              className={clsx(
                "w-full bg-gradient-to-b from-[#61B2FF] py-3 text-center rounded-[120px] text-[20px] leading-[29px]",
                "font-semibold text-white via-[#0083FF] to-[#01289D]"
              )}
            >
              Project - Based Contract
            </div>
          </div>
        </div>
      </div>
      {engagementsData?.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className={clsx("py-9", !!index ? "border-t border-[#0030C0]" : "")}
          >
            <div className="flex">
              <div className="w-[240px] min-w-[240px] text-[24px] leading-[30px] font-semibold">
                {data?.title}
              </div>
              <div className="w-full pr-[80px]">
                <ul className="list-disc pl-5 text-[20px] leading-[29px]">
                  {data?.offshore?.map((offshore: any, idx: number) => {
                    return (
                      <li key={idx} className="text-[20px] leading-[29px]">
                        {offshore}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full pr-[80px]">
                <ul className="list-disc pl-5 text-[20px] leading-[29px]">
                  {data?.project?.map((project: any, idx: number) => {
                    return (
                      <li key={idx} className="text-[20px] leading-[29px]">
                        {project}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Engagement;
