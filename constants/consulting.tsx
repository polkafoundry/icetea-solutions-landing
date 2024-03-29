import { AcceptanceTesting } from "@/components/svg/insight/acceptance-testing";
import { AgileScrumInsight } from "@/components/svg/insight/agile-scrum";
import { BusinessAppInsight } from "@/components/svg/insight/business-app";
import { ChainDevelopment } from "@/components/svg/insight/chain-dev";
import { COmpatibilityAccessibility } from "@/components/svg/insight/compatibility-accessibility";
import { Decentralied } from "@/components/svg/insight/decentralized";
import { GameDevelopInsight } from "@/components/svg/insight/game-dev";
import { MarketplaceInsight } from "@/components/svg/insight/marketplace";
import { MobileAppInsight } from "@/components/svg/insight/mobile-app";
import { NFTRelated } from "@/components/svg/insight/nft-related";
import { SecurityTesting } from "@/components/svg/insight/security-testing";
import { SmartContract } from "@/components/svg/insight/smart-contract";
import { SupportQAInsight } from "@/components/svg/insight/support-qa";
import { TechStackInsight } from "@/components/svg/insight/tech-stack";
import { WalletInsight } from "@/components/svg/insight/wallet";
import { WebAppIconConsult } from "@/components/svg/insight/web-app";

export const bannerConsultingData = [
  {
    img: <WebAppIconConsult />,
    title: "Web app development",
  },
  {
    img: <GameDevelopInsight />,
    title: "Game development",
  },
  {
    img: <MobileAppInsight />,
    title: "Mobile app development",
  },
  {
    img: <BusinessAppInsight />,
    title: "Business app development",
  },
];

export const bannerWebAppData = [
  {
    img: <TechStackInsight />,
    title: "Choose right tech-stack",
  },
  {
    img: <AgileScrumInsight />,
    title: "Apply Agile and Scrum in development",
  },
  {
    img: <SupportQAInsight />,
    title: "Support of QA and maintenance",
  },
  {
    img: <COmpatibilityAccessibility />,
    title: "Ensure compatibility and accessibility",
  },
];

export const bannerTestingQAData = [
  {
    img: <WebAppIconConsult />,
    title: "Web app testing",
  },
  {
    img: <MobileAppInsight />,
    title: "Mobile app testing",
  },
  {
    img: <SecurityTesting />,
    title: "Security testing",
  },
  {
    img: <AcceptanceTesting />,
    title: "Acceptance Testing",
  },
];

export const bannerBlockchainDevelopmentData = [
  {
    img: <ChainDevelopment />,
    title: "Chain development",
  },
  {
    img: <MarketplaceInsight />,
    title: "Marketplace",
  },
  {
    img: <WalletInsight />,
    title: "Wallet",
  },
  {
    img: <SmartContract />,
    title: "Smart contract development and audit",
  },
  {
    img: <NFTRelated />,
    title: "NFT related services development",
  },
  {
    img: <Decentralied />,
    title: "Decentralized applications",
  },
];

export const mainContentConsultingData = [
  {
    title: "BA (Business Analyst)",
    subTitle:
      "Throughout the project timeline, our main goal is to understand and specify customer’s pain-points, visualize for mutual understanding and design a structural solution to resolve all problems in a simplest and most optimized way possible. With the aid of our consulting, the benefits include:",
    img: "/images/home/BA.png",
    contents: [
      "Define problems and create a solution with the aim to covers all the customers’ issues.",
      "Collaborate regularly with the customer to break down the solution into details.",
      "Consult and produce a system that solve the goal and provide the best user experience.",
      "Create and update project documents to save all the changes and updates.",
      "Review, gather and elicit requirement fast and frequently to improve and keep the initial solution up-to-date .",
    ],
  },
  {
    title: "PQA (Process Quality Assurance)",
    subTitle:
      "As a ISTQB Platinum partner, we aim to help you maintain control over software delivery by streamlining your Quality Assurance workflows. The following services are provided:",
    img: "/images/home/PQA.png",
    contents: [
      "Designing a comprehensive and systematic Quality assurance process.",
      "Reviewing & fine-tuning current Quality assurance practices to meet international standards.",
      "Suggesting how to strategically reshape legacy & operation workflows.",
      "Optimizing the cost of software quality assurance.",
      "Training and examing ISTQB certification.",
    ],
  },
  {
    title: "Sofware Architecture",
    subTitle:
      "Our professionals conduct research and analysis to suggest the most suitable software solution and right technology. The scope of services can be:",
    img: "/images/home/SA.png",
    contents: [
      "Consulting the best-matching architectural solutions and IT & infrastructure to meet business needs.",
      "Analyzing the existing IT architecture & infrastructure to improve.",
      "Recommending the right technology to scale or upgrade.",
      "Offering dynamic methodologies & powerful tools to prevent the product from IT risks and errors or cyber security.",
    ],
  },
];

