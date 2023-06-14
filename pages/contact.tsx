import OfficeLocation from "@/components/location";
import GetQuote from "@/components/web-app/get-quote";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="relative h-[310px]">
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="/images/home/multi_block_bg_big.png"
            className="w-full h-full"
            width={2880}
            height={356}
            priority
            loading="eager"
            alt="multi block"
          />
        </div>
        <div className="relative z-[1] max-w-[660px] mx-auto pt-[50px] text-white">
          <h1 className="text-[30px] lg:text-[50px] lg:leading-[50px] xl:text-[60px] xl:leading-[60px] font-semibold capitalize text-center">
            Let&apos;s discuss !
          </h1>
          <div className="mt-3 text-[16px] leading-[23px] text-center capitalize">
            If you have any ideas, please fill out the form below and our
            consultants will get in touch with you shortly.
          </div>
        </div>
      </div>
      <div className="relative max-w-[1400px] xl:h-[1000px] xl:px-5 mx-auto">
        <div className="xl:absolute w-full top-[-100px]">
          <GetQuote />
        </div>
      </div>
      <OfficeLocation />
    </div>
  );
};

export default Contact;
