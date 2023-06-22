import { deliveryModelsData } from "@/constants/delivery";
import clsx from "clsx";
import Image from "next/image";

const DeliveryModels = () => {
  return (
    <div className="pt-[60px]">
      <div className="grid gap-[60px] max-w-[1440px] px-5 mx-auto">
        {deliveryModelsData?.map((data: any, index: number) => {
          return (
            <div key={index} className="grid lg:grid-cols-2 gap-5 items-center">
              <div
                className={clsx(
                  "text-[#0030C0] capitalize",
                  index === 1 ? "lg:order-last lg:pl-[100px]" : ""
                )}
              >
                <div className="text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold">
                  {data?.title}
                </div>
                <div className="text-[14px] xl:text-[16px] xl:leading-[23px] max-w-[469px]">
                  {data?.subTitle}
                </div>
                <ul className="mt-[24px] list-disc pl-5 text-[14px] xl:text-[20px] xl:leading-[29px] font-semibold max-w-[567px]">
                  {data?.contents?.map((content: any, idx: number) => {
                    return (
                      <li key={idx} className="font-semibold">
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full overflow-auto">
                <div className="min-w-[440px] p-6 border border-[#0083FF] rounded-[24px]">
                  <div>
                    <Image
                      src={data?.imgPreview}
                      className="w-full h-[172px]"
                      width={636}
                      height={172}
                      alt={data?.title}
                    />
                  </div>
                  <div className="flex gap-5 capitalize xl:pt-8 text-[16px] xl:text-[24px] xl:leading-[30px] text-[#0030C0]">
                    <div className="w-full font-semibold">assignments</div>
                    <div className="min-w-[90px] sm:w-[130px] sm:min-w-[130px] text-center font-semibold">
                      customer
                    </div>
                    <div className="min-w-[90px] sm:w-[120px] sm:min-w-[120px] text-center font-semibold">
                      offshore
                    </div>
                  </div>
                  {data?.assignments?.map((assignment: any, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="flex gap-5 capitalize pt-2 xl:pt-4 text-[16px] xl:text-[20px] xl:leading-[29px] text-[#0083FF]"
                      >
                        <div className="w-full">{assignment?.title}</div>
                        <div className="items-center min-w-[90px] sm:w-[130px] sm:min-w-[130px] flex justify-center">
                          {assignment?.customer}
                        </div>
                        <div className="items-center min-w-[90px] sm:w-[120px] sm:min-w-[120px] flex justify-center">
                          {assignment?.offshore}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryModels;
