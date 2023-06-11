import BannerHome from "@/components/home/banner";
import DeliverIdea from "@/components/home/deliver-idea";
import OurEngineering from "@/components/home/our-engineering";
import PartnerAndClient from "@/components/home/partner-clients";
import WhoWeAre from "@/components/home/who-we-are";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div>
      <BannerHome />
      <WhyChooseUs />
      <WhoWeAre />
      <OurEngineering />
      <DeliverIdea title="Deliver your ideas to tech life" />
      <PartnerAndClient />
    </div>
  );
}
