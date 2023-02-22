import { FaArrowRight } from "react-icons/fa";

const PoweredBy = () => {
  return (
    <div className="powered-bg flex w-full max-w-[1360px] mx-auto px-[80px] py-[60px] mt-[80px] text-white">
      <div className="w-[440px] min-w-[440px]">
        <div className="text-[60px] font-[600] leading-[72px]">
          Powered by Icetea Labs
        </div>
        <button className="flex px-[30px] py-[10px] items-center gap-[10px] border-[1px] border-white rounded-[40px] mt-[30px]">
          Discover
          <FaArrowRight fontSize={"16px"} />
        </button>
      </div>
      <div>
        <div className="text-[20px] font-[300] opacity-[0.8]">
          Icetea Labs is Asia&apos;s leading Web3 incubator and powerhouse with
          extraordinary impact, specializing in Web3 development services, game
          discovery layers, and user engagement initiatives
        </div>
        <div className="flex gap-[20px] justify-between mt-5">
          <div className="w-full max-w-[180px]">
            <p className="text-[58px] font-bold">60+</p>
            <p className="font-[300] opacity-[0.7]">Games Onboarded into Binance Chain</p>
          </div>
          <div className="w-full max-w-[180px]">
            <p className="text-[58px] font-bold">85+</p>
            <p className="font-[300] opacity-[0.7]">Launched Token Projects</p>
          </div>
          <div className="w-full max-w-[180px]">
            <p className="text-[58px] font-bold">5M+</p>
            <p className="font-[300] opacity-[0.7]">Combined Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;
