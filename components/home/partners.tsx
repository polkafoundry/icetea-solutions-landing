import { listPartners } from "@/constants/home";
import clsx from "clsx";
import { ImageComponent } from "../global/image";

const Partners = () => {
  return (
    <div className="pt-[80px] md:pt-[100px] max-w-[1240px] px-[20px] pb-[80px] mx-auto">
      <div className="md:flex text-black text-center md:text-left gap-[40px]">
        <div
          className={clsx(
            "text-[40px] leading-[48px] w-[100%] min-w-[100%] font-[700]",
            "md:w-[300px] md:min-w-[300px]",
            "xl:text-[60px] xl:leading-[72px] xl:w-[440px] xl:min-w-[440px]"
          )}
        >
          Valued Partners
        </div>
        <div className="text-[16px] font-[300] xl:text-[20px] opacity-[0.8] mt-[20px]">
          Understanding your aspirations, readiness, and capabilities allows us
          to become the lifelong partner that deliver sustainable success and
          competitive edge.
        </div>
      </div>
      {listPartners?.map((partner, index) => {
        return (
          <div key={index}>
            <div className="text-[20px] text-center md:text-left font-[700] uppercase text-[#618CFF] mt-10 md:mt-[60px]">
              {partner?.title}
            </div>
            <div className="flex gap-[10px] justify-center md:justify-start md:gap-[28px] flex-wrap">
              {partner?.partners?.map((item, index) => {
                return (
                  <ImageComponent
                    key={index}
                    src={item}
                    className="w-[140px] md:w-[176px] h-[70px] md:h-[96px]"
                    imageClass="object-contain"
                    alt="partner"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
