import {
  cloudTechnicalStack,
  contractTechnicalStack,
  databaseTechnicalStack,
  frameworksTechnicalStack,
  layerTechnicalStack,
  listTechnicalStack,
  programingTechnicalStack,
  technicalStackType,
} from "@/constants/consulting";
import clsx from "clsx";
import Image from "next/image";
import { useMemo, useState } from "react";

const TechnicalStack = () => {
  const [currentTechnical, setCurrentTechnical] = useState<string>(
    technicalStackType.LAYER
  );

  const technicalStack = useMemo(() => {
    switch (currentTechnical) {
      case technicalStackType.LAYER:
        return layerTechnicalStack;
      case technicalStackType.CONTRACT:
        return contractTechnicalStack;
      case technicalStackType.PROGRAMING:
        return programingTechnicalStack;
      case technicalStackType.FRAMEWORKS:
        return frameworksTechnicalStack;
      case technicalStackType.DATABASE:
        return databaseTechnicalStack;
      case technicalStackType.CLOUD:
        return cloudTechnicalStack;
      default:
        return [];
    }
  }, [currentTechnical]);

  return (
    <div className="mt-[60px] xl:mt-[120px] py-6 xl:py-12 bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D]">
      <div className="max-w-[1440px] px-5 mx-auto text-white">
        <div className="text-[40px] xl:text-[60px] xl:leading-[60px] text-center font-semibold">
          Technical Stacks
        </div>
        <div className="max-w-[606px] mx-auto text-center text-[14px] xl:text-[16px] xl:leading-[23px]">
          An elite engineering team and the latest technologies joined with
          agile and modern business practices.
        </div>
        <div className="flex gap-[6px] flex-wrap justify-center xl:justify-between mt-3 xl:mt-[50px]">
          {listTechnicalStack?.map((item, index) => {
            return (
              <button
                key={index}
                className={clsx(
                  "xl:px-[38px] px-5 py-2 xl:py-3 bg-white rounded-[60px] text-[#0030C0] text-[14px] xl:text-[20px] xl:leading-[29px] cursor-pointer font-semibold capitalize",
                  item?.type === currentTechnical ? "" : "opacity-[0.5]"
                )}
                onClick={() => setCurrentTechnical(item?.type)}
              >
                {item?.title}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-0 md:gap-6 mt-8 justify-center xl:justify-start">
          {technicalStack &&
            technicalStack?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[150px] md:w-[213px] h-[80px] md:h-[100px] p-5 grayscale"
                >
                  <Image
                    className="w-full h-full object-contain"
                    src={item}
                    width={260}
                    height={130}
                    priority
                    loading="eager"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TechnicalStack;
