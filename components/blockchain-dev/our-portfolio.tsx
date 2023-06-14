import Image from "next/image";
import { PortfolioCheck } from "../svg/insight/portfolio-check";
import { VisitWebArrowRight } from "../svg/insight/visit-web-arrow-right";
import Link from "next/link";
import clsx from "clsx";

const BigFormDevelopment = ({
  color,
  devTitle,
  title,
  content,
  app,
  img,
  url,
  smallImg,
}: any) => {
  return (
    <Link
      href={url ? url : {}}
      target={"_blank"}
      className={clsx(
        url
          ? "lg:pointer-events-none lg:select-none"
          : "pointer-events-none select-none"
      )}
    >
      <div
        style={{
          color: color,
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.05)",
        }}
        className="lg:flex rounded-[27px] overflow-hidden"
      >
        <div className="w-[570px] min-w-[570px] p-5 lg:py-[65px] lg:pl-[32px] lg:pr-[90px]">
          <div className="text-[14px] xl:text-[16px] xl:leading-[23px] font-semibold uppercase">
            {devTitle}
          </div>
          <div className="text-[30px] xl:text-[48px] xl:leading-[60px] font-semibold">
            {title}
          </div>
          <div className="text-[14px] xl:text-[16px] xl:leading-[23px] text-[#757575]">
            {content}
          </div>
          <div className="flex gap-2 mt-4">
            <div className="mt-1 w-fit min-w-[16px] text-[14px] xl:text-[16px]">
              <PortfolioCheck color={color} />
            </div>
            {app}
          </div>
          <Link href={url ? url : {}} target={"_blank"}>
            <button
              style={{ background: color }}
              className={clsx(
                "hidden lg:flex gap-1 text-[14px] xl:text-[16px] xl:leading-[23px] text-white font-semibold px-6 py-2 rounded-[36px] mt-5 xl:mt-[45px]",
                "pointer-events-auto"
              )}
            >
              Visit Website <VisitWebArrowRight />
            </button>
          </Link>
        </div>
        <div className="w-full p-5 lg:p-0 lg:bg-black">
          <Image
            src={img}
            className="w-full h-full hidden lg:block"
            width={1261}
            height={743}
            priority
            loading="eager"
            alt="portfolio"
          />
          <Image
            src={smallImg}
            className="w-full h-full block lg:hidden rounded-[24px]"
            width={1165}
            height={669}
            priority
            loading="eager"
            alt="portfolio"
          />
        </div>
      </div>
    </Link>
  );
};

const SmallFormDevelopment = ({
  color,
  devTitle,
  title,
  content,
  app,
  url,
  img,
}: any) => {
  return (
    <Link
      href={url ? url : {}}
      target={"_blank"}
      className={clsx(url ? "" : "pointer-events-none select-none")}
    >
      <div
        style={{
          color: color,
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.05)",
        }}
        className="h-full rounded-[27px] overflow-hidden p-6 flex flex-col"
      >
        <div className="w-full pb-[37px] flex-1">
          <div className="text-[14px] xl:text-[16px] xl:leading-[23px] font-semibold uppercase">
            {devTitle}
          </div>
          <div className="text-[30px] xl:text-[48px] xl:leading-[60px] font-semibold max-w-[270px]">
            {title}
          </div>
          <div className="text-[14px] xl:text-[16px] xl:leading-[23px] text-[#757575]">
            {content}
          </div>
          <div className="flex gap-2 mt-4">
            <div className="mt-1 w-fit min-w-[16px] text-[14px] xl:text-[16px]">
              <PortfolioCheck color={color} />
            </div>
            {app}
          </div>
        </div>
        <div className="w-full bg-black rounded-[24px]">
          <Image
            src={img}
            className="w-full h-auto xl:h-[278px] rounded-[24px]"
            width={586}
            height={418}
            priority
            loading="eager"
            alt="portfolio"
          />
        </div>
      </div>
    </Link>
  );
};

