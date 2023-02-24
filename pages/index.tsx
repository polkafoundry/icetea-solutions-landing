import FooterComponent from "@/components/global/footer";
import { ImageComponent } from "@/components/global/image";
import DevelopmentValue from "@/components/home/development-value";
import HomeBannerTop from "@/components/home/home-banner-top";
import OurOffering from "@/components/home/our-offerings";
import OurSuccessStories from "@/components/home/our-success-stories";
import Partners from "@/components/home/partners";
import PoweredBy from "@/components/home/powered-by";
import TechnicalStack from "@/components/home/technical-stack";

export default function Home() {
  return (
    <div>
      <HomeBannerTop />
      <div className="bg-[#111239] relative">
        <div className="relative max-w-[1280px] px-5 md:px-10 mx-auto z-[1]">
          <OurOffering />
          <OurSuccessStories />
          <TechnicalStack />
        </div>
        <div className="absolute left-0 bottom-0 w-full h-[100vw] z-0">
          <ImageComponent
            className="w-full h-full"
            src="/images/home/technical_stack_bg.png"
            alt="technical stack background"
          />
        </div>
      </div>
      <DevelopmentValue />
      <PoweredBy />
      <Partners />
      <FooterComponent isMail />
    </div>
  );
}
