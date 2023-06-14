import clsx from "clsx";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div>
      <div className="text-[35px] leading-[50px] xl:text-[48px] xl:leading-[70px] text-center text-[#01289D] font-semibold mt-[60px] xl:mt-[120px] capitalize">
        Who we are
      </div>
      <div className="max-w-[600px] xl:max-w-[724px] text-center text-[#0030C0] mx-auto text-[14px] xl:text-[16px] xl:leading-[23px]">
        Icetea Software is committed to delivering top-tier, tailored solutions
        for our clients. We are prepared to establish and evolve systems to meet
        your specific needs. Don&apos;t hesitate to reach out to us for further
        discussions.
      </div>
      <div className="grid lg:grid-cols-2 gap-5 max-w-[1000px] xl:max-w-[1440px] px-5 mx-auto mt-6 xl:mt-12">
        <div>
          <Image
            src="/images/home/rubik.png"
            className="w-full h-[250px] lg:h-[300px] xl:h-[350px] rounded-[24px]"
            width={1038}
            height={526}
            priority
            alt="rubik"
          />
          <div className="w-full grid grid-cols-2 gap-5 mt-5">
            <div
              className={clsx(
                "flex items-center justify-center w-full xl:h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]",
                "lg:h-[300px] h-[250px]"
              )}
            >
              <div className="text-center">
                <div className="xl:text-[120px] xl:leading-[175px] text-[50px] lg:text-[80px] lg:leading-[100px] text-white">
                  5+
                </div>
                <div className="xl:text-[24px] lg:text-[18px] xl:leading-[30px] text-white font-semibold">
                  years of experience
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center justify-center w-full xl:h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]",
                "lg:h-[300px] h-[250px]"
              )}
            >
              <div className="text-center">
                <div className="xl:text-[120px] xl:leading-[175px] text-[50px] lg:text-[80px] lg:leading-[100px] text-white">
                  170+
                </div>
                <div className="xl:text-[24px] lg:text-[18px] xl:leading-[30px] text-white font-semibold">
                  Dedicated employees
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 gap-5">
            <div
              className={clsx(
                "flex items-center justify-center w-full xl:h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]",
                "lg:h-[300px] h-[250px]"
              )}
            >
              <div className="text-center">
                <div className="xl:text-[120px] xl:leading-[175px] text-[50px] lg:text-[80px] lg:leading-[100px] text-white">
                  6+
                </div>
                <div className="xl:text-[24px] lg:text-[18px] xl:leading-[30px] text-white font-semibold">
                  Countries partnered
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center justify-center w-full xl:h-[350px] bg-gradient-to-b from-[#C1E1FF] via-[#0083FF] to-[#01289D] rounded-[24px]",
                "lg:h-[300px] h-[250px]"
              )}
            >
              <div className="text-center">
                <div className="xl:text-[120px] xl:leading-[175px] text-[50px] lg:text-[80px] lg:leading-[100px] text-white">
                  130+
                </div>
                <div className="xl:text-[24px] lg:text-[18px] xl:leading-[30px] text-white font-semibold">
                  successful Projects
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/home/we_are.png"
            className="w-full h-[250px] lg:h-[300px] xl:h-[350px] rounded-[24px] mt-5"
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
