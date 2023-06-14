import { ITServiceOffering } from "@/constants";
import {
  OfferingArrowRightFill,
  OfferingArrowRightWhite,
} from "../svg/offering/arrow-right";

export const ITSServices = () => {
  return (
    <div>
      <div className="max-w-[1440px] px-5 mt-[60px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 xl:gap-y-[72px]">
        {ITServiceOffering?.map((service: any, index: number) => {
          return (
            <div key={index} className="relative h-full group">
              <div className="px-4 h-full pt-5 pb-10 border border-[#0083FF] rounded-[24px] text-[#0030C0]">
                <div className="w-fit mx-auto">{service?.img}</div>
                <div className="mt-3 text-[20px] xl:text-[24px] xl:leading-[30px] font-semibold text-center">
                  {service?.title}
                </div>
                <div className="mt-3 text-[14px] xl:text-[16px] xl:leading-[23px] text-center capitalize">
                  {service?.content}
                </div>
              </div>
              <div className="absolute w-fit h-fit left-1/2 -translate-x-1/2 bottom-[-24px] block group-hover:hidden">
                <OfferingArrowRightWhite />
              </div>
              <div className="absolute w-fit h-fit left-1/2 -translate-x-1/2 bottom-[-24px] hidden group-hover:block">
                <OfferingArrowRightFill />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ITSServices;
