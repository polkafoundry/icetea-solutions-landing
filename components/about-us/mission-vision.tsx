import Image from "next/image";

const MissionVision = () => {
  return (
    <div className="mt-8 xl:mt-[60px] max-w-[1440px] px-5 mx-auto">
      <div className="grid lg:grid-cols-2 gap-5 text-[#0030C0]">
        <div>
          <div className="flex lg:h-[260px] border border-[#0083FF] rounded-[22px] items-center py-5 px-10">
            <div className="lg:max-w-[500px]">
              <div className="text-[30px] lg:text-[40px] lg:leading-[40px] xl:text-[60px] xl:leading-[87px] font-semibold capitalize">
                mission
              </div>
              <div className="text-[16px] xl:text-[20px] xl:leading-[29px]">
                Boost up our customers&apos; business growth with Agile services
                and innovative technology.
              </div>
            </div>
          </div>
          <div className="mt-5 grid lg:grid-cols-2 gap-5">
            <Image
              src="/images/home/mission_vision_1.png"
              className="w-full h-[300px] lg:h-[410px] rounded-[22px] object-cover"
              width={503}
              height={615}
              alt="mission"
            />
            <Image
              src="/images/home/mission_vision_2.png"
              className="w-full h-[300px] lg:h-[410px] rounded-[22px] object-cover"
              width={503}
              height={615}
              alt="mission"
            />
          </div>
        </div>
        <div className="grid gap-5 lg:gap-0">
          <div className="mb-5 grid lg:grid-cols-2 gap-5">
            <Image
              src="/images/home/mission_vision_3.png"
              className="w-full h-[300px] lg:h-[410px] rounded-[22px] object-cover"
              width={503}
              height={615}
              alt="mission"
            />
            <Image
              src="/images/home/mission_vision_4.png"
              className="w-full h-[300px] lg:h-[410px] rounded-[22px] object-cover"
              width={503}
              height={615}
              alt="mission"
            />
          </div>
          <div className="flex lg:h-[260px] border border-[#0083FF] rounded-[22px] items-center py-5 px-10 order-first lg:order-last">
            <div className="max-w-[500px]">
              <div className="text-[30px] lg:text-[40px] lg:leading-[40px] xl:text-[60px] xl:leading-[87px] font-semibold capitalize">
                Vision
              </div>
              <div className="text-[16px] xl:text-[20px] xl:leading-[29px]">
                Our journey started with maximizing customer experience and
                creating unprecedented value for our customers, employees and
                partners. to contribute to the societal development.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
