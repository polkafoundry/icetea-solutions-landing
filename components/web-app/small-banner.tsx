import { WebAppArrowRightFill } from "../svg/insight/arrow-right";
import { WebAppTelegram } from "../svg/insight/telegram";

export const WebAppSmallBanner = () => {
  return (
    <div className="mt-[60px] xl:mt-[120px] px-5">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D] p-5 lg:p-[70px] grid gap-5 lg:gap-0 lg:flex items-center rounded-[24px]">
        <div className="mx-auto lg:mx-0">
          <WebAppTelegram />
        </div>
        <div className="w-full px-6 xl:pl-[48px] xl:pr-[100px] text-white text-[30px] xl:text-[40px] xl:leading-[58px] font-semibold">
          Want to know the cost of your software project development?
        </div>
        <button className="flex justify-between btn-fill-white px-6 py-2 items-center gap-3 text-[20px] xl:text-[24px] xl:leading-[30px] font-semibold flex-nowrap whitespace-nowrap">
          Get started
          <WebAppArrowRightFill />
        </button>
      </div>
    </div>
  );
};

export default WebAppSmallBanner;
