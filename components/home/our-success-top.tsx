import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "../global/image";

const OurSuccessTop = () => {
  return (
    <div>
      <div className="gamefi_market_bg md:h-[456px] mt-[50px]">
        <div className="w-full bg-card md:max-w-[500px] px-5 md:px-[40px] pt-[30px] md:pt-[60px] bg-[#050512] h-full">
          <p className="text-[14px] text-[#61FF8D] uppercase font-[700]">
            MARKETPLACE DEVELOPMENT
          </p>
          <p className="hidden md:block text-[40px] leading-[50px] text-white">
            Gamefi.org- Marketplace
          </p>
          <p className="md:hidden text-[40px] leading-[50px] text-white mt-3">
            Gamefi.org
          </p>
          <p className="text-[16px] text-white font-[300] opacity-[0.7] mt-3">
            GameFi&apos;s objective was to portray an elaborate virtual plaza of
            Web3 digital collectibles, where all NFT collections are under a
            concentrated entity.
          </p>
          <p className="flex text-[#61FF8D] font-[300] text-[16px] gap-[8px] mt-5 mb-5">
            <FaCheckCircle
              size={"14px"}
              color={"#61FF8D"}
              className="mt-[4px] min-w-[14px]"
            />
            Dapps Wyvern Opensea, React Nextjs, nestjs, Tailwind CSS , NFT indexing
          </p>
          <Link href={"https://gamefi.org/nft/marketplace"} target={"_blank"}>
            <button className="hidden md:flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
              Visit website
              <FaArrowRight fontSize={"16px"} color="white" />
            </button>
          </Link>
          <ImageComponent
            src="/images/home/gamefi_market_mobile.png"
            className="w-full md:hidden h-[50vw] md:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card bg-hover-card-big">
            <Link href={"https://gamefi.org/nft/marketplace"} target={"_blank"}>
              <button className="flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
                Visit website
                <FaArrowRight fontSize={"16px"} color="white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex gap-[20px] mt-5">
        <div className="bg-card grid px-7 pt-[30px] mt-5 md:mt-0 bg-[#050512] w-full md:max-w-[387px]">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#FF8142] uppercase font-[700]">
              BLOCKCHAIN DEVELOPMENT
            </p>
            <p className="text-[32px] leading-[40px] text-white mt-1">
              Firebird Chain
            </p>
            <p className="text-[14px] font-[300] text-white mt-1 opacity-[0.7]">
              Firebird&apos;s end-to-end infrastructure solution enables
              complete preparation and pragmatic strategies for blockchain and
              Web3 application development.
            </p>
            <p className="text-[14px] text-[#FF8142] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#FF8142"}
                className="mt-[2px] min-w-[16px]"
              />
              Cosmos SDK, Tendermint BFT Consensus, Golang, Protobuf/gRPC
            </p>
          </div>
          <ImageComponent
            src="/images/home/firebird_chain.png"
            className="w-full h-[50vw] md:h-[15vw] xl:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card">
            <Link href={"https://firebirdchain.com/"} target={"_blank"}>
              <button className="flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
                Visit website
                <FaArrowRight fontSize={"16px"} color="white" />
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-card grid px-7 pt-[30px] mt-5 md:mt-0 bg-[#050512] w-full md:max-w-[387px]">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#E961FF] uppercase font-[700]">
              WALLET DEVELOPMENT
            </p>
            <p className="text-[32px] leading-[40px] text-white mt-1">
              PolkaSafe Wallet{" "}
            </p>
            <p className="text-[14px] font-[300] text-white mt-1 opacity-[0.7]">
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
            className="w-full h-[50vw] md:h-[15vw] xl:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card">
            <p className="text-[18px] text-white">Demo</p>
          </div>
        </div>
        <div className="bg-card grid px-7 pt-[30px] mt-5 md:mt-0 bg-[#050512] w-full md:max-w-[387px]">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#FFDC61] uppercase font-[700]">
              COMMUNITY BUILDING
            </p>
            <p className="text-[32px] leading-[40px] text-white mt-1">
              Metaforce.org
            </p>
            <p className="text-[14px] font-300 text-white mt-1 opacity-[0.7]">
              Introducing the Web3 gaming on-demand, work-to-earn protocol that
              incentivizes participants to support their favorite projects
              through meaningful contributions.
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
            className="w-full h-[50vw] md:h-[15vw] xl:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card">
            <Link href={"https://metaforce.org/"} target={"_blank"}>
              <button className="flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
                Visit website
                <FaArrowRight fontSize={"16px"} color="white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="redkite-chain-bg md:h-[456px] mt-5">
        <div className="bg-card w-full md:max-w-[500px] px-5 md:px-[40px] pt-[30px] md:pt-[60px] bg-[#050512] h-full">
          <p className="text-[14px] text-[#FF6161] uppercase font-[700]">
            LAUNCHPAD DEVELOPMENT
          </p>
          <p className="text-[40px] leading-[50px] text-white mt-3">Red Kite</p>
          <p className="text-[16px] text-white opacity-[0.7] mt-3">
            The DeFi-focused platform and multi-chain launchpad ensures a fair
            and ordered token sale experience using diverse and in-depth
            functions for participants.
          </p>
          <p className="flex text-[#FF6161] text-[16px] gap-[8px] mt-5 mb-5">
            <FaCheckCircle
              fontSize={"14px"}
              color={"#FF6161"}
              className="mt-[4px] min-w-[16px]"
            />
            Node.js, React, Solidity, Redis, AWS
          </p>
          <Link href={"https://redkitepad.com/#/"} target="_blank">
            <button className="hidden md:flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[50px] font-[600] items-center">
              Live website
              <FaArrowRight fontSize={"16px"} color="white" />
            </button>
          </Link>
          <ImageComponent
            src="/images/home/red_kite_launchpad_mobile.png"
            className="w-full md:hidden h-[50vw] md:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card bg-hover-card-big">
            <Link href={"https://redkitepad.com/#/"} target={"_blank"}>
              <button className="flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
                Visit website
                <FaArrowRight fontSize={"16px"} color="white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccessTop;
