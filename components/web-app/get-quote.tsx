import Image from "next/image";
import AboutUsArrowRight from "../svg/home/about-us-arrow-right";
import { SmallLogoInWebApp } from "../svg/insight/small-logo";
import Link from "next/link";
import { pathname } from "@/constants";

const GetQuote = () => {
  return (
    <div className="w-full flex border border-[#0083FF] rounded-[24px] bg-white overflow-hidden">
      <div className="w-full p-[48px]">
        <div className="max-w-[606px] text-[#0030C0] text-[16px] leading-[23px]">
          <div className="text-[48px] leading-[70px] font-semibold">
            Get Quote
          </div>
          <div className="mt-4">
            You are welcome to fill in the form below, and our IT experts will
            reach out to you during business hours to discuss your project.
          </div>
          <select className="w-full h-[46px] mt-8 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none">
            <option disabled selected>
              Type of consultation
            </option>
          </select>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                First name<span className="text-[#D31819]">*</span>
              </div>
              <input
                placeholder="Enter name"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
              />
            </div>
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Last name<span className="text-[#D31819]">*</span>
              </div>
              <input
                placeholder="Enter name"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Phone number
              </div>
              <input
                type="number"
                placeholder="Enter phone number"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
              />
            </div>
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Email<span className="text-[#D31819]">*</span>
              </div>
              <input
                placeholder="Enter email"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">Role</div>
              <input
                type="number"
                placeholder="Enter your role"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
              />
            </div>
            <div>
              <div className="font-[500] text-[20px] leading-[29px]">
                Company
              </div>
              <input
                placeholder="Enter company"
                className="w-full h-[46px] mt-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="font-[500] text-[20px] leading-[29px]">Message</div>
            <textarea
              placeholder="Enter message"
              className="w-full h-[150px] mt-2 py-2 px-4 border border-[#0030C0] text-[#757575] rounded-[6px] outline-none resize-none"
            />
          </div>
          <div className="flex gap-2 mt-8">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] border border-[#0030C0] rounded-[4px]"
            />
            <div className="text-[#757575]">
              I agree to the{" "}
              <span className="text-[#0030C0]">
                <Link href={`/${pathname?.PRIVACYPOLICY}`}>privacy policy</Link>
              </span>
            </div>
          </div>
          <button className="flex w-fit mt-8 gap-2 text-white items-center btn-fill-gradient px-6 py-2">
            Confirm the infomation
            <AboutUsArrowRight />
          </button>
        </div>
      </div>
      <div className="relative w-[597px] min-w-[597px] bg-gradient-to-b from-[#61B2FF] via-[#0083FF] to-[#01289D]">
        <Image
          src="/images/home/quote_bg.png"
          className="absolute top-0 left-0 w-full h-full mix-blend-screen pointer-events-none select-none z-0"
          width={597}
          height={996}
          alt="quote"
        />
        <div className="py-[69px] px-[44px] text-white">
          <SmallLogoInWebApp />
          <div className="text-[36px] leading-[46px] font-semibold mt-8 capitalize">
            Let&apos;s make our dreams realized now!
          </div>
          <div className="text-[16px] leading-[23px] mt-2">
            Thank you for your interest! Please fill out the left form, we will
            contact you as soon as possible.
            <br /> If you have something else to share with us, feel free to
            directly grab a talk via contact@morsoftware.com or hotline at +84
            869 738 833/ +81 3 5924 6616.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
