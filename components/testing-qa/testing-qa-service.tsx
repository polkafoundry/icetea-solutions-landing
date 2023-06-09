import {
  testingQAServiceContents,
  testingQAServiceData,
} from "@/constants/testing";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const TestingQAService = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="max-w-[1440px] px-5 mx-auto">
      <div className="mt-[120px] text-[48px] leading-[70px] font-semibold text-[#0030C0] text-center">
        Software Testing & QA Services
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 justify-between mt-12">
        {testingQAServiceData?.map((data: any, index: number) => {
          return (
            <div
              key={index}
              className={clsx(
                "xl:w-[170px] h-[170px] border border-[#0083FF] rounded-[24px] flex items-center justify-center cursor-pointer text-[#0030C0]",
                index === selectedIndex
                  ? "bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] text-white"
                  : ""
              )}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="pt-5">
                <div className="w-fit mx-auto">
                  {index === selectedIndex ? data?.imgHover : data?.img}
                </div>
                <div className="mt-5 text-[16px] xl:text-[20px] xl:leading-[29px] font-semibold capitalize">
                  {data?.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-2 mt-6 xl:mt-12 gap-5 xl:gap-[95px] items-center text-[#0030C0]">
        <Image
          src={testingQAServiceContents[selectedIndex]?.img}
          className="w-full h-auto xl:h-[458px]"
          width={1033}
          height={690}
          priority
          loading="eager"
          alt="img preview test"
        />
        <div>
          <div className="text-[35px] xl:text-[48px] xl:leading-[70px] font-semibold">
            {testingQAServiceContents[selectedIndex]?.title}
          </div>
          <div className="text-[14px] xl:text-[16px] xl:leading-[23px] mt-2">
            {testingQAServiceContents[selectedIndex]?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingQAService;
