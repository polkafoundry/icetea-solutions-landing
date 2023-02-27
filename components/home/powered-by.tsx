import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const PoweredBy = () => {
  return (
    <div className="powered-bg md:flex w-full max-w-[1360px] mx-auto px-5 md:px-10 xl:px-[80px] py-[60px] mt-[80px] text-white">
      <div className="md:w-[320px] xl:w-[440px] md:min-w-[320px] xl:min-w-[440px]">
        <div className="text-[40px] md:text-[50px] text-center md:text-left xl:text-[60px] font-[600] md:leading-[64px] xl:leading-[72px]">
          Powered by Icetea Labs
        </div>
        <Link href={"https://icetea.io/"} target="_blank">
          <button className="hidden hover:scale-110 duration-500 md:flex px-[30px] py-[10px] items-center gap-[10px] border-[1px] border-white rounded-[40px] mt-[30px]">
            Discover
            <FaArrowRight fontSize={"16px"} />
          </button>
        </Link>
      </div>
      <div>
        <div className="text-center md:text-left xl:text-[20px] font-[300] opacity-[0.8]">
          Icetea Labs is Asia&apos;s leading Web3 incubator and powerhouse with
          extraordinary impact, specializing in Web3 development services, game
          discovery layers, and user engagement initiatives
        </div>
        <div className="flex gap-5 flex-wrap md:flex-nowrap justify-between mt-5">
          <div className="w-[120px] md:w-full max-w-[180px]">
            <p className="text-[40px] xl:text-[58px] font-bold">60+</p>
            <p className="text-[14px] xl:text-[16px] font-[300] opacity-[0.7]">
              Games Onboarded into Binance Chain
            </p>
          </div>
          <div className="w-[120px] md:w-full max-w-[180px]">
            <p className="text-[40px] xl:text-[58px] font-bold">85+</p>
            <p className="text-[14px] xl:text-[16px] font-[300] opacity-[0.7]">
              Launched Token Projects
            </p>
          </div>
          <div className="w-[120px] md:w-full max-w-[180px]">
            <p className="text-[40px] xl:text-[58px] font-bold">5M+</p>
            <p className="text-[14px] xl:text-[16px] font-[300] opacity-[0.7]">
              Combined Community
            </p>
          </div>
        </div>
      </div>
      <button className="flex w-full justify-center md:hidden px-[30px] py-[10px] items-center gap-[10px] border-[1px] border-white rounded-[40px] mt-[30px]">
        Discover
        <FaArrowRight fontSize={"16px"} />
      </button>
    </div>
  );
};

export default PoweredBy;
