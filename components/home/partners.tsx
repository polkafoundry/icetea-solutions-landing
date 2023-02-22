import { listPartners } from "@/constants/home";
import { ImageComponent } from "../global/image";

const Partners = () => {
  return (
    <div className="pt-[100px] max-w-[1240px] px-[20px] pb-[80px] mx-auto">
      <div className="text-[20px] font-bold">Valued Partners</div>
      <div className="text-[60px] font-[600] leading-[75px] mt-4">
        Industry-leading names pioneering innovation and evolution
      </div>
      {listPartners?.map((partner, index) => {
        return (
          <div key={index}>
            <div className="text-[20px] font-bold uppercase text-[#618CFF] mt-[60px]">
              {partner?.title}
            </div>
            <div className="flex gap-[28px] flex-wrap">
              {partner?.partners?.map((item, index) => {
                return (
                  <ImageComponent
                    key={index}
                    src={item}
                    className="w-[176px] h-[96px]"
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
