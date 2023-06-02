import { partnerAndClients } from "@/constants/home";
import Image from "next/image";

const PartnerAndClient = () => {
  return (
    <div className="pt-[120px]">
      <div className="text-[48px] leading-[70px] text-[#0030C0] text-center font-semibold capitalize">
        Partner and cilents
      </div>
      <div className="max-w-[1440px] px-5 mx-auto grid grid-cols-4 gap-6 mt-12">
        {partnerAndClients?.map((data: any, index: number) => {
          return (
            <div key={index}>
              <Image
                src={data}
                className="w-[335px] h-[104px]"
                width={503}
                height={106}
                alt="partner"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerAndClient;
