import Image from "next/image";

const DownloadProfileITS = () => {
  return (
    <div className="relative mt-[120px] overflow-hidden bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D]">
      <div className="py-[60px] text-white text-center px-5">
        <div className="text-[30px] lg:text-[48px] lg:leading-[70px] font-semibold">
          Icetea Software Profile
        </div>
        <div className="max-w-[653px] mx-auto text-[14px] lg:text-[16px] lg:leading-[23px] capitalize">
          We’re here to help you innovate with success. Our experts will conduct
          an in-depth analysis of your business model and industry to advise on
          implementing the most optimal technology solutions.
        </div>
        <div className="relative w-[196px] h-[196px] bg-white p-[10px] mx-auto rounded-full mt-[48px] cursor-pointer select-none">
          <div className="w-full h-full p-[2px] bg-[#0030C0] rounded-full mx-auto">
            <div className="w-full h-full rounded-full mx-auto bg-white flex justify-center items-center text-[#0030C0] text-[24px] leading-[30px] font-semibold">
              Download
            </div>
          </div>
          <div className="absolute pointer-events-none select-none w-[220px] h-[220px] rounded-full top-1/2 left-1/2 border-[2px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute pointer-events-none select-none w-[311px] h-[311px] rounded-full top-1/2 left-1/2 border-[1px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute pointer-events-none select-none w-[580px] h-[580px] rounded-full top-1/2 left-1/2 border-[1px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute pointer-events-none select-none w-[855px] h-[855px] rounded-full top-1/2 left-1/2 border-[1px] -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <Image
        src="/images/home/download_profile_bg.png"
        className="w-full h-full absolute top-0 left-0 object-cover opacity-90 pointer-events-none select-none mix-blend-soft-light"
        width={2880}
        height={758}
        alt="bg"
      />
    </div>
  );
};

export default DownloadProfileITS;