const OurPortfolio = () => {
  return (
    <div className="mt-[60px] xl:mt-[120px]">
      <div className="text-[40px] xl:text-[60px] xl:leading-[60px] text-center text-[#0030C0] font-semibold">
        Our Portfolio
      </div>
      <div className="max-w-[743px] mt-2 mx-auto text-center xl:text-[16px] text-[14px] text-[#0030C0] xl:leading-[23px] capitalize">
        With our hundreds of successful blockchain projects, you are guaranteed
        to haveyour idea turned into reality, along with cost-efficient
        development options.
      </div>
      <div className="mt-12 grid gap-5 xl:gap-12 max-w-[1440px] px-5 mx-auto capitalize">
        <BigFormDevelopment
          color="#00A52E"
          devTitle="MARKETPLACE DEVELOPMENT"
          title="Gamefi.org- Marketplace"
          content="GameFi's objective was to portray an elaborate virtual plaza of Web3 digital collectibles, where all NFT collections are under a concentrated entity."
          app="Dapps Wyvern Opensea, React Nextjs, nestjs, Tailwind CSS , NFT indexing"
          img="/images/home/porfolio_gamefi.png"
          smallImg="/images/home/porfolio_gamefi_small.png"
          url="https://gamefi.org/"
        />
        <div className="grid lg:grid-cols-3 gap-5 xl:gap-12">
          <SmallFormDevelopment
            color="#FF6B00"
            devTitle="BLOCKCHAIN DEVELOPMENT"
            title="Firebird Chain"
            content="Firebird's end-to-end infrastructure solution enables complete preparation and pragmatic strategies for blockchain and Web3 application development."
            app="Cosmos SDK, Tendermint BFT Consensus, Golang, Protobuf/gRPC"
            img="/images/home/portfolio_firebird.png"
            url="https://firebirdchain.com/"
          />
          <SmallFormDevelopment
            color="#00B2FF"
            devTitle="WALLET DEVELOPMENT"
            title="PolkaSafe Wallet"
            content="This blockchain mobile wallet was designed to support Polkadot's Auction Development, promising a simple, intuitive, and easy-to-navigate user experience."
            app="React native, Blockchain wallet"
            img="/images/home/portfolio_polkasafe.png"
          />
          <SmallFormDevelopment
            color="#1400FF"
            devTitle="COMMUNITY BUILDING"
            title="Metaforce.org"
            content="Introducing the Web3 gaming on-demand, work-to-earn protocol that incentivizes participants to support their favorite projects through meaningful contributions."
            app="TypeScript, React, NextJS, Tailwind CSS, Web3, MUI, AGGrid, Highcharts, ..."
            img="/images/home/portfolio_metaforce.png"
          />
        </div>
        <BigFormDevelopment
          color="#E10000"
          devTitle="LAUNCHPAD DEVELOPMENT"
          title="Red Kite"
          content="The DeFi-focused platform and multi-chain launchpad ensures a fair and ordered token sale experience using diverse and in-depth functions for participants."
          app="Node.js, React, Solidity, Redis, AWS"
          img="/images/home/portfolio_redkite.png"
          smallImg="/images/home/portfolio_redkite_small.png"
          url="https://firebirdchain.com/"
        />
        <BigFormDevelopment
          color="#3B0087"
          devTitle="eSports platform development"
          title="Desports"
          content="A decentralized eSports platform that offers comprehensive infrastructure for tournament organizers, players, KOLs, streamers and more "
          app="Node JS, TypeScripts, NestJS, React, NextJS, Tailwind CSS, MUI, Google Cloud Platform, Github Actions, Java, MongoDB Atlas"
          img="/images/home/portfolio_desport.png"
          smallImg="/images/home/portfolio_desport_small.png"
          url="https://www.desports.gg/"
        />
      </div>
    </div>
  );
};

export default OurPortfolio;
