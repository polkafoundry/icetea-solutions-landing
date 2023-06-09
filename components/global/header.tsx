import { navItems, nextPath, pathname } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { ImageComponent } from "./image";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { LogoText } from "../svg/logo-text";
import { ArrowDownHeader } from "../svg/arrow-down";
import { MenuIcon } from "../svg/menu";

const HeaderComponent = () => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShow = () => setIsShow(!isShow);

  return (
    <header className="h-[73px]">
      <div className="fixed w-full top-0 left-0 z-50 py-[14px] text-white bg-white">
        <div className="relative px-5 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex relative z-[1] scale-[0.8] lg:scale-[1]"
            onClick={() => setIsShow(false)}
          >
            <LogoText />
          </Link>
          <div className="lg:flex gap-5 items-center hidden">
            {navItems?.map((navItem: any, index: number) => {
              if (navItem?.subMenu) {
                return (
                  <div key={index} className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <div
                        className={clsx(
                          "text-[14px] leading-[45px]",
                          "xl:text-[16px] text-[#0030C0]"
                        )}
                      >
                        {navItem?.title}
                      </div>
                      {navItem?.subMenu && <ArrowDownHeader />}
                    </div>
                    <div className="absolute hidden group-hover:block top-[45px] -left-5 bg-white rounded-[12px] overflow-hidden shadow-md">
                      {navItem?.subMenu?.map((data: any, idx: number) => {
                        return (
                          <Link
                            key={idx}
                            href={`/${navItem?.value}/${data?.value}`}
                          >
                            <div
                              className={clsx(
                                "text-[14px]",
                                "px-5 py-2 xl:text-[16px] leading-[22px] text-[#0030C0] whitespace-nowrap hover:bg-[#0083FF] hover:text-white"
                              )}
                            >
                              {data?.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={index} href={`/${navItem?.value}`}>
                  <div className="flex items-center gap-1">
                    <div className="text-[14px] xl:text-[16px] leading-[45px] text-[#0030C0]">
                      {navItem?.title}
                    </div>
                  </div>
                </Link>
              );
            })}
            <Link href={`/${pathname?.CONTACT}`}>
              <button className="btn-fill-gradient px-3 py-2 xl:px-[18px] xl:py-[10px] border border-[#0083FF]">
                Contact Us
              </button>
            </Link>
          </div>
          <div
            className="relative z-[1] block lg:hidden"
            onClick={() => handleShow()}
          >
            <MenuIcon />
          </div>
          {isShow && (
            <div className="absolute z-0 w-full h-[100vh] top-0 left-0 pt-[57px] lg:hidden gap-5 items-center">
              <div className="bg-white w-full h-full py-8 px-5 text-center flex flex-col">
                <div className="pb-5 flex-1">
                  {navItems?.map((navItem: any, index: number) => {
                    if (navItem?.subMenu) {
                      return (
                        <div key={index} className="relative group">
                          <div className="bg-white rounded-[12px] overflow-hidden">
                            {navItem?.subMenu?.map((data: any, idx: number) => {
                              return (
                                <Link
                                  key={idx}
                                  href={`/${navItem?.value}/${data?.value}`}
                                  onClick={() => setIsShow(false)}
                                >
                                  <div
                                    className={clsx(
                                      "lg:text-[14px]",
                                      "px-5 py-2 xl:text-[16px] leading-[22px] text-[#0030C0] whitespace-nowrap lg:hover:bg-[#0083FF] lg:hover:text-white"
                                    )}
                                  >
                                    {data?.title}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={index}
                        href={`/${navItem?.value}`}
                        onClick={() => setIsShow(false)}
                      >
                        <div className="flex items-center gap-1 justify-center">
                          <div className="lg:text-[14px] xl:text-[16px] leading-[45px] text-[#0030C0]">
                            {navItem?.title}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <Link href={`/${pathname?.CONTACT}`}>
                  <button className="btn-fill-gradient w-full px-3 py-2 xl:px-[18px] xl:py-[10px] border border-[#0083FF]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
