import { offeringContractTypes } from "@/constants";
import clsx from "clsx";
import { ContractTypeCheck } from "../svg/offering/contract-type-check";

const ContractType = () => {
  return (
    <div>
      <div className="xl:text-[48px] text-[35px] xl:leading-[70px] text-center text-[#01289D] font-semibold mt-[120px] capitalize">
        Contract Types
      </div>
      <div className="max-w-[1440px] px-5 mx-auto grid lg:grid-cols-2 gap-12 mt-[75px]">
        {offeringContractTypes?.map(
          (offeringContractType: any, index: number) => {
            return (
              <div
                key={index}
                className="relative px-[38px] pt-[59px] pb-[40px] border border-[#0083FF] rounded-[24px]"
              >
                <div
                  className={clsx(
                    "absolute w-full lg:w-[404px] top-[-26px] left-1/2 -translate-x-1/2 py-3 text-[16px] lg:text-[24px] lg:leading-[30px] font-semibold",
                    "text-white bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] rounded-[60px] text-center"
                  )}
                >
                  {offeringContractType?.title}
                </div>
                <div className="text-[#0030C0] text-[16px] leading-[23px] font-semibold">
                  {offeringContractType?.subTitle}
                </div>
                <div className="w-full h-[1px] my-8 bg-[#0083FF]" />
                <div className="grid gap-[18px]">
                  {offeringContractType?.contents?.map(
                    (data: any, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className="flex gap-[10px] text-[16px] leading-[23px] text-[#0030C0]"
                        >
                          <div className="min-w-[24px]">
                            <ContractTypeCheck />
                          </div>
                          {data}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ContractType;
