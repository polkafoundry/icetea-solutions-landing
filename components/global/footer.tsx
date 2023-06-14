import Image from "next/image";
import { LogoTextWhite } from "../svg/logo-text";
import { PositionIcon } from "../svg/position";
import { LinkedInIcon } from "../svg/linked-in";
import { FacebookIcon } from "../svg/facebook";
import { YoutubeIcon } from "../svg/youtube";
import Link from "next/link";
import { itsEmail, pathname } from "@/constants";

const FooterComponent = () => {
  return (
    <footer className="relative mt-[60px] xl:mt-[120px] overflow-hidden text-white">
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Image
          src="/images/footer_bg.png"
          className="w-full h-full"
          width={1920}
          height={1225}
          priority
          alt="footer"
        />
      </div>
      <div className="relative max-w-[1000px] xl:max-w-[1440px] px-5 mx-auto z-[1] pb-8 lg:pb-[90px]">
        <div className="grid lg:grid-cols-2 py-5 lg:py-[120px] xl:py-[240px] items-center">
          <Link href="/" className="my-5 lg:hidden">
            <LogoTextWhite />
          </Link>
          <div>
            <div className="text-[24px] lg:text-[35px] lg:leading-[50px] xl:text-[48px] xl:leading-[70px] font-semibold text-white capitalize">
              Do you want to turn your ideas into reality?
            </div>
            <div className="lg:max-w-[600px] text-[16px] leading-[23px] text-white mt-5 capitalize">
              We’re here to help you innovate with success. Our experts will
              conduct an in-depth analysis of your business model and industry
              to advise on implementing the most optimal technology solutions.
            </div>
          </div>
          <div className="text-center mt-5 lg:mt-0">
            <Link href={`/${pathname?.CONTACT}`}>
              <button className="btn-fill-white px-[30px] py-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 xl:gap-0">
          <div className="xl:pr-[190px]">
            <Link href="/" className="hidden lg:block">
              <LogoTextWhite />
            </Link>
            <div className="mt-6 text-[24px] leading-[35px] font-semibold text-white capitalize">
              Deliver bespoke solutions with expertise
            </div>
            <div className="text-[14px] leading-[23px] text-white mt-3">
              We offer IT experts who bring data-driven and innovative digital
              transformation approaches to our clients. Our skills and
              experience in Software Development have enabled sustainable growth
              for enterprises of all sizes.
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-2 items-center mt-9 text-white text-[23px] leading-[30px] font-bold">
                <PositionIcon />
                Ha Noi
              </div>
              <div className="mt-1 text-[18px] leading-[28px] text-white">
                +84 246 658 5248
              </div>
              <div className="w-full h-[1px] bg-white mt-[10px]" />
              <div className="mt-4 text-[16px] leading-[26px] text-white">
                11th Floor, IPH Tower, 241 Xuan Thuy Street, Cau Giay, Hanoi
                <br />
                <Link href={`mailto:${itsEmail}`}>{itsEmail}</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2 justify-between text-white">
              <div>
                <div className="text-[24px] leading-[35px] font-semibold mb-6">
                  About us
                </div>
                <div className="text-[16px] leading-[23px] mb-3">
                  Who we are
                </div>
                <div className="text-[16px] leading-[23px] mb-3">Adward</div>
                <div className="text-[16px] leading-[23px] mb-3">
                  Leadership
                </div>
                <div className="text-[16px] leading-[23px]">Contact</div>
              </div>
              <div>
                <div className="text-[24px] leading-[35px] font-semibold mb-6">
                  Services
                </div>
                <div className="text-[16px] leading-[23px] mb-3">
                  Offshore Development
                </div>
                <div className="text-[16px] leading-[23px] mb-3">
                  Salesforce Development
                </div>
                <div className="text-[16px] leading-[23px]">
                  Product and Service
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[63px]">
              <div className="text-[16px] lg:text-[24px] font-semibold">
                Get in touch
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  href={"https://www.linkedin.com/company/90634399/"}
                  target={"_blank"}
                >
                  <div className="flex w-[42px] h-[42px] items-center justify-center border border-white rounded-full">
                    <LinkedInIcon />
                  </div>
                </Link>
                <Link
                  href={"https://www.facebook.com/IceteaSoftware"}
                  target={"_blank"}
                >
                  <div className="flex w-[42px] h-[42px] items-center justify-center border border-white rounded-full">
                    <FacebookIcon />
                  </div>
                </Link>
                {/* <div className="flex w-[42px] h-[42px] items-center justify-center border border-white rounded-full">
                  <YoutubeIcon />
                </div> */}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex px-[10px] py-2 bg-white rounded-[60px]">
                <input
                  className="w-full px-3 outline-none border-none text-black"
                  placeholder="Enter your email Address"
                />
                <button className="btn-fill-gradient px-8 py-2 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex gap-2 items-center mt-9 text-white text-[23px] leading-[30px] font-bold">
              <PositionIcon />
              Ha Noi
            </div>
            <div className="mt-1 text-[18px] leading-[28px] font-semibold text-white">
              +84 246 658 5248
            </div>
            <div className="w-full h-[1px] bg-white mt-[10px]" />
            <div className="mt-4 text-[16px] leading-[26px] text-white">
              11th Floor, IPH Tower, 241 Xuan Thuy Street, Cau Giay, Hanoi
              <br />
              <Link href={`mailto:${itsEmail}`}>{itsEmail}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
