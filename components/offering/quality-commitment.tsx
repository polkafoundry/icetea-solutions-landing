import { qualityCommitmentData } from "@/constants/offering";
import { QualityIcon } from "../svg/offering/quality-icon";
import { QualityCheckIcon } from "../svg/offering/quality-check-icon";

const QualityCommitment = () => {
  return (
    <div className="mt-[120px] bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] pt-[70px] pb-[90px]">
      <div className="max-w-[1440px] px-5 mx-auto grid grid-cols-3 gap-5 items-center">
        <div className="text-white">
          <div className="text-[60px] leading-[72px] font-bold">
            Quality Commitment
          </div>
          <div className="mt-5">
            Each enterprise is unique and requires specific software products to
            successfully function. Mor produces bespoke software and implements
            platform-based solutions for many industries.{" "}
          </div>
        </div>
        {qualityCommitmentData?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className="px-5 py-8 border border-black rounded-[24px] bg-white h-full"
            >
              <QualityIcon />
              <div className="text-[24px] leading-[30px] font-semibold text-[#0030C0] flex gap-2 mt-6">
                <div className="pt-1">
                  <QualityCheckIcon />
                </div>
                {data?.title}
              </div>
              <ul className="mt-3 list-disc pl-5 text-[#0030C0]">
                {data?.contents?.map((content: any, idx: number) => {
                  return <li key={idx}>{content}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualityCommitment;
