import { deliveryModelsData } from "@/constants/delivery";
import clsx from "clsx";
import Image from "next/image";

const DeliveryModels = () => {
  return (
    <div className="pt-[60px]">
      <div className="grid gap-[60px] max-w-[1440px] px-5 mx-auto">
        {deliveryModelsData?.map((data: any, index: number) => {
          return (
            <div key={index} className="grid grid-cols-2 gap-5 items-center">
              <div
                className={clsx(
                  "text-[#0030C0]",
                  index === 1 ? "order-last pl-[100px]" : ""
                )}
              >
                <div className="text-[48px] leading-[70px] font-semibold">
                  {data?.title}
                </div>
                <div className="text-[16px] leading-[23px] max-w-[469px]">
                  {data?.subTitle}
                </div>
                <ul className="mt-[24px] list-disc pl-5 text-[20px] leading-[29px] font-semibold max-w-[567px]">
                  {data?.contents?.map((content: any, idx: number) => {
                    return (
                      <li key={idx} className="font-semibold">
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="p-6 border border-[#0083FF] rounded-[24px]">
                <div>
                  <Image
                    src={data?.imgPreview}
                    width={636}
                    height={172}
                    alt={data?.title}
                  />
                </div>
                <div className="flex gap-5 capitalize pt-8 text-[24px] leading-[30px] text-[#0030C0]">
                  <div className="w-full font-semibold">assignments</div>
                  <div className="w-[130px] min-w-[130px] text-center font-semibold">
                    customer
                  </div>
                  <div className="w-[120px] min-w-[120px] text-center font-semibold">
                    offshore
                  </div>
                </div>
                {data?.assignments?.map((assignment: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="flex gap-5 capitalize pt-6 text-[20px] leading-[29px] text-[#0083FF]"
                    >
                      <div className="w-full">{assignment?.title}</div>
                      <div className="w-[130px] min-w-[130px] flex justify-center">
                        {assignment?.customer}
                      </div>
                      <div className="w-[120px] min-w-[120px] flex justify-center">
                        {assignment?.offshore}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryModels;
