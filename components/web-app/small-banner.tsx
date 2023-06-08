import { WebAppArrowRightFill } from "../svg/insight/arrow-right";
import { WebAppTelegram } from "../svg/insight/telegram";

export const WebAppSmallBanner = () => {
  return (
    <div className="mt-[120px]">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] p-[70px] flex items-center rounded-[24px]">
        <div>
          <WebAppTelegram />
        </div>
        <div className="w-full pl-[48px] pr-[100px] text-white text-[40px] leading-[58px] font-semibold">
          Want to know the cost of your software project development?
        </div>
        <button className="flex btn-fill-white px-6 py-2 items-center gap-3 text-[24px] leading-[30px] font-semibold flex-nowrap whitespace-nowrap">
          Get started
          <WebAppArrowRightFill />
        </button>
      </div>
    </div>
  );
};

export default WebAppSmallBanner;
