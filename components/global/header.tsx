import { navItems, nextPath, pathname } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { ImageComponent } from "./image";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { LogoText } from "../svg/logo-text";
import { ArrowDownHeader } from "../svg/arrow-down";

const HeaderComponent = () => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleShow = () => setIsShow(!isShow);

  return (
    <header className="h-[73px]">
      <div className="fixed w-full top-0 left-0 z-50 py-[14px] text-white bg-white">
        <div className="px-5 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/">
            <LogoText />
          </Link>
          <div className="flex gap-5 items-center">
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
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
