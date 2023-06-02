import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div>
      <div className="text-[48px] leading-[70px] text-center text-[#01289D] font-semibold mt-[120px] capitalize">
        Who we are
      </div>
      <div className="max-w-[724px] text-center text-[#0030C0] mx-auto text-[16px] leading-[23px]">
        Icetea Software is always ready to bring the best bespoke solutions to
        customers. We will build the enviroment and develop the system meeting
        the demand of customers. Please feel free to contact us.
      </div>
      <div className="grid grid-cols-2 gap-5 max-w-[1440px] px-5 mx-auto mt-12">
        <div>
          <Image
            src="/images/home/rubik.png"
            className="w-full h-[350px] rounded-[24px]"
            width={1038}
            height={526}
            priority
            alt="rubik"
          />
          <div className="w-full grid grid-cols-2 gap-5 mt-5">
            <div className="flex items-center justify-center w-full h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]">
              <div className="text-center">
                <div className="text-[120px] leading-[175px] text-white">
                  5+
                </div>
                <div className="text-[24px] leading-[30px] text-white font-semibold">
                  years of experience
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]">
              <div className="text-center">
                <div className="text-[120px] leading-[175px] text-white">
                  120+
                </div>
                <div className="text-[24px] leading-[30px] text-white font-semibold">
                  successful Projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 gap-5">
            <div className="flex items-center justify-center w-full h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]">
              <div className="text-center">
                <div className="text-[120px] leading-[175px] text-white">
                  6+
                </div>
                <div className="text-[24px] leading-[30px] text-white font-semibold">
                  Countries partnered
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]">
              <div className="text-center">
                <div className="text-[120px] leading-[175px] text-white">
                  150+
                </div>
                <div className="text-[24px] leading-[30px] text-white font-semibold">
                  successful Projects
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/home/we_are.png"
            className="w-full h-[350px] rounded-[24px] mt-5"
            width={1038}
            height={529}
            priority
            alt="rubik"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
