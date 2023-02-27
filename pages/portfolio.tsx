import { useState } from "react";
import FooterComponent from "@/components/global/footer";
import OurSuccessTop from "@/components/home/our-success-top";
import OurSuccessBot from "@/components/home/our-successs-bot";
import PortfolioBanner from "@/components/portfolio/portfolio-banner";
import Link from "next/link";
import { nextPath } from "@/constants";

const Portfolio = () => {
  const [emailInput, setEmailInput] = useState<string>("");

  const handleChangeData = (value: string) => {
    setEmailInput(value);
  };

  return (
    <div>
      <div className="portfolio_bg h-[640px] md:h-[600px]">
        <PortfolioBanner />
        <div className="md:flex text-center md:text-left gap-[40px] max-w-[1240px] px-5 mx-auto mt-[80px] md:mt-[140px] text-white">
          <div className="font-be-vn md:min-w-[340px] xl:min-w-[440px] text-[40px] xl:text-[60px] leading-[50px] xl:leading-[72px] font-bold">
            Our success stories
          </div>
          <div>
            <p className="font-be-vn xl:text-[20px] xl:leading-[28px] font-[300] opacity-[0.8]">
              Continuous market disruption forces continuous business
              innovation. Together we capitalize on technology to accelerate
              growth and seize opportunities.
            </p>
            <p className="font-be-vn font-bold uppercase pt-[40px] pb-[22px] text-[14px]">
              Reach out to us today for more details about our success stories.
            </p>
            <div className="w-full hidden md:flex max-w-[480px] border-[1.5px] p-[4px] border-white rounded-[40px] flex-nowrap">
              <input
                type="email"
                className="w-full px-[20px] outline-none bg-transparent"
                placeholder="Enter your email address"
                onChange={(e) => handleChangeData(e?.target?.value)}
              />
              <Link href={`/${nextPath?.CONTACT}?email=${emailInput}`}>
                <button className="w-[140px] min-w-[140px] px-[20px] py-[10px] bg-white rounded-[40px] text-black">
                  Talk with us
                </button>
              </Link>
            </div>
            <div className="w-full md:hidden">
              <input
                type="email"
                className="w-full h-[64px] px-[20px] text-[18px] outline-none bg-transparent border-[1.5px] p-[4px] border-white rounded-[40px]"
                placeholder="Enter your email address"
                onChange={(e) => handleChangeData(e?.target?.value)}
              />
              <Link href={`/${nextPath?.CONTACT}?email=${emailInput}`}>
                <button className="w-full h-[64px] min-w-[160px] text-[18px] mt-[12px] px-[20px] py-[10px] bg-white rounded-[40px] text-black">
                  Consult with us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] px-5 mx-auto pb-[100px]">
        <OurSuccessTop />
        <OurSuccessBot />
      </div>
      <FooterComponent isMail />
    </div>
  );
};

export default Portfolio;
