import CostOptimized from "@/components/blockchain-dev/cost-optimized";
import OurPortfolio from "@/components/blockchain-dev/our-portfolio";
import TechnicalStack from "@/components/blockchain-dev/technical-stack";
import WhyChooseBlockchainDev from "@/components/blockchain-dev/why-choose-blockchain-dev";
import InsightBanner from "@/components/development-consulting/banner";
import { bannerBlockchainDevelopmentData } from "@/constants/consulting";

const BlockchainDevelopment = () => {
  return (
    <div>
      <InsightBanner
        title="Blockchain Development"
        subTitle="We have rich experience in developing blockchain-based solutions, including advanced Cryptocurrency Exchange, NFT Marketplace, Blockchain-based game, Crypto Wallet, IDO/IEO/STO Consulting, Smart Contracts... with cost-optimized white-label options that can help you enter the blockchain market quickly."
        contents={bannerBlockchainDevelopmentData}
        isThree
      />
      <CostOptimized />
      <WhyChooseBlockchainDev />
      <TechnicalStack />
      <OurPortfolio />
    </div>
  );
};

export default BlockchainDevelopment;
