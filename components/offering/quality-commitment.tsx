import { qualityCommitmentData } from "@/constants/offering";
import { QualityIcon } from "../svg/offering/quality-icon";
import { QualityCheckIcon } from "../svg/offering/quality-check-icon";

const QualityCommitment = () => {
  return (
    <div className="mt-[120px] bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] pt-[70px] pb-[90px]">
      <div className="max-w-[1440px] px-5 mx-auto grid lg:grid-cols-3 gap-5 items-center">
        <div className="text-white">
          <div className="text-[45px] xl:text-[60px] xl:leading-[72px] font-bold">
            Quality Commitment
          </div>
          <div className="mt-5 text-[14px] xl:text-[16px] capitalize">
            Each enterprise is unique and requires specific software products to
            successfully function. Icetea Software produces Bespoke solutions
            and implements platform-based solutions for many industries.
          </div>
        </div>
        {qualityCommitmentData?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className="px-5 py-8 border border-black rounded-[24px] bg-white h-full"
            >
              <QualityIcon />
              <div className="text-[20px] xl:text-[24px] xl:leading-[30px] font-semibold text-[#0030C0] flex gap-2 mt-6">
                <div className="pt-1 min-w-[22px]">
                  <QualityCheckIcon />
                </div>
                {data?.title}
              </div>
              {data?.contents && (
                <ul className="mt-3 text-[14px] xl:text-[16px] list-disc pl-5 text-[#0030C0]">
                  {data?.contents?.map((content: any, idx: number) => {
                    return <li key={idx}>{content}</li>;
                  })}
                </ul>
              )}
              {data?.mainContent && (
                <div className="mt-3 text-[14px] xl:text-[16px] font-semibold text-[#0030C0]">
                  {data?.mainContent}
                </div>
              )}
              {data?.mainContentList && (
                <ul className="mt-3 text-[14px] xl:text-[16px] list-disc pl-5 text-[#0030C0] capitalize">
                  {data?.mainContentList?.map((content: any, idx: number) => {
                    return (
                      <li key={idx}>
                        <span className="font-semibold">{`${content?.title} `}</span>
                        {content?.content}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualityCommitment;
