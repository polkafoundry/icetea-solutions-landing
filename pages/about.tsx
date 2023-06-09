import ITSStory from "@/components/about-us/its-story";
import MissionVision from "@/components/about-us/mission-vision";
import PartnerAndClient from "@/components/home/partner-clients";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="relative h-[310px]">
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="/images/home/multi_block_bg_big.png"
            className="w-full h-full"
            width={2880}
            height={356}
            priority
            loading="eager"
            alt="multi block"
          />
        </div>
        <div className="relative z-[1] max-w-[754px] mx-auto pt-[50px] text-white">
          <h1 className="text-[30px] lg:text-[50px] lg:leading-[50px] xl:text-[60px] xl:leading-[60px] font-semibold capitalize text-center">
            Your Trusted Software Development Partner
          </h1>
          <div className="mt-3 text-[14px] xl:text-[16px] xl:leading-[23px] text-center">
            We offer IT experts who bring data-driven and innovative digital
            transformation approaches to our clients. Our skills and experience
            in Software Development have enabled sustainable growth for
            enterprises of all sizes.
          </div>
        </div>
      </div>
      <MissionVision />
      <ITSStory />
      <PartnerAndClient />
    </div>
  );
};

export default AboutUs;
