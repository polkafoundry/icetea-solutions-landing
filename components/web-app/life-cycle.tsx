import { lifeCycleBottom, lifeCycleTop } from "@/constants/life-cycle";

const LifeCycle = () => {
  return (
    <div>
      <div className="text-[48px] leading-[70px] text-center text-[#01289D] font-semibold mt-[60px] capitalize">
        Software development life cycle
      </div>
      <div className="mt-[48px] max-w-[1440px] px-5 mx-auto text-[#0030C0]">
        <div className="grid grid-cols-3 gap-9">
          {lifeCycleTop?.map((data: any, index: number) => {
            return (
              <div
                key={index}
                className="py-6 px-12 border border-[#0083FF] rounded-[24px] h-full"
              >
                <div className="text-[32px] leading-[40px] font-semibold tracking-tighter">
                  {data?.title}
                </div>
                <div className="mt-1 text-[16px] leading-[23px]">
                  {data?.content}
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative z-[1] grid grid-cols-3 gap-9">
          {lifeCycleTop?.map((_: any, index: number) => {
            return (
              <div key={index}>
                <div className="w-[1px] h-[37px] bg-[#0083FF] mx-auto" />
                <div className="w-[72px] h-[72px] bg-white rounded-full border border-[#0083FF] mx-auto text-[32px] leading-[40px] flex justify-center items-center font-semibold">{`0${
                  index + 1
                }`}</div>
              </div>
            );
          })}
        </div>
        <div className="relative z-0 h-[60px]">
          <div className="absolute w-full h-[132px] border-[2px] border-[#0083FF] border-dashed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-[120px]" />
        </div>
        <div className="relative z-[1] grid grid-cols-3 gap-9">
          {lifeCycleBottom?.map((_: any, index: number) => {
            return (
              <div key={index}>
                <div className="w-[72px] h-[72px] bg-white rounded-full border border-[#0083FF] mx-auto text-[32px] leading-[40px] flex justify-center items-center font-semibold">{`0${
                  index + 4
                }`}</div>
                <div className="w-[1px] h-[37px] bg-[#0083FF] mx-auto" />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-9">
          {lifeCycleBottom?.map((data: any, index: number) => {
            return (
              <div
                key={index}
                className="py-6 px-12 border border-[#0083FF] rounded-[24px] h-full"
              >
                <div className="text-[32px] leading-[40px] font-semibold tracking-tighter">
                  {data?.title}
                </div>
                <div className="mt-1 text-[16px] leading-[23px]">
                  {data?.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LifeCycle;