export const caseStudyData = [
  {
    img: "/images/home/case_study_1.png",
    title: "Banking & Finance Platform system",
  },
  {
    img: "/images/home/case_study_2.png",
    title: "Content creation hub",
  },
  {
    img: "/images/home/case_study_3.png",
    title: "Medical Examination Lab",
  },
];

export const technicalStackType = {
  LAYER: "layer",
  CONTRACT: "contract",
  PROGRAMING: "programming",
  FRAMEWORKS: "framework",
  DATABASE: "database",
  CLOUD: "cloud",
};

export const listTechnicalStack = [
  {
    type: technicalStackType.LAYER,
    title: "Layer 1 & 2",
  },
  {
    type: technicalStackType.CONTRACT,
    title: "Smart contract",
  },
  {
    type: technicalStackType.PROGRAMING,
    title: "Programming",
  },
  {
    type: technicalStackType.FRAMEWORKS,
    title: "Frameworks",
  },
  {
    type: technicalStackType.DATABASE,
    title: "Database",
  },
  {
    type: technicalStackType.CLOUD,
    title: "Cloud & devops",
  },
];

export const layerTechnicalStack = [
  "/images/home/layers/polkadot.png",
  "/images/home/layers/ethereum.png",
  "/images/home/layers/polygon.png",
  "/images/home/layers/cardano.png",
  "/images/home/layers/binance.png",
  "/images/home/layers/solana.png",
  "/images/home/layers/algorand.png",
  "/images/home/layers/aptos.png",
  "/images/home/layers/avalanche.png",
  "/images/home/layers/cosmos.png",
  "/images/home/layers/near.png",
  "/images/home/layers/tron.png",
  "/images/home/layers/oasis.png",
  "/images/home/layers/arbitrum.png",
];

export const contractTechnicalStack = [
  "/images/home/contracts/solidity.png",
  "/images/home/contracts/rust.png",
  "/images/home/contracts/move.png",
];

export const programingTechnicalStack = [
  "/images/home/programing/go.png",
  "/images/home/programing/scala.png",
  "/images/home/programing/java.png",
  "/images/home/programing/laravel.png",
  "/images/home/programing/obj_c.png",
  "/images/home/programing/java_script.png",
  "/images/home/programing/swift.png",
  "/images/home/programing/python.png",
  "/images/home/programing/c_sharp.png",
];

export const frameworksTechnicalStack = [
  "/images/home/frameworks/nodejs.png",
  "/images/home/frameworks/nextjs.png",
  "/images/home/frameworks/nestjs.png",
  "/images/home/frameworks/adonis.png",
  "/images/home/frameworks/reactjs.png",
  "/images/home/frameworks/spring.png",
  "/images/home/frameworks/vuejs.png",
  "/images/home/frameworks/kafka.png",
  "/images/home/frameworks/redux.png",
  "/images/home/frameworks/angular.png",
  "/images/home/frameworks/unreal.png",
  "/images/home/frameworks/unity.png",
  "/images/home/frameworks/flutter.png",
  "/images/home/frameworks/react_native.png",
];

export const databaseTechnicalStack = [
  "/images/home/database/postgre_sql.png",
  "/images/home/database/click_house.png",
  "/images/home/database/couchbase.png",
  "/images/home/database/mysql.png",
  "/images/home/database/sql_server.png",
  "/images/home/database/oracle.png",
];

export const cloudTechnicalStack = [
  "/images/home/cloud/amazon.png",
  "/images/home/cloud/google_cloud.png",
  "/images/home/cloud/jenkins.png",
  "/images/home/cloud/docker.png",
  "/images/home/cloud/kubernetes.png",
  "/images/home/cloud/netlify.png",
  "/images/home/cloud/vercel.png",
  "/images/home/cloud/github_actions.png",
];
