import { ImageComponent } from "../global/image";

const DevelopmentValue = () => {
  return (
    <div className="max-w-[1280px] px-10 mx-auto mt-[120px]">
      <div className="flex text-black gap-[40px]">
        <div className="text-[60px] leading-[72px] w-[440px] min-w-[440px] font-bold">
          Development Value Add-On
        </div>
        <div className="text-[20px] opacity-[0.8] mt-[20px]">
          Understanding your aspirations, readiness, and capabilities allows us
          to become the lifelong partner that deliver sustainable success and
          competitive edge.
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-[60px]">
        <div className="px-10 py-[60px] bg-[#111239] w-[386px]">
          <ImageComponent
            src="/images/home/proven.png"
            className="w-[160px] h-[160px]"
            alt="Proven Success"
          />
          <div className="text-[28px] font-[600] text-white">
            Proven Success
          </div>
          <p className="text-[14px] mt-[12px] text-white opacity-[0.7]">
            Experience and expertise building a successful Web3 product
            portfolio
          </p>
        </div>
        <div className="px-10 pt-[60px] pb-10 bg-[#111239] w-[386px]">
          <ImageComponent
            src="/images/home/continuous.png"
            className="w-[160px] h-[160px]"
            alt="Continuous Support "
          />
          <div className="text-[28px] font-[600] text-white">
            Continuous Support
          </div>
          <p className="text-[14px] mt-[12px] text-white opacity-[0.7]">
            Powerful boost from an extensive network of partners and businesses
          </p>
        </div>
        <div className="px-10 pt-[60px] pb-10 bg-[#111239] w-[386px]">
          <ImageComponent
            src="/images/home/professionalism.png"
            className="w-[160px] h-[160px]"
            alt="Tech Professionalism "
          />
          <div className="text-[28px] font-[600] text-white">
            Tech Professionalism
          </div>
          <p className="text-[14px] mt-[12px] text-white opacity-[0.7]">
            Latest technologies that ensures top-notch development and delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentValue;
