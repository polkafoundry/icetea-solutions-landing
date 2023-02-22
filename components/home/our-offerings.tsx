import { blockchainService, whiteLabelService } from "@/constants/home";
import { ImageComponent } from "../global/image";

const OurOffering = () => {
  return (
    <div className="pt-[120px]">
      <div className="flex text-white gap-[40px]">
        <div className="text-[60px] leading-[72px] w-[440px] min-w-[440px] font-bold">Our offerings</div>
        <div className="text-[20px] opacity-[0.8] mt-[20px]">
          We offer one-stop web3 development and transformation services,
          ranging from ideation, planning, product design, coding, testing,
          deployment, product operation, and maintenance.
        </div>
      </div>
      <div className="flex gap-[40px] mt-[60px]">
        <div className="w-[50%] p-[40px] bg-white">
          <div className="flex gap-[50px]">
            <div className="text-[40px] leading-[50px]">Blockchain Development Services</div>
            <ImageComponent
              className="w-[160px] min-w-[160px] h-[160px]"
              src="/images/home/blockchain_service.png"
              alt="blockchain service"
            />
          </div>
          <ul className="mt-[32px] pl-[20px]">
            {blockchainService?.map((service: string, index: number) => {
              return <li key={index} className="list-item list-disc mt-[8px]">{service}</li>;
            })}
          </ul>
        </div>
        <div className="w-[50%] p-[40px] white-label-bg text-white">
          <div className="flex gap-[50px]">
            <div className="text-[40px] leading-[50px]">White-label services</div>
            <ImageComponent
              className="w-[160px] min-w-[160px] h-[160px]"
              src="/images/home/white_label_service.png"
              alt="blockchain service"
            />
          </div>
          <ul className="mt-[32px] pl-[20px]">
            {whiteLabelService?.map((service: string, index: number) => {
              return <li key={index} className="list-item list-disc mt-[8px]">{service}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurOffering;
