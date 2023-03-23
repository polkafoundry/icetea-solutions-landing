import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "../global/image";

const OurSuccessBot = () => {
  return (
    <div>
      <div className="md:flex gap-[20px] mt-5">
        <div className="bg-card grid pt-[30px] px-2 bg-[#050512] w-full md:max-w-[387px]">
          <div className="mb-[20px] px-6">
            <p className="text-[14px] text-[#61FF8D] uppercase font-[700]">
              WEB3 APPLICATION
            </p>
            <p className="text-[32px] leading-[40px] text-white">
              Mobile App - GameFi.org
            </p>
            <p className="text-[14px] font-[300] text-white mt-3 opacity-[0.7]">
              Holistic vision empowers GameFi to move forward with a mobile app
              allowing users to participate in IDOs, INOs, Game Hub, and ...
            </p>
            <p className="text-[14px] text-[#61FF8D] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#61FF8D"}
                className="mt-[2px] min-w-[14px]"
              />
              React native (Back-end, Web Front-end, Mobile, 3rd party services)
            </p>
          </div>
          <ImageComponent
            src="/images/home/gamefi_mobile.png"
            className="w-full h-[50vw] md:h-[15vw] xl:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card">
            <p className="text-[18px] text-white">Demo</p>
          </div>
        </div>
        <div className="bg-card grid pt-[30px] bg-[#050512] w-full md:max-w-[387px] mt-5 md:mt-0">
          <div className="mb-[20px] px-7">
            <p className="text-[14px] text-[#E961FF] uppercase font-[700]">
              DATA & STATISTICS
            </p>
            <p className="text-[32px] leading-[40px] text-white">
              GameStatistics Service
            </p>
            <p className="text-[14px] text-white mt-3 font-[300] opacity-[0.7]">
              A multi-tenant service that enables collecting and analyzing
              off-chain data for Web3 projects and out-of-the-box leaderboard
              for participating projects.
            </p>
            <p className="text-[14px] text-[#E961FF] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#E961FF"}
                className="mt-[2px] min-w-[14px]"
              />
              TypeScript, NodeJS, NestJS, Fastify, Clickhouse, Couchbase, Kafka,
              FirebaseAWS, Github Actions
            </p>
          </div>
          <ImageComponent
            src="/images/home/data_statistic.png"
            className="w-full h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card">
            <p className="text-[18px] text-white">Demo</p>
          </div>
        </div>
        <div className="bg-card grid px-7 pt-[30px] bg-[#050512] w-full md:max-w-[387px] mt-5 md:mt-0">
          <div className="mb-[20px]">
            <p className="text-[14px] text-[#FFDC61] uppercase font-[700]">
              COMMUNITY BUILDING
            </p>
            <p className="text-[32px] leading-[40px] text-white">
              Metaforce Social API Service
            </p>
            <p className="text-[14px] text-white mt-3 font-[300] opacity-[0.7]">
              Bringing together social giants such as Telegram, Twitter, and
              Discord to collect ...
            </p>
            <p className="text-[14px] text-[#FFDC61] flex gap-[8px] mt-5">
              <FaCheckCircle
                fontSize={"14px"}
                color={"#FFDC61"}
                className="mt-[2px] min-w-[14px]"
              />
              TypeScript, NodeJS, NestJS, Fastify, Postgres DB, FirebaseGoogle
              Cloud Platform, Github Actions
            </p>
          </div>
          <ImageComponent
            src="/images/home/metaforce_org.png"
            className="w-full h-[50vw] md:h-[15vw] xl:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card">
            <p className="text-[18px] text-white">Demo</p>
          </div>
        </div>
      </div>

      <div className="desport_bg md:h-[456px] mt-5">
        <div className="w-full bg-card md:max-w-[500px] px-5 md:px-[40px] pt-[30px] md:pt-[60px] bg-[#050512] h-full">
          <p className="text-[14px] text-[#FF58D0] uppercase font-[700]">
            eSports platform development
          </p>
          <p className="hidden md:block text-[40px] leading-[50px] text-white">
            Desports
          </p>
          <p className="md:hidden text-[40px] leading-[50px] text-white mt-3">
            Gamefi.org
          </p>
          <p className="text-[16px] text-white font-[300] opacity-[0.7] mt-3">
            A decentralized eSports platform that offers comprehensive
            infrastructure for tournament organizers, players, KOLs, streamers
            and more
          </p>
          <p className="flex text-[#FF58D0] font-[300] text-[16px] gap-[8px] mt-5 mb-5">
            <FaCheckCircle
              size={"14px"}
              color={"#FF58D0"}
              className="mt-[4px] min-w-[14px]"
            />
            Node JS, TypeScripts, NestJS, React, NextJS, Tailwind CSS, MUI,
            Google Cloud Platform, Github Actions, Java, MongoDB Atlas
          </p>
          <Link href={"https://desports.gg/"} target={"_blank"}>
            <button className="hidden md:flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
              Visit website
              <FaArrowRight fontSize={"16px"} color="white" />
            </button>
          </Link>
          <ImageComponent
            src="/images/home/desport_bg_mobile.png"
            className="w-full md:hidden h-[50vw] md:h-[200px] mt-auto"
            alt="gamefi.org"
          />
          <div className="bg-hover-card bg-hover-card-big">
            <Link href={"https://desports.gg/"} target={"_blank"}>
              <button className="flex hover:scale-110 duration-500 flex-nowrap gap-[8px] text-white border-white border-[1px] px-[30px] py-[10px] rounded-[40px] mt-[20px] font-[600] items-center">
                Visit website
                <FaArrowRight fontSize={"16px"} color="white" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="xl:flex mt-5 gap-5 flex-wrap">
        <div className="bg-card token_airdrop_bg xl:w-[590px] p-[40px] text-white">
          <p className="text-[14px] text-[#618CFF] font-[700]">
            OTHER SERVICES
          </p>
          <p className="text-[32px] leading-[40px] mt-3">
            Token Airdrop & Distribution
          </p>
          <p className="text-[14px] mt-[12px] opacity-[0.7]">
            An indispensable distribution function for launchpads that requires
            working with multiple EVM-compatible chains such as Polygon, Solana,
            and Aptos.
          </p>
          <p className="text-[14px] text-[#618CFF] flex gap-[8px] mt-5">
            <FaCheckCircle
              fontSize={"14px"}
              color={"#618CFF"}
              className="mt-[2px] min-w-[14px]"
            />
            Solana SDK client, Aptos SDK client, Solana smart contract, Aptos
            smart contract
          </p>
          <div className="bg-hover-card">
            <p className="text-[18px] text-white">Demo</p>
          </div>
        </div>
        <div className="bg-card token_airdrop_bg mt-5 xl:mt-0 xl:w-[590px] p-[40px] text-white">
          <p className="text-[14px] text-[#618CFF] font-[700]">
            OTHER SERVICES
          </p>
          <p className="text-[32px] leading-[40px] mt-3">
            Front-running Sniper Bots
          </p>
          <p className="text-[14px] mt-[12px] opacity-[0.7]">
            A technical cryptocurrency scheme and dApp tool that runs on BNB,
            ETH, Polygon, and other EVM-compatible chains, requires SDKs and
            smart contract.
          </p>
          <p className="text-[14px] text-[#618CFF] flex gap-[8px] mt-5">
            <FaCheckCircle
              fontSize={"14px"}
              color={"#618CFF"}
              className="mt-[2px] min-w-[14px]"
            />
            Solana SDK client, Aptos SDK client, Solana smart contract, Aptos
            smart contract
          </p>
          <div className="bg-hover-card">
            <p className="text-[18px] text-white">Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccessBot;
