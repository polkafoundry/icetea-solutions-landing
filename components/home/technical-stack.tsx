import {
  cloudTechnicalStack,
  contractTechnicalStack,
  databaseTechnicalStack,
  frameworksTechnicalStack,
  layerTechnicalStack,
  listTechnicalStack,
  programingTechnicalStack,
  technicalStackType,
} from "@/constants/home";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { ImageComponent } from "../global/image";

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
    <div className="mt-[180px] pb-[100px]">
      <div className="flex text-white gap-[40px]">
        <div className="text-[60px] leading-[72px] w-[440px] min-w-[440px] font-bold">
          Technical Stacks
        </div>
        <div className="text-[20px] opacity-[0.8] mt-[20px]">
          An elite engineering team and the latest technologies joined with
          agile and modern business practices.
        </div>
      </div>
      <div className="flex gap-[6px] flex-wrap mt-[50px]">
        {listTechnicalStack?.map((item, index) => {
          return (
            <button
              key={index}
              className={clsx(
                "px-[30px] py-[8px] bg-white rounded-[60px] text-[14px] cursor-pointer font-bold",
                item?.type === currentTechnical ? "" : "opacity-[0.5]"
              )}
              onClick={() => setCurrentTechnical(item?.type)}
            >
              {item?.title}
            </button>
          );
        })}
      </div>
      <div className="h-[1px] bg-white opacity-[0.2] mt-5" />
      <div className="flex flex-wrap gap-5 mt-5 justify-center xl:justify-start">
        {technicalStack &&
          technicalStack?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[183px] h-[96px] p-5 hover:bg-[#64646433]"
              >
                <ImageComponent
                  className="w-full h-full"
                  imageClass="object-contain"
                  src={item}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TechnicalStack;
