import { nextPath } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ImageComponent } from "./image";

interface Props {
  isMail?: boolean;
}

const FooterComponent = ({ isMail }: Props) => {
  return (
    <div>
      {isMail && (
        <div className="h-[100px] relative">
          <div className="consult_us_bg absolute w-full translate-x-[-50%] left-[50%] max-w-[1320px] px-[80px] py-[60px] mx-auto flex justify-between text-white items-center">
            <div className="max-w-[520px]">
              <p className="text-[40px] leading-[50px]">
                Didn&apos;t find what you were looking for?
              </p>
              <p className="mt-[12px] opacity-[0.8]">
                Contact us for a custom-made solution.
              </p>
            </div>
            <div className="max-w-[480px] w-full">
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
          </div>
        </div>
      )}
      <div className="bg-[#111239]">
        <div className={clsx("footer_bg", isMail ? "pt-[170px]" : "pt-[50px]")}>
          <div className="w-full flex justify-between items-center max-w-[1240px] px-5 text-white mx-auto">
            <div>
              <p className="text-[28px] font-bold">Icetea Solutions</p>
              <p className="mt-8">
                11th Floor, IPH Tower, 241 Xuan Thuy Street, Cau Giay, Hanoi
              </p>
              <p className="mt-2">+84 246 658 5248</p>
              <button className="button_gradient_purple_blue text-white flex items-center gap-[10px] mt-[12px] px-[20px] py-[10px]">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#57BAFF] to-[#907CFE]">
                  iceteasolutions@icetea.io
                </span>
                <FaArrowRight fontSize={"14px"} color={"#00C7F4"} />
              </button>
            </div>
            <div className="opacity-[0.8]">
              <p className="hover:scale-110 duration-500">
                <Link href={`/${nextPath.PORTFOLIO}`}>Our Portfolio</Link>
              </p>
              <p className="mt-[12px] hover:scale-110 duration-500">
                <Link href={`/${nextPath.CONTACT}`}>Contact Us</Link>
              </p>
            </div>
            <ImageComponent
              src="/images/mail.png"
              className="w-[266px] h-[300px]"
              alt="mail"
            />
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
