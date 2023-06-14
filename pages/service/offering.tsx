import EngineeringSkillSet from "@/components/expertise-industries/engineering-skill-set";
import WhyChooseUs from "@/components/home/why-choose-us";
import ContractType from "@/components/offering/contract-type";
import DownloadProfileITS from "@/components/offering/download-profile";
import Industries from "@/components/offering/industries";
import ITSServices from "@/components/offering/its-service";
import QualityCommitment from "@/components/offering/quality-commitment";
import WorkingProcess from "@/components/offering/working-process";
import { workingProcessData } from "@/constants/offering";
import Image from "next/image";

const Offering = () => {
  return (
    <div>
      <div className="relative h-[380px] px-5">
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
        <div className="relative z-[1] max-w-[400px] lg:max-w-[550px] xl:max-w-[754px] mx-auto pt-[100px] text-white">
          <h1 className="text-[30px] lg:text-[50px] lg:leading-[50px] xl:text-[60px] xl:leading-[60px] font-semibold capitalize text-center">
            Icetea Software Services & Offerings
          </h1>
          <div className="mt-3 text-[14px] xl:text-[16px] xl:leading-[23px] text-center capitalize">
            With 120+ minds, we reach across the technology & business and
            harness our various talents into one goal - to help Clients deliver
            their ideas to real life.
          </div>
        </div>
      </div>
      <ITSServices />
      <WhyChooseUs />
      <DownloadProfileITS />
      <ContractType />
      <WorkingProcess data={workingProcessData} title="Our Working process" />
      <QualityCommitment />
      <EngineeringSkillSet />
      <Industries />
    </div>
  );
};

export default Offering;
