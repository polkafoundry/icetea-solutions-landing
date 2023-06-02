import { compentenciesContent } from "@/constants/expertise-industries";

const Compentencies = () => {
  return (
    <div className="mt-[120px] bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D]">
      <div className="max-w-[1440px] px-5 mx-auto py-[56px] text-white">
        <div className="text-[24px] leading-[31px] font-semibold">
          ICETEA software
        </div>
        <div className="text-[48px] leading-[70px] font-semibold">
          Compentencies
        </div>
        <div className="mt-[36px] flex">
          <div className="pr-[60px] border-r border-white">
            <div className="text-[72px] leading-[105px] font-semibold">
              127%
            </div>
            <div className="text-[24px] leading-[30px] font-semibold">
              Annual company growth
            </div>
          </div>
          <div className="px-[60px] border-r border-white">
            <div className="text-[72px] leading-[105px] font-semibold">
              120+
            </div>
            <div className="text-[24px] leading-[30px] font-semibold">
              Software engineers
            </div>
          </div>
          <div className="px-[60px] border-r border-white">
            <div className="text-[72px] leading-[105px] font-semibold">73%</div>
            <div className="text-[24px] leading-[30px] font-semibold">
              Customer retention rate
            </div>
          </div>
          <div className="pl-[60px]">
            <div className="text-[72px] leading-[105px] font-semibold">
              150+
            </div>
            <div className="text-[24px] leading-[30px] font-semibold">
              project
            </div>
          </div>
        </div>
        <div className="mt-[120px] text-[48px] leading-[70px] font-semibold">
          Next Gen Technology Development Services
        </div>
        <div className="grid grid-cols-4 gap-[60px] mt-[60px]">
          {compentenciesContent?.map((content: any, index: number) => {
            return (
              <div key={index}>
                <div className="w-fit mx-auto">{content?.img}</div>
                <div className="mt-[60px] text-[24px] leading-[30px] font-semibold">
                  {content?.title}
                </div>
                <ul className="mt-[48px] text-[16px] leading-[32px] list-disc pl-5">
                  {content?.contents?.map((data: any, idx: number) => {
                    return <li key={idx}>{data}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Compentencies;
