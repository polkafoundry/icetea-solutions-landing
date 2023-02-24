import { nextPath } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { ImageComponent } from "./image";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const HeaderComponent = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShow = () => setIsShow(!isShow);

  return (
    <header
      className={clsx(
        "flex justify-between items-center px-[20px] py-[14px] text-white",
        "md:px-[40px]",
        "xl:px-[100px]"
      )}
    >
      <Link href="/">
        <ImageComponent
          src="/images/logo_icetea_solution.svg"
          className="w-[160px] md:w-[200px] h-[18px] md:h-[34px]"
          alt="logo"
        />
      </Link>
      <div className="hidden gap-[60px] md:flex">
        <button className="hover:scale-110 duration-500">
          <Link href={`/${nextPath.PORTFOLIO}`}>Portfolio</Link>
        </button>
        <Link href={`/${nextPath.CONTACT}`}>
          <button className="px-[30px] py-[10px] rounded-[40px] bg-gradient-to-bl hover:bg-gradient-to-br from-[#18C8FF] to-[#933FFE]">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="md:hidden" onClick={() => handleShow()}>
        {isShow ? (
          <FaRegTimesCircle size={"26px"} />
        ) : (
          <ImageComponent
            className="w-[25px] h-[16px]"
            src="/images/menu.svg"
            alt="menu"
          />
        )}
      </div>
      {isShow && (
        <div className="mobile_menu_bg flex flex-col md:hidden fixed w-[100vw] h-[100vh] z-10 top-0 left-0">
          <div className="flex max-h-[70px] justify-between items-center px-[20px] py-[14px]">
            <Link href="/">
              <ImageComponent
                src="/images/logo_icetea_solution.svg"
                className="w-[160px] h-[18px]"
                alt="logo"
              />
            </Link>
            <div onClick={() => handleShow()}>
              <FaRegTimesCircle size={"26px"} />
            </div>
          </div>

          <div className="h-fit">
            <div className="text-center mt-[120px]">
              <button className="hover:scale-110 duration-500">
                <Link href={`/${nextPath.PORTFOLIO}`} className="text-[20px]">
                  Portfolio
                </Link>
              </button>
            </div>
            <div className="text-center mt-8">
              <Link href={`/${nextPath.CONTACT}`}>
                <button className="px-[30px] py-[10px] rounded-[40px] text-[18px] bg-gradient-to-bl hover:bg-gradient-to-br from-[#18C8FF] to-[#933FFE]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="flex gap-[12px] items-center justify-center mt-auto pb-[16px]">
            Powered by
            <ImageComponent
              className="w-[150px] h-[28px]"
              src="/images/home/icetea_logo.svg"
              alt="logo"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
