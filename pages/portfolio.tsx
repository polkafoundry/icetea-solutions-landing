import FooterComponent from "@/components/global/footer";
import OurSuccessTop from "@/components/home/our-success-top";
import OurSuccessBot from "@/components/home/our-successs-bot";
import PortfolioBanner from "@/components/portfolio/portfolio-banner";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio_bg h-[600px]">
        <PortfolioBanner />
        <div className="flex gap-[40px] max-w-[1240px] px-5 mx-auto mt-[140px] text-white">
          <div className="font-be-vn min-w-[440px] text-[60px] leading-[72px] font-bold">
            Our success stories
          </div>
          <div>
            <p className="font-be-vn text-[20px] leading-[28px] font-[300] opacity-[0.8]">
              Continuous market disruption forces continuous business
              innovation. Together we capitalize on technology to accelerate
              growth and seize opportunities.
            </p>
            <p className="font-be-vn pt-[40px] pb-[22px] text-[14px]">
              Reach out to us today for more details about our success stories.
            </p>
            <div className="w-full max-w-[480px] flex border-[1.5px] p-[4px] border-white rounded-[40px] flex-nowrap">
              <input
                type="email"
                className="w-full px-[20px] outline-none bg-transparent"
                placeholder="Enter your email address"
              />
              <button className="w-[140px] min-w-[140px] px-[20px] py-[10px] bg-white rounded-[40px] text-black">
                Talk with us
              </button>
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
