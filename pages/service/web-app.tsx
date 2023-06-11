import InsightBanner from "@/components/development-consulting/banner";
import DeliverIdea from "@/components/home/deliver-idea";
import OurEngineering from "@/components/home/our-engineering";
import GetQuote from "@/components/web-app/get-quote";
import LifeCycle from "@/components/web-app/life-cycle";
import WebAppSmallBanner from "@/components/web-app/small-banner";
import { bannerWebAppData } from "@/constants/consulting";

const WebApp = () => {
  return (
    <div>
      <InsightBanner
        title="Web app development"
        subTitle="Advanced and optimized Custom Website Development, highlighting UI/UX Designs, Back-end API Integrations tailored to specific requirements to achieve your goals and needs, expand customer base and improve internal management."
        contents={bannerWebAppData}
      />
      <LifeCycle />
      <WebAppSmallBanner />
      <OurEngineering />
      <DeliverIdea title="Our successful projects" />
      <div className="mt-[120px] px-5 xl:px-0 max-w-[1400px] mx-auto">
        <GetQuote />
      </div>
    </div>
  );
};

export default WebApp;
