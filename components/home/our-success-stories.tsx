import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "../global/image";

const OurSuccessStories = () => {
  return (
    <div className="mt-[180px]">
      <div className="flex text-white gap-[40px]">
        <div className="text-[60px] leading-[72px] w-[440px] min-w-[440px] font-bold">
          Our success stories
        </div>
        <div className="text-[20px] opacity-[0.8] mt-[20px]">
          Icetea Solutions incorporates customer experience-led design thinking
          with software engineering excellence to transform your digital journey
          and meet customer&apos;s expanding demands.
        </div>
      </div>
      <div className="firebird-chain-bg h-[456px] mt-[50px]">
        <div className="w-full max-w-[500px] px-[40px] pt-[60px] bg-[#050512] h-full">
          <p className="text-[14px] text-[#618CFF] uppercase font-bold">
            BLOCKCHAIN DEVELOPMENT
          </p>
          <p className="text-[40px] text-white mt-3">Firebird Chain</p>
          <p className="text-[16px] text-white opacity-[0.7] mt-3">
            Firebird&apos;s end-to-end infrastructure solution enables complete
            preparation and pragmatic strategies for blockchain and Web3
            application development.
          </p>
          <p className="flex text-[#618CFF] text-[16px] gap-[8px] mt-5">
            <FaCheckCircle
              fontSize={"16px"}
              color={"#618CFF"}
              className="mt-[4px]"
            />
            Cosmos SDK, Tendermint BFT Consensus, Golang, Protobuf/gRPC
          </p>
          <button className="flex flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[50px] font-[600] items-center">
            Live website
            <FaArrowRight fontSize={"16px"} color="white" />
          </button>
        </div>
      </div>
      <div className="flex gap-[20px] mt-5">
        <div className="grid px-7 pt-[30px] bg-[#050512] w-full max-w-[387px]">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#61FF8D] uppercase font-bold">
              Marketplace development
            </p>
            <p className="text-[32px] text-white mt-1">GameFi.org</p>
            <p className="text-[14px] text-white mt-1 opacity-[0.7]">
              GameFi&apos;s objective was to portray an elaborate virtual plaza
              of Web3 digital collectibles, where all NFT collections are under
              a concentrated entity.
            </p>
            <p className="text-[14px] text-[#61FF8D] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#61FF8D"}
                className="mt-[2px] min-w-[14px]"
              />
              Dapps Wyvern Opensea, React Nextjs, nestjs, Tailwind CSS , NFT
              indexing
            </p>
          </div>
          <ImageComponent
            src="/images/home/gamefi_org.png"
            className="w-full h-[200px] mt-auto"
            alt="gamefi.org"
          />
        </div>
        <div className="grid px-7 pt-[30px] bg-[#050512] w-full max-w-[387px]">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#E961FF] uppercase font-bold">
              WALLET DEVELOPMENT
            </p>
            <p className="text-[32px] text-white mt-1">PolkaSafe Wallet </p>
            <p className="text-[14px] text-white mt-1 opacity-[0.7]">
              This blockchain mobile wallet was designed to support
              Polkadot&apos;s Auction Development, promising a simple,
              intuitive, and easy-to-navigate user experience.
            </p>
            <p className="text-[14px] text-[#E961FF] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#E961FF"}
                className="mt-[2px] min-w-[14px]"
              />
              React native, Blockchain wallet
            </p>
          </div>
          <ImageComponent
            src="/images/home/polka_safe_wallet.png"
            className="w-full h-[200px] mt-auto"
            alt="gamefi.org"
          />
        </div>
        <div className="grid px-7 pt-[30px] bg-[#050512] w-full max-w-[387px]">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#FFDC61] uppercase font-bold">
              COMMUNITY BUILDING
            </p>
            <p className="text-[32px] text-white mt-1">Metaforce.org</p>
            <p className="text-[14px] text-white mt-1 opacity-[0.7]">
              This blockchain mobile wallet was designed to support
              Polkadot&apos;s Auction Development, promising a simple,
              intuitive, and easy-to-navigate user experience.
            </p>
            <p className="text-[14px] text-[#FFDC61] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#FFDC61"}
                className="mt-[2px] min-w-[14px]"
              />
              TypeScript, React, NextJS, Tailwind CSS, Web3, MUI, AGGrid,
              Highcharts, ...
            </p>
          </div>
          <ImageComponent
            src="/images/home/metaforce_org.png"
            className="w-full h-[200px] mt-auto"
            alt="gamefi.org"
          />
        </div>
      </div>
      <div className="redkite-chain-bg h-[456px] mt-5">
        <div className="w-full max-w-[500px] px-[40px] pt-[60px] bg-[#050512] h-full">
          <p className="text-[14px] text-[#FF6161] uppercase font-bold">
            LAUNCHPAD DEVELOPMENT
          </p>
          <p className="text-[40px] text-white mt-3">Red Kite</p>
          <p className="text-[16px] text-white opacity-[0.7] mt-3">
            The DeFi-focused platform and multi-chain launchpad ensures a fair
            and ordered token sale experience using diverse and in-depth
            functions for participants.
          </p>
          <p className="flex text-[#FF6161] text-[16px] gap-[8px] mt-5">
            <FaCheckCircle
              fontSize={"16px"}
              color={"#FF6161"}
              className="mt-[4px]"
            />
            Node.js, React, Solidity, Redis, AWS
          </p>
          <button className="flex flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[50px] font-[600] items-center">
            Live website
            <FaArrowRight fontSize={"16px"} color="white" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex text-[18px] gap-[12px] items-center mt-10 px-[30px] py-[10px] text-white border-white border-[1px] rounded-[40px] font-[600]">
          See case studies
          <FaArrowRight fontSize={"16px"} color="white" />
        </button>
      </div>
    </div>
  );
};

export default OurSuccessStories;
