import FooterComponent from "@/components/global/footer";
import PortfolioBanner from "@/components/portfolio/portfolio-banner";

const Contact = () => {
  return (
    <div>
      <div className="portfolio_bg h-[480px]">
        <PortfolioBanner />
        <div className="flex gap-[40px] max-w-[1240px] px-5 mx-auto mt-[140px] text-white">
          <div className="font-be-vn min-w-[440px] text-[60px] leading-[72px] font-bold">
            Talk with us
          </div>
          <p className="font-be-vn text-[20px] leading-[28px] font-[300] opacity-[0.8]">
            Fill in your contact details and we&apos;ll get back to you soon.
            All information provided will be kept confidential. We do not
            disclose your personal information to third parties.
          </p>
        </div>
      </div>
      <div className="max-w-[840px] mx-auto mt-[80px] pb-[100px]">
        <div className="flex gap-[40px]">
          <input
            className="h-[64px] w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Your name*"
            type={'text'}
          />
          <input
            className="h-[64px] w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Your email address*"
            type={'email'}
          />
        </div>
        <div className="flex gap-[40px] mt-5">
          <input
            className="h-[64px] w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Phone number"
            type={'text'}
          />
          <select
            className="h-[64px] w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Your country*"
          />
        </div>
        <div className="flex gap-[40px] mt-5">
          <input
            className="h-[64px] w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="Your company name"
            type={'text'}
          />
          <input
            className="h-[64px] w-[400px] bg-[#EFEFEF] rounded-[8px] outline-none px-5 border-[1px] border-transparent"
            placeholder="How did you know about us?*"
            type={'text'}
          />
        </div>
        <textarea
          className="h-[280px] w-[100%] mt-5 resize-none bg-[#EFEFEF] rounded-[8px] outline-none p-5 border-[1px] border-transparent"
          placeholder="How did you know about us?*"
        />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Contact;
