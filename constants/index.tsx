import { BlockchainDevelopOffering } from "@/components/svg/offering/blockchain-dev";
import { CloudMigration } from "@/components/svg/offering/cloud-migration";
import { CustomSoftwareDevelopment } from "@/components/svg/offering/custom-software-dev";
import { GameDevelopment } from "@/components/svg/offering/game-dev";
import { MachineLearning } from "@/components/svg/offering/machine-learning";
import { MobileAppDevelopment } from "@/components/svg/offering/mobile-app-dev";
import { QATesting } from "@/components/svg/offering/qa-testing";
import { WebAppDevelopment } from "@/components/svg/offering/web-app-dev";

export const nextPath = {
  HOME: "",
  PORTFOLIO: "portfolio",
  CONTACT: "contact",
};

export const pathname = {
  SERVICE: "service",
  EXPERTISE: "expertise-industries",
  CASESTUDY: "casestudy",
  INSIGHT: "insight",
  ABOUTUS: "about",
  CONTACT: "contact",
  CAREER: "career",
  OFFERING: "offering",
  DELIVERY: "delivery",
  CONSULTING: "custom-software-consulting",
  WEBAPP: "web-app",
  TESTINGQA: "testing-qa",
  BLOCKCHAINDEVELOPMENT: "blockchain-development",
  PRIVACYPOLICY: "privacy-policy",
};

export const navItems = [
  {
    value: pathname.SERVICE,
    title: "Service",
    subMenu: [
      { value: pathname?.OFFERING, title: "Service & Offerings" },
      { value: pathname?.DELIVERY, title: "Delivery Models" },
    ],
  },
  {
    value: pathname.EXPERTISE,
    title: "Expertise & Industries",
  },
  {
    value: pathname.CASESTUDY,
    title: "Case study",
  },
  {
    value: pathname.INSIGHT,
    title: "Insight",
    subMenu: [
      {
        value: pathname?.CONSULTING,
        title: "Development & Consulting",
      },
      { value: pathname?.WEBAPP, title: "Web App Development" },
      { value: pathname?.TESTINGQA, title: "Software Testing & QA" },
      {
        value: pathname?.BLOCKCHAINDEVELOPMENT,
        title: "Blockchain Development",
      },
    ],
  },
  {
    value: pathname.ABOUTUS,
    title: "About us",
  },
];

export const ITServiceOffering = [
  {
    img: <BlockchainDevelopOffering />,
    title: "Blockchain Development",
    content:
      "We have rich experience in developing blockchain-based solutions, including advanced Cryptocurrency Exchange, NFT Marketplace, Blockchain-based game, Crypto Wallet, IDO/IEO/STO Consulting, Smart Contracts... with cost-optimized white-label options that can help you enter the blockchain market quickly.",
  },
  {
    img: <MobileAppDevelopment />,
    title: "Mobile App Development",
    content:
      "Our expertise includes top Mobile Development service which is well-designed, practical and cross-platform, bringing seamless Mobile Apps experiences for digital users on any device.",
  },
  {
    img: <WebAppDevelopment />,
    title: "Web App Development",
    content:
      "Advanced and optimized Custom Website Development, highlighting UI/UX Designs, Back-end API Integrations tailored to specific requirements to achieve your goals and needs, expand customer base and improve internal management.",
  },
  {
    img: <CustomSoftwareDevelopment />,
    title: "Custom Software Development",
    content:
      "Icetea Software delivers the full-cycle software development services, from IT consulting to roadmaps designing and developing end to end scalable technology solutions. By analysing your project requirements and business needs, we are able to adapt seamlessly to your requests.",
  },
  {
    img: <MachineLearning />,
    title: "Ai and machine learning",
    content:
      "Icetea Software ffers a variety of professional technical services that leverage Artificial Intelligence (AI), Data Analysis and Machine Learning. We create optimized solutions by integrating technologies to solve any business challenge.",
  },
  {
    img: <CloudMigration />,
    title: "Cloud Migration",
    content:
      "Live your moment and meet all people around the world. We help clients migrate data into cloud, legacy migration and so son.",
  },
  {
    img: <GameDevelopment />,
    title: "Game Development",
    content:
      "Our experts can provide state-of-the-art Game Development Service in multiple platforms including PC, iOS, Android, AR and VR. Our experts allow us to meet all your requirements and expectations.",
  },
  {
    img: <QATesting />,
    title: "qa and testing",
    content:
      "Icetea Software offers a wide range of independent software testing & QA services that satisfy the highest level of security and industry standards. Using our testing labs, QA expertise and team flexibility, we are able to increase the quality of your product while reducing time-to-market, management risks and operating costs.business needs, we are able to adapt seamlessly to your requests.",
  },
];

export const offeringContractTypes = [
  {
    title: "ODC (Dedicated teams)",
    subTitle:
      "At ITS, we will make proposals that meet the needs of our customers. Solve customer problems quickly and with quality",
    contents: [
      "Desire to build a team of system engineers",
      "There is always a shortage of engineer resources",
      "Desire to reduce recruitment cost",
      "Engineers are working with external partners",
      "Partner resource acquisition is unstable",
      "Desire to take time to create a dedicated team over the long term",
      "Reduce development cost",
    ],
  },
  {
    title: "Project - Based Development",
    subTitle:
      "At ITS, we will make proposals that meet the needs of our customers. Solve customer problems quickly and with quality",
    contents: [
      "Desire to request system development",
      "There is a specification or design document",
      "No development resources",
      "Desire to reduce development cost",
      "Desire to do Labo Development for a long time but still worried",
    ],
  },
];
