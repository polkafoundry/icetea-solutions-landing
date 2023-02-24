import { nextPath } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "./image";

const email = "iceteasolutions@icetea.io";

interface Props {
  isMail?: boolean;
}

const FooterComponent = ({ isMail }: Props) => {
  return (
    <div>
      {isMail && (
        <div className="md:h-[100px] relative">
          <div
            className={clsx(
              "consult_us_bg w-full max-w-[1320px] px-5 py-[60px] mx-auto text-center justify-between text-white items-center",
              "md:absolute md:translate-x-[-50%] md:left-[50%] md:flex md:text-left xl:px-[80px]"
            )}
          >
            <div className="max-w-[520px]">
              <p className="text-[24px] xl:text-[40px] leading-[30px] xl:leading-[50px]">
                Didn&apos;t find what you were looking for?
              </p>
              <p className="mt-[12px] opacity-[0.8]">
                Contact us for a custom-made solution.
              </p>
            </div>
            <div className="hidden md:block max-w-[480px] w-full">
              <div className="w-full flex border-[1.5px] p-[4px] border-white rounded-[40px] flex-nowrap">
                <input
                  type="email"
                  className="w-full px-[20px] outline-none bg-transparent"
                  placeholder="Enter your email address"
                />
                <button className="w-[160px] min-w-[160px] px-[20px] py-[10px] bg-white rounded-[40px] text-black">
                  Consult with us
                </button>
              </div>
            </div>
            <div className="w-full md:hidden mt-10">
              <input
                type="email"
                className="w-full h-[64px] px-[20px] text-[18px] outline-none bg-transparent border-[1.5px] p-[4px] border-white rounded-[40px]"
                placeholder="Enter your email address"
              />
              <button className="w-full h-[64px] min-w-[160px] text-[18px] mt-[12px] px-[20px] py-[10px] bg-white rounded-[40px] text-black">
                Consult with us
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#111239]">
        <div
          className={clsx(
            "footer_bg",
            isMail ? "pt-[80px] md:pt-[170px]" : "pt-[50px]"
          )}
        >
          <div className="w-full md:flex justify-between items-center max-w-[1240px] px-5 text-white mx-auto">
            <div className="text-center md:text-left">
              <Link href="/">
                <ImageComponent
                  src="/images/logo_icetea_solution.svg"
                  className="w-[266px] md:w-[200px] h-[29px] md:h-[34px] mx-auto md:mx-0"
                  alt="logo"
                />
              </Link>
              <p className="mt-5 xl:mt-8 text-[14px] xl:text-[16px]">
                11th Floor, IPH Tower, 241 Xuan Thuy Street, Cau Giay, Hanoi
              </p>
              <p className="mt-2 text-[14px] xl:text-[16px]">
                +84 246 658 5248
              </p>
              <Link href={`mailto:${email}`}>
                <button className="button_gradient_purple_blue text-white flex items-center gap-[10px] mt-[12px] px-[20px] py-[10px] mx-auto md:mx-0 hover:scale-110 duration-500">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#57BAFF] to-[#907CFE]">
                    {email}
                  </span>
                  <FaArrowRight fontSize={"14px"} color={"#00C7F4"} />
                </button>
              </Link>
            </div>
            <div className="flex md:w-1/2 justify-between items-center">
              <div className="opacity-[0.8]">
                <p className="hover:scale-110 duration-500 text-[14px] md:text-[16px]">
                  <Link href={`/${nextPath.PORTFOLIO}`}>Our Portfolio</Link>
                </p>
                <p className="mt-[12px] hover:scale-110 duration-500 text-[14px] md:text-[16px]">
                  <Link href={`/${nextPath.CONTACT}`}>Contact Us</Link>
                </p>
              </div>
              <ImageComponent
                src="/images/mail.png"
                className="w-[160px] xl:w-[266px] h-[160px] xl:h-[300px]"
                alt="mail"
              />
            </div>
          </div>
          <div className="w-full max-w-[1280px] mx-auto h-[1px] bg-white opacity-[0.1]" />
          <div className="py-[12px] text-center text-[14px] text-white">
            Copyright © 2023, Icetea Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
