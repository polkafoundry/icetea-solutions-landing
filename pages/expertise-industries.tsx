import Compentencies from "@/components/expertise-industries/compentencies";
import EngineeringSkillSet from "@/components/expertise-industries/engineering-skill-set";
import OurValue from "@/components/expertise-industries/our-value";
import SoftwareDevService from "@/components/expertise-industries/software-dev-service";
import SpecializedIndustries from "@/components/expertise-industries/specialized-industries";
import DeliverIdea from "@/components/home/deliver-idea";
import Image from "next/image";

const ExpertiseIndustries = () => {
  return (
    <div>
      <div className="relative h-[237px]">
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="/images/home/multi_block_bg.png"
            className="w-full h-full"
            width={2880}
            height={356}
            priority
            alt="multi block"
          />
        </div>
        <div className="relative z-[1] max-w-[754px] mx-auto pt-[50px] text-white">
          <h1 className="text-[60px] leading-[87px] font-semibold capitalize">
            Expertise and Industries
          </h1>
          <div className="text-[16px] leading-[23px] text-center">
            As a leading company in the field of software development in
            Vietnam,Icetea Software is always ready to bring the best solutions
            to customers
          </div>
        </div>
      </div>
      <SpecializedIndustries />
      <OurValue />
      <Compentencies />
      <SoftwareDevService />
      <EngineeringSkillSet />
      <DeliverIdea />
    </div>
  );
};

export default ExpertiseIndustries;
