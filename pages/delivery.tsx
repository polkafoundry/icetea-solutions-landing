import Engagement from "@/components/delivery/engagement";
import DeliveryModels from "@/components/delivery/models";
import Image from "next/image";

const Delivery = () => {
  return (
    <div>
      <div className="relative h-[307px]">
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="/images/home/multi_block_bg.png"
            className="w-full h-full"
            width={2880}
            height={356}
            priority
            loading="eager"
            alt="multi block"
          />
        </div>
        <div className="relative z-[1] max-w-[650px] mx-auto pt-[100px] text-white">
          <h1 className="text-[30px] lg:text-[50px] lg:leading-[50px] xl:text-[60px] xl:leading-[87px] font-semibold capitalize text-center">
            Our Delivery Models
          </h1>
          <div className="text-[14px] xl:text-[16px] xl:leading-[23px] text-center capitalize">
            Our experts always stay up-to-date with new developments and share
            their insights, knowledge and opinions from all around the world.
          </div>
        </div>
      </div>
      <DeliveryModels />
      <Engagement />
    </div>
  );
};

export default Delivery;
