import { blockchainService, whiteLabelService } from "@/constants/home";
import clsx from "clsx";
import { ImageComponent } from "../global/image";

const OurOffering = () => {
  return (
    <div className="pt-[80px] xl:pt-[120px]">
      <div className="md:flex text-white text-center md:text-left gap-[40px]">
        <div
          className={clsx(
            "text-[40px] leading-[48px] w-[100%] min-w-[100%] font-[700]",
            "md:w-[300px] md:min-w-[300px]",
            "xl:text-[60px] xl:leading-[72px] xl:w-[440px] xl:min-w-[440px]"
          )}
        >
          Our offerings
        </div>
        <div className="text-[16px] xl:text-[20px] font-[300] opacity-[0.8] mt-[20px]">
          We offer one-stop web3 development and transformation services,
          ranging from ideation, planning, product design, coding, testing,
          deployment, product operation, and maintenance.
        </div>
      </div>
      <div className="md:flex gap-5 xl:gap-[40px] mt-[40px] md:mt-[60px]">
        <div className="md:w-[50%] p-5 xl:p-[40px] bg-white">
          <div className="flex justify-between gap-[10px] md:gap-[50px]">
            <div className="text-[24px] leading-[30px] xl:text-[40px] xl:leading-[50px]">
              Blockchain Development Services
            </div>
            <ImageComponent
              className="w-[100px] min-w-[100px] h-[100px] xl:w-[160px] xl:min-w-[160px] xl:h-[160px]"
              src="/images/home/blockchain_service.png"
              alt="blockchain service"
            />
          </div>
          <ul className="mt-[32px] pl-[20px]">
            {blockchainService?.map((service: string, index: number) => {
              return (
                <li
                  key={index}
                  className="list-item list-disc mt-[8px] text-[14px] md:text-[16px]"
                >
                  {service}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-[50%] mt-5 md:mt-0 p-[40px] white-label-bg text-white">
          <div className="flex justify-between  gap-[10px] md:gap-[50px]">
            <div className="text-[24px] leading-[30px] xl:text-[40px] xl:leading-[50px]">
              White-label services
            </div>
            <ImageComponent
              className="w-[100px] min-w-[100px] h-[100px] xl:w-[160px] xl:min-w-[160px] xl:h-[160px]"
              src="/images/home/white_label_service.png"
              alt="blockchain service"
            />
          </div>
          <ul className="mt-[32px] pl-[20px]">
            {whiteLabelService?.map((service: string, index: number) => {
              return (
                <li
                  key={index}
                  className="list-item list-disc mt-[8px] text-[14px] md:text-[16px]"
                >
                  {service}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurOffering;
